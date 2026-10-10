import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: "AXLT Studio",
  description:
    "Explore apps, games, and upcoming projects from AXLT Studio.",
  openGraph: {
    title: "AXLT Studio",
    description: "Apps, games, and upcoming projects from AXLT Studio.",
    siteName: "AXLT Studio",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
