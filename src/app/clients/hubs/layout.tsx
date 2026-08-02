import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hubs",
  description:
    "Six hubs, one edge — explore what's actually inside Trade Hub, VIP Hub, Automated Hub, Forex Hub, Education Hub, and Trader Console.",
};

export default function HubsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
