// Original illustration for the closing CTA on /industries/healthcare: a dental
// office, a medical office, and a med spa, with a consultation request answered by a
// person on the team. Illustrative only: no client data, results, vendor logos, or
// real software screens. Brand fills use the logo blue, green, and yellow with dark
// ink strokes; meaning is carried by shapes and labels, never by color alone
// (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";

export function HealthcareCtaIllustration() {
  return (
    <svg
      viewBox="0 0 400 370"
      role="img"
      aria-labelledby="hc-cta-title hc-cta-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="hc-cta-title">Practices and a conversation</title>
      <desc id="hc-cta-desc">
        A dental office, a medical office, and a med spa stand on a line. Above them a
        prospective patient asks whether they can request a consultation, and a named
        team member replies that the team will confirm the request.
      </desc>

      {/* Prospect question */}
      <rect x="30" y="18" width="226" height="52" rx="14" fill="#fff" stroke={ink} strokeWidth="2.5" />
      <path d="M70 70 L62 86 L92 70 Z" fill="#fff" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="66" y="66" width="30" height="6" fill="#fff" />
      <text x="143" y="40" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>
        Can I request a consultation?
      </text>
      <text x="143" y="58" textAnchor="middle" fontSize="11.5" fontWeight="500" fill={ink}>
        Prospective patient
      </text>

      {/* Reply from a person */}
      <rect x="150" y="100" width="220" height="58" rx="14" fill={yellow} stroke={ink} strokeWidth="2.5" />
      <path d="M338 158 L346 174 L316 158 Z" fill={yellow} stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="318" y="154" width="30" height="6" fill={yellow} />
      <circle cx="178" cy="129" r="14" fill="#fff" stroke={ink} strokeWidth="2" />
      <circle cx="178" cy="125" r="4.5" fill="#fff" stroke={ink} strokeWidth="1.8" />
      <path d="M170 136 C170 130 186 130 186 136" fill="#fff" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      <text x="200" y="125" fontSize="13.5" fontWeight="800" fill={ink}>
        Our team will confirm
      </text>
      <text x="200" y="143" fontSize="13.5" fontWeight="800" fill={ink}>
        your request
      </text>

      {/* Ground */}
      <path d="M16 330 H384" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />

      {/* Dental office with a tooth sign */}
      <rect x="30" y="226" width="104" height="104" rx="4" fill={blue} stroke={ink} strokeWidth="2.5" />
      <circle cx="82" cy="262" r="22" fill="#fff" stroke={ink} strokeWidth="2" />
      <path
        transform="translate(82 262)"
        d="M-11 -8 C-11 -16 -3 -16 0 -12 C3 -16 11 -16 11 -8 C11 0 8 3 7 11 C6 16 2 16 1 9 C0 6 0 6 -1 9 C-2 16 -6 16 -7 11 C-8 3 -11 0 -11 -8 Z"
        fill="#fff"
        stroke={ink}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect x="70" y="296" width="24" height="34" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />

      {/* Medical office with a cross sign */}
      <rect x="150" y="196" width="104" height="134" rx="4" fill={yellow} stroke={ink} strokeWidth="2.5" />
      <circle cx="202" cy="236" r="22" fill="#fff" stroke={ink} strokeWidth="2" />
      <path
        d="M196 226 H208 V230 H212 V242 H208 V246 H196 V242 H192 V230 H196 Z"
        fill={green}
        stroke={ink}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <g fill="#fff" stroke={ink} strokeWidth="1.8">
        <rect x="164" y="270" width="20" height="20" rx="2" />
        <rect x="220" y="270" width="20" height="20" rx="2" />
      </g>
      <rect x="190" y="296" width="24" height="34" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />

      {/* Med spa with a droplet sign */}
      <rect x="270" y="246" width="104" height="84" rx="4" fill={green} stroke={ink} strokeWidth="2.5" />
      <circle cx="322" cy="278" r="20" fill="#fff" stroke={ink} strokeWidth="2" />
      <path
        d="M322 266 C322 266 313 276 313 282 A9 9 0 0 0 331 282 C331 276 322 266 322 266 Z"
        fill="#fff"
        stroke={ink}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect x="310" y="302" width="24" height="28" rx="2" fill="#fff" stroke={ink} strokeWidth="1.8" />

      {/* Labels */}
      <text x="82" y="350" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ink}>
        Dental
      </text>
      <text x="202" y="350" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ink}>
        Medical
      </text>
      <text x="322" y="350" textAnchor="middle" fontSize="11.5" fontWeight="700" fill={ink}>
        Med spa
      </text>
    </svg>
  );
}
