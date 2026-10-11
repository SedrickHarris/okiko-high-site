type JsonLdProps = {
  data: Record<string, unknown>;
};

// JSON-LD is data, not executable code, so a native <script> tag is used.
// "<" is escaped so serialized strings cannot close the script element.
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
