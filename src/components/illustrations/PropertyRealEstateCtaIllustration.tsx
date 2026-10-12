// Original illustration for the closing CTA on /industries/property-management-real-estate:
// an apartment building, a house, and a leasing office, with a rental prospect's
// question answered by a person. Illustrative only: no client data, results, vendor
// logos, or real software screens. Brand fills use the logo blue, green, and yellow
// with dark ink strokes; meaning is carried by shapes and labels, never by color
// alone (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";

export function PropertyRealEstateCtaIllustration() {
  return (
    <svg
      viewBox="0 0 400 370"
      role="img"
      aria-labelledby="pre-cta-title pre-cta-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="pre-cta-title">Properties and a conversation</title>
      <desc id="pre-cta-desc">
        An apartment building for residents, a house for owners, and a leasing office
        stand on a line. Above them a rental prospect asks whether they can tour on
        Saturday, and a named person replies that they will follow up with next steps.
      </desc>

      {/* Prospect question */}
      <rect x="30" y="18" width="210" height="52" rx="14" fill="#fff" stroke={ink} strokeWidth="2.5" />
      <path d="M70 70 L62 86 L92 70 Z" fill="#fff" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="66" y="66" width="30" height="6" fill="#fff" />
      <text x="135" y="40" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>
        Can I tour on Saturday?
      </text>
      <text x="135" y="58" textAnchor="middle" fontSize="11.5" fontWeight="500" fill={ink}>
        Rental prospect
      </text>

      {/* Reply from a person */}
      <rect x="160" y="100" width="210" height="58" rx="14" fill={yellow} stroke={ink} strokeWidth="2.5" />
      <path d="M338 158 L346 174 L316 158 Z" fill={yellow} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="318" y="154" width="30" height="6" fill={yellow} />
      <circle cx="188" cy="129" r="14" fill="#fff" stroke={ink} strokeWidth="2" />
      <circle cx="188" cy="125" r="4.5" fill="#fff" stroke={ink} strokeWidth="1.8" />
      <path d="M180 136 C180 130 196 130 196 136" fill="#fff" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      <text x="210" y="125" fontSize="13.5" fontWeight="800" fill={ink}>
        A person follows up
      </text>
      <text x="210" y="143" fontSize="13.5" fontWeight="800" fill={ink}>
        with next steps
      </text>

      {/* Ground */}
      <path d="M16 330 H384" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />

      {/* Apartment building */}
      <rect x="34" y="196" width="108" height="134" rx="4" fill={blue} stroke={ink} strokeWidth="2.5" />
      <g fill="#fff" stroke={ink} strokeWidth="1.8">
        <rect x="48" y="210" width="20" height="20" rx="2" />
        <rect x="80" y="210" width="20" height="20" rx="2" />
        <rect x="112" y="210" width="20" height="20" rx="2" />
        <rect x="48" y="244" width="20" height="20" rx="2" />
        <rect x="80" y="244" width="20" height="20" rx="2" />
        <rect x="112" y="244" width="20" height="20" rx="2" />
        <rect x="48" y="278" width="20" height="20" rx="2" />
        <rect x="112" y="278" width="20" height="20" rx="2" />
      </g>
      <rect x="80" y="296" width="20" height="34" rx="2" fill={yellow} stroke={ink} strokeWidth="1.8" />

      {/* House */}
      <path d="M166 330 V268 L222 222 L278 268 V330 Z" fill={yellow} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="204" y="286" width="36" height="44" rx="3" fill="#fff" stroke={ink} strokeWidth="2" />
      <circle cx="232" cy="310" r="2.5" fill={ink} />
      <rect x="178" y="276" width="18" height="18" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />
      <rect x="248" y="276" width="18" height="18" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />

      {/* Leasing office */}
      <rect x="296" y="262" width="76" height="68" rx="4" fill={green} stroke={ink} strokeWidth="2.5" />
      <rect x="290" y="252" width="88" height="14" rx="3" fill="#fff" stroke={ink} strokeWidth="2.5" />
      <rect x="310" y="282" width="22" height="20" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />
      <rect x="340" y="288" width="20" height="42" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />

      {/* Labels */}
      <text x="88" y="350" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ink}>
        Residents
      </text>
      <text x="222" y="350" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ink}>
        Owners
      </text>
      <text x="334" y="350" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ink}>
        Leasing office
      </text>
    </svg>
  );
}
