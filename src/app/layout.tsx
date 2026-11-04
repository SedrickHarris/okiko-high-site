import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { chatWidget, siteConfig } from "@/data/site";
import "./globals.css";

// Manrope: headings, navigation, buttons, short callouts.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Inter: body copy, forms, FAQs, longer reading.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const faviconPath =
  "/images/brand/logos/web/okiko-high-digital-marketing-favicon-white-background.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: { url: faviconPath, type: "image/webp" },
    apple: { url: faviconPath, type: "image/webp" },
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/images/brand/logos/web/okiko-high-primary-on-white.webp",
        width: 1600,
        height: 867,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">{children}</main>
        <SiteFooter />
        {chatWidget.id && (
          <Script
            id="leadconnector-chat-widget"
            src={chatWidget.loaderSrc}
            data-resources-url={chatWidget.resourcesUrl}
            data-widget-id={chatWidget.id}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
