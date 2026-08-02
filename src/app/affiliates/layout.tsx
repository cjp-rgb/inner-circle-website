import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Affiliates",
  description:
    "Grow with The Inner Circle — real tools, real infrastructure, and a path for both individual affiliates and white label partners.",
};

export default function AffiliatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
