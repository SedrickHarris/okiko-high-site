// Original illustration for /industries/home-services: how an inquiry reaches a
// named person who decides the next step. Illustrative only: no client data,
// results, vendor logos, or real software screens. Brand fills use the logo
// blue, green, and yellow with dark ink strokes; meaning is carried by shapes
// and labels, never by color alone (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";

export function HomeServicesHeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 440"
      role="img"
      aria-labelledby="hs-hero-title hs-hero-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="hs-hero-title">From inquiry to a named owner</title>
      <desc id="hs-hero-desc">
        A website and a phone send an inquiry to a named owner on your team, who
        decides whether it becomes a booking request or a completed job.
      </desc>
      <defs>
        <marker
          id="hs-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill={ink} />
        </marker>
      </defs>

      {/* Sources: website and Google, phone */}
      <g>
        <rect x="30" y="20" width="110" height="70" rx="6" fill="#fff" stroke={ink} strokeWidth="2" />
        <rect x="30" y="20" width="110" height="16" rx="6" fill={blue} stroke={ink} strokeWidth="2" />
        <rect x="40" y="46" width="60" height="6" rx="3" fill="#d4d4d4" />
        <rect x="40" y="58" width="80" height="6" rx="3" fill="#d4d4d4" />
        <rect x="40" y="70" width="40" height="8" rx="4" fill={yellow} stroke={ink} strokeWidth="1.5" />
        <rect x="18" y="92" width="134" height="8" rx="4" fill={ink} />
        <text x="85" y="124" textAnchor="middle" fontSize="14" fontWeight="600" fill={ink}>
          Website and Google
        </text>
      </g>
      <g>
        <rect x="290" y="14" width="56" height="96" rx="10" fill="#fff" stroke={ink} strokeWidth="2" />
        <rect x="312" y="20" width="12" height="4" rx="2" fill={ink} />
        <rect x="298" y="36" width="40" height="28" rx="8" fill={yellow} stroke={ink} strokeWidth="1.5" />
        <circle cx="308" cy="50" r="2.5" fill={ink} />
        <circle cx="318" cy="50" r="2.5" fill={ink} />
        <circle cx="328" cy="50" r="2.5" fill={ink} />
        <rect x="298" y="72" width="30" height="8" rx="4" fill="#d4d4d4" />
        <rect x="298" y="86" width="22" height="8" rx="4" fill="#d4d4d4" />
        <text x="318" y="130" textAnchor="middle" fontSize="14" fontWeight="600" fill={ink}>
          Calls and messages
        </text>
      </g>

      {/* Sources to inquiry */}
      <path d="M85 134 C85 160 150 152 172 174" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-arrow)" />
      <path d="M318 138 C318 160 252 152 228 174" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-arrow)" />

      {/* Inquiry card */}
      <g>
        <rect x="130" y="176" width="140" height="56" rx="10" fill="#fff" stroke={ink} strokeWidth="2" />
        <rect x="130" y="176" width="140" height="22" rx="10" fill={blue} stroke={ink} strokeWidth="2" />
        <text x="200" y="192" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>
          Inquiry
        </text>
        <rect x="146" y="206" width="70" height="6" rx="3" fill="#d4d4d4" />
        <rect x="146" y="217" width="96" height="6" rx="3" fill="#d4d4d4" />
      </g>

      <path d="M200 234 V262" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-arrow)" />

      {/* Named owner */}
      <g>
        <rect x="90" y="266" width="220" height="72" rx="12" fill={yellow} stroke={ink} strokeWidth="2" />
        <circle cx="132" cy="302" r="20" fill="#fff" stroke={ink} strokeWidth="2" />
        <circle cx="132" cy="296" r="6" fill="none" stroke={ink} strokeWidth="2" />
        <path d="M120 314 C122 305 142 305 144 314" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        <text x="226" y="297" textAnchor="middle" fontSize="15" fontWeight="700" fill={ink}>
          Named owner
        </text>
        <text x="226" y="316" textAnchor="middle" fontSize="12.5" fontWeight="500" fill={ink}>
          decides the next step
        </text>
      </g>

      {/* Owner to outcomes */}
      <path d="M160 340 C160 358 112 354 104 374" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-arrow)" />
      <path d="M240 340 C240 358 288 354 296 374" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-arrow)" />

      {/* Outcomes */}
      <g>
        <rect x="36" y="378" width="136" height="54" rx="10" fill="#fff" stroke={ink} strokeWidth="2" />
        <rect x="36" y="378" width="136" height="14" rx="10" fill={blue} stroke={ink} strokeWidth="2" />
        <text x="104" y="414" textAnchor="middle" fontSize="13.5" fontWeight="600" fill={ink}>
          Booking or request
        </text>
        <text x="104" y="427" textAnchor="middle" fontSize="11" fontWeight="500" fill={ink}>
          confirmed by a person
        </text>
      </g>
      <g>
        <rect x="228" y="378" width="136" height="54" rx="10" fill={green} stroke={ink} strokeWidth="2" />
        <circle cx="256" cy="405" r="13" fill="#fff" stroke={ink} strokeWidth="2" />
        <path d="M250 405 L255 410 L263 399" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="322" y="410" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>
          Completed job
        </text>
      </g>
    </svg>
  );
}
