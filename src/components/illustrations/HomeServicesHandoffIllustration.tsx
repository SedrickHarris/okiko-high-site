// Original illustration for the closing CTA on /industries/home-services: a call
// and a chat message are handed to a person on your team, who owns the callback.
// Illustrative only: no client data, results, vendor logos, or real software
// screens. Brand fills use the logo blue, green, and yellow with dark ink
// strokes; meaning is carried by shapes and labels, never by color alone (docs/05).

const ink = "var(--color-brand-ink)";
const blue = "var(--color-brand-blue)";
const green = "var(--color-brand-green)";
const yellow = "var(--color-brand-yellow)";

export function HomeServicesHandoffIllustration() {
  return (
    <svg
      viewBox="0 0 460 290"
      role="img"
      aria-labelledby="hs-handoff-title hs-handoff-desc"
      className="h-auto w-full"
      style={{ fontFamily: "var(--font-heading), ui-sans-serif, system-ui, sans-serif" }}
    >
      <title id="hs-handoff-title">A call and a chat handed to your team</title>
      <desc id="hs-handoff-desc">
        A phone call and a chat message are passed to a person on your team, who
        then owns the callback.
      </desc>
      <defs>
        <marker
          id="hs-handoff-arrow"
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

      {/* Phone call */}
      <g>
        <rect x="24" y="22" width="64" height="104" rx="12" fill="#fff" stroke={ink} strokeWidth="2" />
        <rect x="46" y="29" width="20" height="4" rx="2" fill={ink} />
        <circle cx="56" cy="68" r="16" fill={green} stroke={ink} strokeWidth="2" />
        <path
          d="M49 62 C49 70 54 76 62 77 L64 73 L60 70 L58 72 C55 71 53 69 52 66 L54 64 L51 60 Z"
          fill={ink}
        />
        <rect x="36" y="94" width="40" height="7" rx="3.5" fill="#d4d4d4" />
        <text x="56" y="146" textAnchor="middle" fontSize="14" fontWeight="600" fill={ink}>
          Phone call
        </text>
      </g>

      {/* Chat message */}
      <g>
        <path
          d="M20 178 H112 A14 14 0 0 1 126 192 V222 A14 14 0 0 1 112 236 H48 L32 252 V236 H34 A14 14 0 0 1 20 222 V192 A14 14 0 0 1 20 178 Z"
          fill={blue}
          stroke={ink}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="52" cy="207" r="4" fill={ink} />
        <circle cx="72" cy="207" r="4" fill={ink} />
        <circle cx="92" cy="207" r="4" fill={ink} />
        <text x="73" y="276" textAnchor="middle" fontSize="14" fontWeight="600" fill={ink}>
          Chat or text
        </text>
      </g>

      {/* Handoff arrows */}
      <path d="M92 76 C140 76 160 118 198 134" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-handoff-arrow)" />
      <path d="M130 206 C166 206 172 172 202 162" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-handoff-arrow)" />

      {/* Person with headset */}
      <g>
        <circle cx="250" cy="150" r="48" fill={yellow} stroke={ink} strokeWidth="2.5" />
        <circle cx="250" cy="142" r="12" fill="#fff" stroke={ink} strokeWidth="2.5" />
        <path d="M226 148 A24 24 0 0 1 274 148" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
        <rect x="219" y="144" width="10" height="20" rx="5" fill={ink} />
        <rect x="271" y="144" width="10" height="20" rx="5" fill={ink} />
        <path d="M276 164 C276 176 266 180 254 180" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="252" cy="180" r="3.5" fill={ink} />
        <rect x="200" y="206" width="100" height="30" rx="15" fill={green} stroke={ink} strokeWidth="2" />
        <text x="250" y="226" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>
          Your team
        </text>
      </g>

      {/* Callback owned by a person */}
      <path d="M300 150 H340" fill="none" stroke={ink} strokeWidth="2.5" markerEnd="url(#hs-handoff-arrow)" />
      <g>
        <rect x="346" y="106" width="98" height="88" rx="10" fill="#fff" stroke={ink} strokeWidth="2" />
        <rect x="346" y="106" width="98" height="24" rx="10" fill={blue} stroke={ink} strokeWidth="2" />
        <text x="395" y="123" textAnchor="middle" fontSize="13.5" fontWeight="700" fill={ink}>
          Callback
        </text>
        <circle cx="366" cy="150" r="7" fill={green} stroke={ink} strokeWidth="1.5" />
        <path d="M362.5 150 L365 152.5 L370 147" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="380" y="146" width="50" height="7" rx="3.5" fill="#d4d4d4" />
        <rect x="358" y="168" width="72" height="7" rx="3.5" fill="#d4d4d4" />
      </g>
    </svg>
  );
}
