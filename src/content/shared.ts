// Types shared by content files and UI components.

export type SourceLink = { label: string; href: string };

export type FaqLink = { phrase: string; href: string };

export type Faq = {
  question: string;
  // Plain text. FAQPage JSON-LD uses this string as is.
  answer: string;
  // Phrases inside `answer` that render as links (first occurrence of each). The visible
  // text never changes, so the JSON-LD text matches what is on the page.
  links?: ReadonlyArray<FaqLink>;
  sources?: SourceLink[];
};
