import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "IT - Beratung München – Ihr Weg zur Digitalisierung",
  description:
    "Kleine, unabhängige IT-Beratung aus München. Wir helfen Unternehmen, KI und Digitalisierung pragmatisch und mit messbarer Wirkung umzusetzen.",
  metadataBase: new URL("https://nextria.de"),
  openGraph: {
    title: "IT - Beratung München – Ihr Weg zur Digitalisierung",
    description:
      "Wir helfen Ihrem Unternehmen, KI und Digitalisierung pragmatisch und mit messbarer Wirkung umzusetzen.",
    locale: "de_DE",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a1525",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
