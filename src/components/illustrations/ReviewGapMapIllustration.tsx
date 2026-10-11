// Abstract "gap map": three connected steps (request, monitor, reply) with one
// step highlighted as a gap. Decorative layout only: no real text, ratings,
// star counts, brand marks, or client content.
export function ReviewGapMapIllustration() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract illustration of three connected steps for asking for reviews, watching for them, and replying, with the middle step highlighted as a gap to look at"
      className="block h-auto w-full max-w-md"
    >
      <circle cx="240" cy="150" r="140" fill="#FFFFFF" />

      {/* Connecting path */}
      <path d="M128 150h56M296 150h56" stroke="#262626" strokeWidth="3" strokeLinecap="round" />
      <path d="M176 144l8 6-8 6M344 144l8 6-8 6" fill="none" stroke="#262626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Step 1: request (blue) */}
      <rect x="28" y="96" width="100" height="108" rx="14" fill="#FFFFFF" stroke="#262626" strokeWidth="3" />
      <rect x="28" y="96" width="100" height="28" rx="14" fill="#0098FD" />
      <circle cx="78" cy="160" r="16" fill="#F2F9FF" stroke="#262626" strokeWidth="2.5" />
      <path d="M69 155h18v11H69zM69 155l9 6 9-6" fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="48" y="184" width="60" height="6" rx="3" fill="#D4D4D4" />

      {/* Step 2: monitor (yellow, the gap) */}
      <rect x="190" y="96" width="100" height="108" rx="14" fill="#FFFFFF" stroke="#262626" strokeWidth="3" strokeDasharray="7 5" />
      <rect x="190" y="96" width="100" height="28" rx="14" fill="#FFC503" />
      <circle cx="237" cy="158" r="12" fill="#F2F9FF" stroke="#262626" strokeWidth="2.5" />
      <path d="M246 167l9 9" stroke="#262626" strokeWidth="3" strokeLinecap="round" />
      <rect x="210" y="184" width="60" height="6" rx="3" fill="#D4D4D4" />
      <circle cx="282" cy="92" r="11" fill="#FFC503" stroke="#262626" strokeWidth="2.5" />

      {/* Step 3: reply (green) */}
      <rect x="352" y="96" width="100" height="108" rx="14" fill="#FFFFFF" stroke="#262626" strokeWidth="3" />
      <rect x="352" y="96" width="100" height="28" rx="14" fill="#00D002" />
      <path d="M386 150h32v20h-20l-8 7v-7h-4z" fill="#F2F9FF" stroke="#262626" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="372" y="184" width="60" height="6" rx="3" fill="#D4D4D4" />

      {/* Step markers */}
      <circle cx="78" cy="228" r="4" fill="#0098FD" />
      <circle cx="240" cy="228" r="4" fill="#FFC503" />
      <circle cx="402" cy="228" r="4" fill="#00D002" />
    </svg>
  );
}
