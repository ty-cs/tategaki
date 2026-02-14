import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-serif-tc",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "block",
});

export const metadata: Metadata = {
  title: "縱書 — Tategaki Demo",
  description:
    "A demo of CSS writing-mode: vertical-rl for traditional Chinese vertical text layout, featuring the Preface to the Poems Composed at the Orchid Pavilion (蘭亭集序).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${notoSerifTC.variable} antialiased`}>{children}</body>
    </html>
  );
}
