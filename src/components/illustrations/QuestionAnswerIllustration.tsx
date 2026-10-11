// Abstract illustration of a question bubble answered by a reply card with three checked items and a button. Not a real conversation.
export function QuestionAnswerIllustration() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract illustration of a question bubble answered by a reply card with three checked items, next to a button"
      className="block h-auto w-full max-w-[26rem]"
    >
      <circle cx="240" cy="150" r="140" fill="#FFFFFF" />
      {/* Reply card */}
      <rect x="190" y="36" width="240" height="124" rx="14" fill="#FFFFFF" stroke="#262626" strokeWidth="3" />
      <path d="M190 76V50a14 14 0 0 1 14-14h212a14 14 0 0 1 14 14v26z" fill="#0098FD" />
      <rect x="190" y="74" width="240" height="3" fill="#262626" />
      <circle cx="214" cy="56" r="10" fill="#FFFFFF" stroke="#262626" strokeWidth="2.4" />
      <rect x="232" y="48" width="100" height="9" rx="4" fill="#171717" />
      <rect x="232" y="62" width="64" height="6" rx="3" fill="#FFFFFF" />
      {[
        { y: 98, w: 150 },
        { y: 120, w: 124 },
        { y: 142, w: 138 },
      ].map((row) => (
        <g key={row.y}>
          <circle cx="212" cy={row.y} r="8" fill="#00D002" stroke="#262626" strokeWidth="2.2" />
          <path
            d={`M208 ${row.y}l3 3 5-5.5`}
            fill="none"
            stroke="#171717"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="230" y={row.y - 4} width={row.w} height="8" rx="4" fill="#D4D4D4" />
        </g>
      ))}
      {/* Question bubble */}
      <path
        d="M50 190a14 14 0 0 1 14-14h172a14 14 0 0 1 14 14v36a14 14 0 0 1-14 14H88l-26 20v-20a14 14 0 0 1-12-14z"
        fill="#F2F9FF"
        stroke="#262626"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="84" cy="208" r="16" fill="#FFC503" stroke="#262626" strokeWidth="2.6" />
      <text
        x="84"
        y="215"
        textAnchor="middle"
        fontFamily="Manrope, Arial, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#171717"
        aria-hidden="true"
      >
        ?
      </text>
      <rect x="112" y="199" width="110" height="8" rx="4" fill="#D4D4D4" />
      <rect x="112" y="214" width="76" height="7" rx="3.5" fill="#E5E5E5" />
      {/* Button */}
      <rect x="290" y="196" width="140" height="46" rx="23" fill="#FFC503" stroke="#262626" strokeWidth="3" />
      <rect x="312" y="216" width="56" height="8" rx="4" fill="#171717" opacity="0.75" />
      <path
        d="M388 219h22m-8-8l8 8-8 8"
        fill="none"
        stroke="#262626"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
