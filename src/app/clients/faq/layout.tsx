import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Costs, minimums, and what's included — answers to the questions people actually ask before joining.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
