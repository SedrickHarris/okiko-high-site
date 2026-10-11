import type { ChatTurn } from "@/content/services/ai-chatbots";

// Static phone-style rendering of a sample chat. Decorative frame; the
// conversation itself is real text so screen readers get it in order.
export function PhoneChat({
  turns,
  businessLabel = "Sample business",
}: {
  turns: ReadonlyArray<ChatTurn>;
  businessLabel?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[20rem] rounded-[2.5rem] border-[3px] border-neutral-800 bg-neutral-900 p-2.5 shadow-lg">
      <div className="relative overflow-hidden rounded-[2rem] bg-white">
        {/* Status bar and notch */}
        <div aria-hidden="true" className="flex items-center justify-between bg-white px-6 pb-1 pt-2.5 text-[11px] font-semibold text-neutral-800">
          <span>9:41</span>
          <span className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-sm border border-neutral-800" />
          </span>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-neutral-200 bg-white px-4 py-2.5">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-brand-ink"
          >
            AI
          </span>
          <div className="min-w-0">
            <p className="font-heading truncate text-sm font-bold leading-tight">{businessLabel}</p>
            <p className="text-xs leading-tight text-neutral-600">AI assistant</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex min-h-[26rem] flex-col gap-2 bg-neutral-50 px-3 py-4">
          {turns.map((turn, index) =>
            turn.from === "ai" ? (
              <div
                key={index}
                className="max-w-[82%] self-start rounded-2xl rounded-bl-sm border border-neutral-200 bg-white px-3 py-2 text-[13px] leading-snug text-neutral-800"
              >
                <span className="sr-only">AI assistant: </span>
                {turn.text}
              </div>
            ) : (
              <div
                key={index}
                className="max-w-[78%] self-end rounded-2xl rounded-br-sm bg-brand-blue px-3 py-2 text-[13px] leading-snug text-brand-ink"
              >
                <span className="sr-only">Visitor: </span>
                {turn.text}
              </div>
            ),
          )}
        </div>

        {/* Input bar (decorative) */}
        <div aria-hidden="true" className="flex items-center gap-2 border-t border-neutral-200 bg-white px-3 py-2.5">
          <span className="flex-1 rounded-full border border-neutral-300 px-3 py-1.5 text-xs text-neutral-500">
            Type a message
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-brand-ink">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
        <div aria-hidden="true" className="flex justify-center bg-white pb-2">
          <span className="h-1 w-24 rounded-full bg-neutral-800" />
        </div>
      </div>
    </div>
  );
}
