import { NamedIcon } from "@/components/ui/icons";
import {
  sampleEmail,
  sampleSequence,
  sampleText,
} from "@/content/services/sms-email-automation";

// Three static phone mockups with fictional sample content. The frame is
// decorative; the messages are real text so screen readers read them in order.

function PhoneFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure className="w-full max-w-[20rem] flex-1 basis-72">
      <div className="mx-auto w-full max-w-[20rem] rounded-[2.5rem] border-[3px] border-neutral-800 bg-neutral-900 p-2.5 shadow-lg">
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          <div aria-hidden="true" className="flex items-center justify-between px-6 pb-1 pt-2.5 text-[11px] font-semibold text-neutral-800">
            <span>9:41</span>
            <span className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
            <span className="h-2 w-3 rounded-sm border border-neutral-800" />
          </div>
          {children}
          <div aria-hidden="true" className="flex justify-center py-2">
            <span className="h-1 w-24 rounded-full bg-neutral-800" />
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-wider text-neutral-600">
        {label}
      </figcaption>
    </figure>
  );
}

function PhoneHeader({ avatar, title, sub }: { avatar: string; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-2.5">
      <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-brand-ink">
        {avatar}
      </span>
      <div className="min-w-0">
        <p className="font-heading text-sm font-bold leading-tight">{title}</p>
        <p className="text-xs leading-tight text-neutral-600">{sub}</p>
      </div>
    </div>
  );
}

export function FollowUpPhones({ id }: { id?: string }) {
  return (
    <div id={id} className="flex flex-wrap items-start justify-center gap-8">
      <PhoneFrame label="Sample text - quick reminder">
        <PhoneHeader avatar="SH" title={sampleText.business} sub="Text message" />
        <div className="flex min-h-[26rem] flex-col gap-2 bg-neutral-50 px-3 py-4">
          {sampleText.turns.map((turn, i) =>
            turn.from === "business" ? (
              <p key={i} className="max-w-[84%] self-start rounded-2xl rounded-bl-sm border border-neutral-200 bg-white px-3 py-2 text-[13px] leading-snug text-neutral-800">
                <span className="sr-only">{sampleText.business}: </span>
                {turn.text}
              </p>
            ) : (
              <p key={i} className="max-w-[78%] self-end rounded-2xl rounded-br-sm bg-brand-blue px-3 py-2 text-[13px] leading-snug text-brand-ink">
                <span className="sr-only">Customer: </span>
                {turn.text}
              </p>
            ),
          )}
          <p className="mx-2 mt-3 self-center text-center text-[11px] leading-snug text-neutral-600">
            {sampleText.note}
          </p>
        </div>
      </PhoneFrame>

      <PhoneFrame label="Sample email - preparation details">
        <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-2.5">
          <span className="font-heading text-sm font-bold text-brand-ink">Inbox</span>
        </div>
        <div className="min-h-[29rem] bg-white p-4">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-brand-ink">
              SH
            </span>
            <div>
              <p className="text-[13px] font-semibold leading-tight">{sampleEmail.business}</p>
              <p className="text-xs leading-tight text-neutral-600">to Dana</p>
            </div>
          </div>
          <p className="font-heading mt-3.5 text-base font-bold leading-snug">{sampleEmail.subject}</p>
          <div className="mt-2.5 text-[13px] leading-normal text-neutral-800">
            <p>{sampleEmail.greeting}</p>
            <ul className="mt-2.5 list-disc space-y-1 pl-5">
              {sampleEmail.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 border-t border-neutral-200 pt-2.5 text-[11px] leading-snug text-neutral-600">
            Sample Home Services, [business mailing address]. <span className="underline">Unsubscribe</span>
          </p>
          <p className="mt-2 text-[11px] leading-snug text-neutral-600">{sampleEmail.note}</p>
        </div>
      </PhoneFrame>

      <PhoneFrame label="Sample sequence - quote to decision">
        <PhoneHeader avatar="QF" title="Quote follow-up" sub="Sample sequence" />
        <div className="flex min-h-[26rem] flex-col bg-neutral-50 px-3 py-4">
          <ol>
            {sampleSequence.map((step, i) => (
              <li key={step.label}>
                {i > 0 && <div aria-hidden="true" className="ml-6 h-2.5 w-0.5 bg-neutral-400" />}
                <div className="flex items-start gap-2.5 rounded-xl border border-neutral-200 bg-white px-3 py-2.5">
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                      step.tone === "included"
                        ? "bg-brand-green text-brand-ink"
                        : step.tone === "optional"
                          ? "bg-brand-blue text-brand-ink"
                          : "bg-surface-muted text-brand-blue-strong"
                    }`}
                  >
                    <NamedIcon name={step.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-brand-blue-strong">{step.label}</p>
                    <p className="mt-0.5 text-[13px] leading-snug text-neutral-800">{step.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-3.5 rounded-lg border-2 border-dashed border-neutral-600 px-3 py-2.5 text-xs leading-snug text-neutral-800">
            Every step first checks whether the customer has replied, booked, declined, or opted out. If so, the sequence stops.
          </p>
        </div>
      </PhoneFrame>
    </div>
  );
}

