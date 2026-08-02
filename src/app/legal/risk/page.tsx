import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Risk Disclaimer",
  description: "Trading risk, our role as an Introducing Broker, and how commission works.",
};

export default function RiskDisclaimer() {
  return (
    <LegalLayout title="Risk Disclaimer" updated="31 July 2026">
      <p>
        This page explains the risks involved in the services referenced on
        this website, and the nature of our relationship with the brokers we
        introduce clients to. Please read it in full before joining any
        community, signal room, or automated trading service linked from
        this site.
      </p>

      <h2>Trading Involves Risk of Loss</h2>
      <p>
        Trading foreign exchange, gold, indices, and other leveraged
        financial instruments carries a high level of risk and may not be
        suitable for all investors. It is possible to lose some or all of
        your invested capital, and losses can exceed your initial deposit
        where leverage is used. You should not trade with money you cannot
        afford to lose, and you should carefully consider your investment
        objectives, level of experience, and risk appetite before
        participating in any trading activity.
      </p>

      <h2>Past Performance Is Not a Reliable Indicator of Future Results</h2>
      <p>
        Any performance figures, track records, win rates, or return
        statistics shown on this website or in our communities (including
        those relating to automated or copy-trading strategies) reflect
        historical results only. <strong>Past performance is not a reliable
        indicator of future results.</strong> Market conditions change, and a
        strategy that has performed well historically may perform
        differently — including negatively — in the future. No representation
        is being made that any account will, or is likely to, achieve profits
        or losses similar to those shown.
      </p>

      <h2>We Are an Introducing Broker, Not a Regulated Adviser</h2>
      <p>
        The Inner Circle operates as an Introducing Broker (IB). This means
        we introduce clients to third-party brokers and receive a commission
        or rebate based on the trading activity of clients we refer. We are
        not a financial adviser, we do not hold client funds, and nothing on
        this website, in our Telegram communities, or in our automated tools
        constitutes regulated investment advice or a personal
        recommendation.
      </p>
      <p>
        Any signals, educational content, or automated strategies we share
        are for informational and educational purposes only. You are solely
        responsible for your own trading decisions, and you should conduct
        your own research or seek independent financial advice from a
        suitably qualified professional before acting on anything shared
        through our services.
      </p>

      <h2>Financial Incentive Disclosure</h2>
      <p>
        Because we earn commission from the brokers we introduce clients to,
        we have a financial interest in you opening and funding a trading
        account through our referral. We disclose this openly so you can
        weigh it when deciding whether to act on anything we publish. This
        incentive does not change the fact that trading carries genuine risk
        of loss, regardless of any relationship we may have with a broker.
      </p>

      <h2>Automated Trading &amp; Copy-Trading Risk</h2>
      <p>
        Automated strategies (including the Gamma algorithm referenced in
        our Automated Hub) execute trades without manual intervention.
        Automated systems can malfunction, be affected by connectivity
        issues, slippage, or unexpected market conditions, and — like any
        strategy — can lose money. Linking your account to an automated or
        copy-trading service means you accept full responsibility for the
        trades executed on your account.
      </p>

      <h2>No Guarantee of Results</h2>
      <p>
        We do not guarantee any specific outcome, profit, or level of
        performance from participating in our communities, following our
        signals, using our automated tools, or engaging with our education
        content. Any targets, examples, or case studies referenced are
        illustrative only.
      </p>

      <h2>Eligibility</h2>
      <p>
        Our services are not directed at, and should not be used by, anyone
        in a jurisdiction where doing so would be contrary to local law or
        regulation. It is your responsibility to ensure that your use of our
        services complies with the laws applicable to you.
      </p>

      <h2>Questions</h2>
      <p>
        If anything on this page is unclear, please contact us before
        joining any paid service or linking a live trading account. See our{" "}
        <a href="/legal/terms">Terms of Service</a> and{" "}
        <a href="/legal/privacy">Privacy Policy</a> for further information.
      </p>
    </LegalLayout>
  );
}
