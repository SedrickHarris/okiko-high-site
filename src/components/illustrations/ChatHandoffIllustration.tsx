// Abstract chat-handoff map: a visitor's message enters a chat widget, then
// follows one of two paths (answered from approved information, or handed to
// the team) that both end with a person confirming the next step. Decorative
// layout only: no real text, figures, brand marks, or client content. It does
// not claim any specific integration or outcome.
export function ChatHandoffIllustration() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Abstract illustration of a visitor's chat message entering a website chat widget, then splitting into two paths, one answered from approved information and one handed to your team, that both end with a person and a green check"
      className="block h-auto w-full max-w-md"
    >
<circle cx="240" cy="150" r="140" fill="#FFFFFF"/>
<g transform="translate(-2 0)">
<g fill="none" stroke="#262626" strokeWidth="3" strokeLinecap="round">
<path d="M70 150H92"/>
<path d="M196 150C216 150 212 78 236 78"/>
<path d="M196 150C216 150 212 222 236 222"/>
<path d="M376 78C402 78 396 150 418 150"/>
<path d="M376 222C402 222 396 150 418 150"/>
</g>
<circle cx="46" cy="150" r="24" fill="#0098FD" stroke="#262626" strokeWidth="3"/>
<path d="M36 141h20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H46l-7 5v-5h-3a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2z" fill="none" stroke="#262626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="92" y="108" width="104" height="84" rx="12" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
<path d="M92 120a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12v8H92z" fill="#0098FD"/>
<rect x="92" y="127" width="104" height="3" fill="#262626"/>
<rect x="104" y="115" width="34" height="6" rx="3" fill="#171717"/>
<rect x="104" y="140" width="52" height="16" rx="7" fill="#F2F9FF" stroke="#0098FD" strokeOpacity="0.6"/>
<rect x="132" y="162" width="52" height="16" rx="7" fill="#F5F5F5" stroke="#A3A3A3"/>
<rect x="236" y="52" width="140" height="52" rx="12" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
<rect x="236" y="52" width="10" height="52" rx="5" fill="#0098FD"/>
<g fill="none" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
<rect x="258" y="66" width="18" height="24" rx="3"/>
<path d="M262 74h10M262 79h6M263 84l2 2 4-4"/>
</g>
<rect x="288" y="69" width="70" height="7" rx="3.5" fill="#D4D4D4"/>
<rect x="288" y="82" width="46" height="6" rx="3" fill="#E5E5E5"/>
<rect x="236" y="196" width="140" height="52" rx="12" fill="#F2F9FF" stroke="#262626" strokeWidth="3" strokeDasharray="7 5"/>
<rect x="236" y="196" width="10" height="52" rx="5" fill="#FFC503"/>
<g fill="none" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
<path d="M259 226v-2a9 9 0 0 1 18 0v2"/>
<path d="M259 226h3v6h-2a1 1 0 0 1-1-1zM277 226h-3v6h2a1 1 0 0 0 1-1z"/>
</g>
<rect x="288" y="213" width="70" height="7" rx="3.5" fill="#D4D4D4"/>
<rect x="288" y="226" width="46" height="6" rx="3" fill="#E5E5E5"/>
<circle cx="444" cy="150" r="26" fill="#FFFFFF" stroke="#262626" strokeWidth="3"/>
<g fill="none" stroke="#262626" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
<circle cx="444" cy="143" r="5.5"/>
<path d="M433 163c0-8 5-11 11-11s11 3 11 11"/>
</g>
<circle cx="460" cy="164" r="9" fill="#00D002" stroke="#262626" strokeWidth="2.4"/>
<path d="M455.5 164l3 3 5-5.5" fill="none" stroke="#171717" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
    </svg>
  );
}
