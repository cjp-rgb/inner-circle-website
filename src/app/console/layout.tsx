import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trader Console",
  description:
    "Our flagship companion app — live market insights, automation, and your daily driver, built entirely in-house.",
};

export default function ConsoleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
