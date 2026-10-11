// Abstract call-routing map: one incoming call splits into three possible paths
// (a person, an AI assistant, or voicemail) that all end in one recorded next
// step. Decorative layout only: no real text, figures, brand marks, or client
// content. It does not claim any of these paths is available.
export function CallRoutingIllustration() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract illustration of one incoming call splitting into three possible paths, a person, an AI assistant, and voicemail, that all lead to one recorded next step"
      className="block h-auto w-full max-w-md"
    >
      <circle cx="240" cy="150" r="140" fill="#FFFFFF" />
      <g transform="translate(10 0)">
        <g fill="none" stroke="#262626" strokeWidth="3" strokeLinecap="round">
          <path d="M82 150C104 150 100 70 120 70"/>
          <path d="M270 70C300 70 300 150 322 150"/>
          <path d="M82 150C104 150 100 150 120 150"/>
          <path d="M270 150C300 150 300 150 322 150"/>
          <path d="M82 150C104 150 100 230 120 230"/>
          <path d="M270 230C300 230 300 150 322 150"/>
        </g>
        <circle cx="56" cy="150" r="26" fill="#0098FD" stroke="#262626" strokeWidth="3"/>
        <g transform="translate(44 138)" fill="none" stroke="#262626" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>
        </g>
        <rect x="120" y="44" width="150" height="52" rx="12" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
        <rect x="120" y="44" width="10" height="52" rx="5" fill="#FFC503"/>
        <g fill="none" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="152" cy="65.0" r="4.8"/>
          <path d="M143.2 80.2c0-8 5-11 8.8 -11s8.8 3 8.8 11"/>
        </g>
        <rect x="184" y="61" width="64" height="7" rx="3.5" fill="#D4D4D4"/>
        <rect x="184" y="74" width="42" height="6" rx="3" fill="#E5E5E5"/>
        <rect x="120" y="124" width="150" height="52" rx="12" fill="#F2F9FF" stroke="#262626" strokeWidth="3" strokeDasharray="7 5"/>
        <rect x="120" y="124" width="10" height="52" rx="5" fill="#0098FD"/>
        <g fill="none" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M140 140h24a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-14l-8 6v-6h-2a3 3 0 0 1-3-3v-12a3 3 0 0 1 3-3z"/>
        </g>
        <g fill="#262626">
          <circle cx="146" cy="150" r="1.9"/>
          <circle cx="152" cy="150" r="1.9"/>
          <circle cx="158" cy="150" r="1.9"/>
        </g>
        <rect x="184" y="141" width="64" height="7" rx="3.5" fill="#D4D4D4"/>
        <rect x="184" y="154" width="42" height="6" rx="3" fill="#E5E5E5"/>
        <rect x="120" y="204" width="150" height="52" rx="12" fill="#F5F5F5" stroke="#262626" strokeWidth="3" strokeDasharray="2 5"/>
        <rect x="120" y="204" width="10" height="52" rx="5" fill="#A3A3A3"/>
        <g fill="none" stroke="#262626" strokeWidth="2.4" strokeLinecap="round">
          <circle cx="145" cy="230" r="5.5"/>
          <circle cx="159" cy="230" r="5.5"/>
          <path d="M145 235.5h14"/>
        </g>
        <rect x="184" y="221" width="64" height="7" rx="3.5" fill="#D4D4D4"/>
        <rect x="184" y="234" width="42" height="6" rx="3" fill="#E5E5E5"/>
        <circle cx="348" cy="150" r="26" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
        <rect x="338" y="138" width="20" height="24" rx="3" fill="#00D002" stroke="#262626" strokeWidth="2.2"/>
        <path d="M343 142h10v4h-10z" fill="#FFFFFF" stroke="#262626" strokeWidth="2"/>
        <path d="M342 152h12M342 157h8" stroke="#262626" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
  );
}
