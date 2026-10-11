// Abstract illustration: profile accuracy leads to customer actions, which lead to measurement. No client data.
export function ProfileWorkflowIllustration() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract illustration of a three-step workflow: profile accuracy leads to customer actions, which lead to measurement"
      className="block h-auto w-full max-w-md"
    >
      <circle cx="240" cy="150" r="140" fill="#F2F9FF"/>
      <rect x="90" y="28" width="300" height="64" rx="12" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
      <rect x="90" y="28" width="12" height="64" rx="6" fill="#FFC503"/>
      <text x="120" y="55" fontFamily="var(--font-heading), sans-serif" fontSize="16" fontWeight="700" fill="#171717">Profile accuracy</text>
      <rect x="120" y="66" width="150" height="6" rx="3" fill="#D4D4D4"/>
      <path d="M240 94v22M233 109l7 8 7-8" fill="none" stroke="#262626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="90" y="118" width="300" height="64" rx="12" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
      <rect x="90" y="118" width="12" height="64" rx="6" fill="#0098FD"/>
      <text x="120" y="145" fontFamily="var(--font-heading), sans-serif" fontSize="16" fontWeight="700" fill="#171717">Customer actions</text>
      <rect x="120" y="156" width="170" height="6" rx="3" fill="#D4D4D4"/>
      <path d="M240 184v22M233 199l7 8 7-8" fill="none" stroke="#262626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="90" y="208" width="300" height="64" rx="12" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
      <rect x="90" y="208" width="12" height="64" rx="6" fill="#00D002"/>
      <text x="120" y="235" fontFamily="var(--font-heading), sans-serif" fontSize="16" fontWeight="700" fill="#171717">Measurement</text>
      <rect x="120" y="246" width="130" height="6" rx="3" fill="#D4D4D4"/>
    </svg>
  );
}
