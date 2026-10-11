// Abstract illustration of a review list with a reply drafted under one review,
// beside a short checklist. Decorative layout only: no real text, ratings, star
// counts, brand marks, or client content.
export function ReviewWorkflowIllustration() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract illustration of a list of customer reviews with a reply drafted under one of them, and a checklist showing a request sent, a new review noticed, and a reply approved"
      className="block h-auto w-full max-w-md"
    >
      <circle cx="240" cy="150" r="140" fill="#F2F9FF" />

      {/* Review list panel */}
      <rect x="40" y="38" width="300" height="206" rx="12" fill="#FFFFFF" stroke="#262626" strokeWidth="3" />
      <rect x="40" y="38" width="300" height="22" rx="12" fill="#F5F5F5" />
      <circle cx="56" cy="49" r="3" fill="#FFC503" />
      <circle cx="67" cy="49" r="3" fill="#00D002" />
      <circle cx="78" cy="49" r="3" fill="#0098FD" />

      {/* Review 1 */}
      <circle cx="64" cy="86" r="9" fill="#D4D4D4" />
      <rect x="82" y="78" width="104" height="7" rx="3" fill="#262626" />
      <rect x="82" y="91" width="170" height="6" rx="3" fill="#D4D4D4" />
      <rect x="266" y="78" width="56" height="16" rx="8" fill="#F2F9FF" stroke="#0098FD" strokeOpacity="0.6" />

      {/* Review 2 with a drafted reply */}
      <circle cx="64" cy="124" r="9" fill="#D4D4D4" />
      <rect x="82" y="116" width="84" height="7" rx="3" fill="#262626" />
      <rect x="82" y="129" width="150" height="6" rx="3" fill="#D4D4D4" />
      <rect x="82" y="143" width="150" height="40" rx="8" fill="#F2F9FF" stroke="#0098FD" strokeOpacity="0.6" />
      <rect x="82" y="143" width="4" height="40" rx="2" fill="#0098FD" />
      <rect x="96" y="153" width="122" height="6" rx="3" fill="#D4D4D4" />
      <rect x="96" y="165" width="84" height="6" rx="3" fill="#D4D4D4" />

      {/* Review 3 */}
      <circle cx="64" cy="208" r="9" fill="#D4D4D4" />
      <rect x="82" y="200" width="96" height="7" rx="3" fill="#262626" />
      <rect x="82" y="213" width="140" height="6" rx="3" fill="#D4D4D4" />
      <rect x="82" y="226" width="62" height="4" rx="2" fill="#FFC503" />

      {/* Notification dot */}
      <circle cx="334" cy="42" r="11" fill="#FFC503" stroke="#262626" strokeWidth="2.5" />

      {/* Checklist card */}
      <rect x="246" y="150" width="172" height="124" rx="14" fill="#FFFFFF" stroke="#262626" strokeWidth="3" />
      <rect x="246" y="150" width="172" height="26" rx="14" fill="#0098FD" />
      <rect x="262" y="159" width="66" height="8" rx="3" fill="#171717" />

      <circle cx="268" cy="196" r="8" fill="#00D002" />
      <path d="M264.5 196l2.7 2.7 4.8-5" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="284" y="192" width="100" height="7" rx="3" fill="#D4D4D4" />

      <circle cx="268" cy="224" r="8" fill="#00D002" />
      <path d="M264.5 224l2.7 2.7 4.8-5" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="284" y="220" width="84" height="7" rx="3" fill="#D4D4D4" />

      <circle cx="268" cy="252" r="8" fill="#FFFFFF" stroke="#0068B5" strokeWidth="2" strokeDasharray="3 2.5" />
      <rect x="284" y="248" width="94" height="7" rx="3" fill="#D4D4D4" />
    </svg>
  );
}
