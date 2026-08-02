import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import "./globals.css";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "../fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Poppins-Bold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../fonts/Poppins-BoldItalic.ttf", weight: "800", style: "italic" },
  ],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inner-circle-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Inner Circle | Signals, Automation & Education",
    template: "%s | The Inner Circle",
  },
  description:
    "One ecosystem, every edge — live signals, automated trading, structured education, and a real community, all in one place.",
  openGraph: {
    title: "The Inner Circle",
    description:
      "One ecosystem, every edge — live signals, automated trading, structured education, and a real community, all in one place.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Inner Circle",
    description:
      "One ecosystem, every edge — live signals, automated trading, structured education, and a real community, all in one place.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
