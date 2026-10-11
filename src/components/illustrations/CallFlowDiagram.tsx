// Original abstract diagram of the call path: call, intake, book or route, follow-up.
// It shows a generic workflow only. No client names, logos, or metrics.
export function CallFlowDiagram() {
  return (
    <svg
      viewBox="0 0 360 360"
      role="img"
      aria-label="Diagram of an inbound call path: the call is answered, intake details are collected, the call is either booked or routed to a person, and the outcome is saved for follow-up."
      className="h-auto w-full max-w-md"
    >
      <circle cx="180" cy="180" r="170" className="fill-surface-muted" />

      {/* connectors */}
      <g className="stroke-neutral-800" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M180 70v26" />
        <path d="M180 148v22" />
        <path d="M180 170h-70v8M180 170h70v8" />
        <path d="M110 230v20M250 230v20" />
      </g>
      <g className="fill-neutral-800">
        <path d="M174 92l6 8 6-8z" />
        <path d="M104 176l6 8 6-8zM244 176l6 8 6-8z" />
        <path d="M104 246l6 8 6-8zM244 246l6 8 6-8z" />
      </g>

      {/* 1 Call answered */}
      <rect x="80" y="22" width="200" height="48" rx="10" className="fill-white stroke-neutral-800" strokeWidth="2.5" />
      <rect x="80" y="22" width="8" height="48" rx="4" className="fill-brand-yellow" />
      <text x="180" y="52" textAnchor="middle" fontSize="15" fontWeight="700" className="fill-neutral-900">
        1  Call answered
      </text>

      {/* 2 Intake */}
      <rect x="80" y="100" width="200" height="48" rx="10" className="fill-white stroke-neutral-800" strokeWidth="2.5" />
      <rect x="80" y="100" width="8" height="48" rx="4" className="fill-brand-green" />
      <text x="180" y="130" textAnchor="middle" fontSize="15" fontWeight="700" className="fill-neutral-900">
        2  Intake collected
      </text>

      {/* 3 Book or route */}
      <rect x="45" y="184" width="130" height="46" rx="10" className="fill-brand-blue" />
      <text x="110" y="213" textAnchor="middle" fontSize="14" fontWeight="700" className="fill-brand-ink">
        3a  Book
      </text>
      <rect x="185" y="184" width="130" height="46" rx="10" className="fill-brand-blue" />
      <text x="250" y="213" textAnchor="middle" fontSize="14" fontWeight="700" className="fill-brand-ink">
        3b  Route
      </text>

      {/* 4 Follow-up */}
      <rect x="80" y="258" width="200" height="48" rx="10" className="fill-white stroke-neutral-800" strokeWidth="2.5" />
      <rect x="80" y="258" width="8" height="48" rx="4" className="fill-brand-blue" />
      <text x="180" y="288" textAnchor="middle" fontSize="15" fontWeight="700" className="fill-neutral-900">
        4  Follow-up recorded
      </text>
    </svg>
  );
}
