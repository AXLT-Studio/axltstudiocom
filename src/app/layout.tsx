import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: "AXLT Studio — Coming Soon",
  description:
    "Good things are on the way. A new home for AXLT Studio is taking shape. Stay curious. We’ll see you soon.",
  openGraph: {
    title: "AXLT Studio — Coming Soon",
    description: "A new home for AXLT Studio is taking shape. See you soon.",
    siteName: "AXLT Studio",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
