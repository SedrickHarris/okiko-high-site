// Original illustration for /industries/professional-services: a firm's website
// leads to an inquiry, the inquiry is assigned to a named person, and that person
// decides the next step. Illustrative only: no client data, results, vendor logos,
// or real software screens, and all text on the mock site is generic placeholder
// wording. Brand fills use the logo blue, green, and yellow with dark ink strokes;
// meaning is carried by shapes and labels, never by color alone (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";
const gray = "#d4d4d4";

export function ProfessionalServicesHeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 440"
      role="img"
      aria-labelledby="ps-hero-title ps-hero-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="ps-hero-title">From a firm&apos;s website to a named person</title>
      <desc id="ps-hero-desc">
        A firm&apos;s website with a services list, a credentials row, and a contact
        button leads to a new inquiry. The inquiry is assigned to a named person,
        who decides the next step, such as a consultation or a callback.
      </desc>
      <defs>
        <marker
          id="ps-hero-arrow"
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

      {/* 1. Firm website (placeholder content) */}
      <g>
        <rect x="30" y="8" width="340" height="134" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <path d="M30 20 A12 12 0 0 1 42 8 H358 A12 12 0 0 1 370 20 V34 H30 Z" fill={blue} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="48" cy="21" r="4" fill="#fff" stroke={ink} strokeWidth="1.5" />
        <circle cx="62" cy="21" r="4" fill="#fff" stroke={ink} strokeWidth="1.5" />
        <circle cx="76" cy="21" r="4" fill="#fff" stroke={ink} strokeWidth="1.5" />
        <text x="50" y="62" fontSize="14" fontWeight="700" fill={ink}>
          Our services
        </text>
        <rect x="50" y="72" width="150" height="7" rx="3.5" fill={gray} />
        <rect x="50" y="86" width="120" height="7" rx="3.5" fill={gray} />
        {/* Credentials row */}
        <g>
          <circle cx="58" cy="116" r="9" fill="#fff" stroke={ink} strokeWidth="2" />
          <path d="M54 116 L57 119 L63 112" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="84" cy="116" r="9" fill="#fff" stroke={ink} strokeWidth="2" />
          <path d="M80 116 L83 119 L89 112" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="102" y="121" fontSize="12" fontWeight="600" fill={ink}>
            Credentials
          </text>
        </g>
        {/* Contact button */}
        <rect x="262" y="96" width="86" height="30" rx="8" fill={yellow} stroke={ink} strokeWidth="2" />
        <text x="305" y="116" textAnchor="middle" fontSize="13" fontWeight="700" fill={ink}>
          Contact
        </text>
      </g>

      <path d="M200 144 V174" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#ps-hero-arrow)" />

      {/* 2. Inquiry */}
      <g>
        <rect x="60" y="178" width="280" height="62" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <circle cx="96" cy="209" r="19" fill={blue} stroke={ink} strokeWidth="2" />
        <path
          d="M86 202 H106 A3 3 0 0 1 109 205 V213 A3 3 0 0 1 106 216 H98 L92 221 V216 H86 A3 3 0 0 1 83 213 V205 A3 3 0 0 1 86 202 Z"
          fill="#fff"
          stroke={ink}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text x="126" y="205" fontSize="15" fontWeight="700" fill={ink}>
          New inquiry
        </text>
        <text x="126" y="224" fontSize="12" fontWeight="500" fill={ink}>
          Minimal details only
        </text>
      </g>

      <path d="M200 242 V272" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#ps-hero-arrow)" />

      {/* 3. Named person */}
      <g>
        <rect x="60" y="276" width="280" height="62" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <circle cx="96" cy="307" r="20" fill={yellow} stroke={ink} strokeWidth="2" />
        <circle cx="96" cy="301" r="7" fill="#fff" stroke={ink} strokeWidth="2" />
        <path d="M82 320 C82 311 110 311 110 320" fill="#fff" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        <text x="128" y="303" fontSize="15" fontWeight="700" fill={ink}>
          Named person
        </text>
        <text x="128" y="322" fontSize="12" fontWeight="500" fill={ink}>
          Partner or intake lead
        </text>
      </g>

      <path d="M200 340 V370" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#ps-hero-arrow)" />

      {/* 4. Next step */}
      <g>
        <rect x="60" y="374" width="280" height="62" rx="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <rect x="76" y="388" width="40" height="36" rx="7" fill={green} stroke={ink} strokeWidth="2" />
        <path d="M76 400 H116" stroke={ink} strokeWidth="2" />
        <path d="M88 384 V392 M104 384 V392" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M88 412 L94 417 L104 407" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="128" y="401" fontSize="15" fontWeight="700" fill={ink}>
          Next step
        </text>
        <text x="128" y="420" fontSize="12" fontWeight="500" fill={ink}>
          Consultation or callback
        </text>
      </g>
    </svg>
  );
}
