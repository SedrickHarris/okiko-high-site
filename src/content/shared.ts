// Types shared by content files and UI components.

export type SourceLink = { label: string; href: string };

export type Faq = {
  question: string;
  answer: string;
  sources?: SourceLink[];
};
