import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "nextria — KI-Beratung aus München",
  description:
    "Kleine, unabhängige IT-Beratung aus München. Wir helfen Unternehmen, KI und Digitalisierung pragmatisch und mit messbarer Wirkung umzusetzen.",
  metadataBase: new URL("https://nextria.de"),
  openGraph: {
    title: "nextria — KI-Beratung aus München",
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
      <body>{children}</body>
    </html>
  );
}
