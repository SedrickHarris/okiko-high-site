// Checks the audience x service combo pages. Plain Node, no new dependencies:
// it transpiles each combo content file with the TypeScript compiler that is
// already a devDependency, so the files are checked as written.
//
// Fails (exit 1) on:
// - duplicate titles, descriptions, H1s, primary keywords, or FAQ questions
// - a combo file whose audience/service does not match its path or a known slug
// - a combo file missing from src/content/combos/registry.ts
// - an em dash in any combo copy
// - the banned caption (owner instruction, 2026-10-11) anywhere under src/
//
// Combo content files may only use `import type`, because they are executed here
// without a module resolver.

import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "src");
const combosDir = path.join(srcDir, "content", "combos");

const AUDIENCES = [
  "home-services",
  "professional-services",
  "property-management-real-estate",
  "healthcare",
];
const SERVICES = [
  "website-design",
  "ai-chatbots",
  "ai-receptionist",
  "reputation-management",
  "google-business-profile",
  "sms-email-automation",
];

const errors = [];
const fail = (message) => errors.push(message);
const rel = (file) => path.relative(root, file).split(path.sep).join("/");

function walk(dir, filter, out = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, filter, out);
    else if (filter(full)) out.push(full);
  }
  return out;
}

const normalize = (text) => text.toLowerCase().replace(/\s+/g, " ").trim();

function loadCombo(file) {
  const source = readFileSync(file, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: file,
  });
  const mod = { exports: {} };
  const require = (id) => {
    throw new Error(`combo files may only use "import type" (found a runtime import of "${id}")`);
  };
  vm.runInNewContext(outputText, { module: mod, exports: mod.exports, require });
  return mod.exports.combo;
}

function* strings(value) {
  if (typeof value === "string") yield value;
  else if (Array.isArray(value)) for (const item of value) yield* strings(item);
  else if (value && typeof value === "object") for (const item of Object.values(value)) yield* strings(item);
}

// 1. Banned caption, anywhere under src/. Built in pieces so this file never trips itself.
const banned = ["Illustrative handoff", "not a client project."].join(", ");
for (const file of walk(srcDir, (f) => /\.(tsx?|css|mdx?)$/.test(f))) {
  if (readFileSync(file, "utf8").toLowerCase().includes(banned.toLowerCase())) {
    fail(`${rel(file)}: contains the banned caption "${banned}"`);
  }
}

// 2. Combo content files.
let comboFiles = [];
try {
  comboFiles = walk(combosDir, (f) => f.endsWith(".ts") && path.dirname(f) !== combosDir);
} catch {
  fail(`${rel(combosDir)} is missing`);
}

const registrySource = readFileSync(path.join(combosDir, "registry.ts"), "utf8");
const seen = { title: new Map(), description: new Map(), h1: new Map(), primaryKeyword: new Map(), faq: new Map() };

function track(kind, text, where) {
  if (typeof text !== "string" || !text.trim()) {
    fail(`${where}: missing ${kind}`);
    return;
  }
  const key = normalize(text);
  const first = seen[kind].get(key);
  if (first) fail(`${where}: duplicate ${kind} "${text}" (also in ${first})`);
  else seen[kind].set(key, where);
}

for (const file of comboFiles) {
  const where = rel(file);
  let combo;
  try {
    combo = loadCombo(file);
  } catch (error) {
    fail(`${where}: could not load (${error.message})`);
    continue;
  }
  if (!combo) {
    fail(`${where}: must export a "combo" object`);
    continue;
  }

  const audienceDir = path.basename(path.dirname(file));
  const serviceFile = path.basename(file, ".ts");
  if (!AUDIENCES.includes(combo.audience)) fail(`${where}: unknown audience "${combo.audience}"`);
  if (!SERVICES.includes(combo.service)) fail(`${where}: unknown service "${combo.service}"`);
  if (combo.audience !== audienceDir || combo.service !== serviceFile) {
    fail(`${where}: audience/service ("${combo.audience}/${combo.service}") do not match the file path`);
  }
  if (!registrySource.includes(`"./${audienceDir}/${serviceFile}"`)) {
    fail(`${where}: not imported in src/content/combos/registry.ts`);
  }

  track("title", combo.title, where);
  track("description", combo.description, where);
  track("h1", combo.h1, where);
  track("primaryKeyword", combo.primaryKeyword, where);
  if (!Array.isArray(combo.faqs) || combo.faqs.length === 0) fail(`${where}: needs at least one FAQ`);
  for (const faq of combo.faqs ?? []) track("faq", faq.question, where);

  for (const text of strings(combo)) {
    if (text.includes("—")) fail(`${where}: em dash in copy: "${text.slice(0, 80)}"`);
  }
}

if (errors.length) {
  console.error(`check-combos: ${errors.length} problem(s)\n`);
  for (const message of errors) console.error(`  - ${message}`);
  process.exit(1);
}
console.log(`check-combos: OK (${comboFiles.length} combo file(s), banned caption not found under src/)`);
