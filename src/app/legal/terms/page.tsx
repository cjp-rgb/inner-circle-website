import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of The Inner Circle's services.",
};

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="31 July 2026">
      <p>
        These terms govern your use of this website and any community,
        signal service, automated tool, or educational content provided by
        The Inner Circle. By accessing our services, you agree to these
        terms.
      </p>

      <h2>Our Services</h2>
      <p>
        The Inner Circle provides access to trading-related communities,
        market signals, educational content, and automated/copy-trading
        tools, and operates as an Introducing Broker for third-party
        brokers. Our services are informational and educational in nature.
        Nothing we provide constitutes regulated financial advice or a
        personal recommendation — see our{" "}
        <a href="/legal/risk">Risk Disclaimer</a> for full detail.
      </p>

      <h2>No Guarantee of Profit</h2>
      <p>
        We make no guarantee, express or implied, regarding the profitability
        or performance of any signal, strategy, or automated tool we
        provide. Trading decisions made based on our content are made at
        your own discretion and risk.
      </p>

      <h2>Eligibility &amp; Account Use</h2>
      <p>
        You must be legally permitted to trade the relevant financial
        instruments in your jurisdiction to use our services. You are
        responsible for maintaining the confidentiality of any account
        credentials associated with our communities or linked broker
        accounts, and for all activity that occurs under your account.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Redistribute, resell, or share paid content, signals, or access
          with anyone outside your own account
        </li>
        <li>Use our services for any unlawful purpose</li>
        <li>
          Attempt to disrupt, reverse-engineer, or interfere with our
          platforms or automated tools
        </li>
        <li>Impersonate another person or misrepresent your affiliation with us</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website and within our communities — including
        graphics, educational material, and branding — is owned by The
        Inner Circle or used under licence, and may not be reproduced or
        redistributed without permission.
      </p>

      <h2>Affiliate &amp; Referral Program</h2>
      <p>
        If you participate in our affiliate/introducing-broker referral
        program, your relationship with us is also governed by the specific
        terms provided to you at the time you join that program, in
        addition to these general terms.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, The Inner Circle and its
        team are not liable for any trading losses, indirect, incidental,
        or consequential damages arising from your use of our services,
        including reliance on any signal, strategy, or automated tool we
        provide.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of our
        services after changes are posted constitutes acceptance of the
        updated terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by the laws of England and Wales, and any
        disputes will be subject to the exclusive jurisdiction of the
        courts of England and Wales.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be directed to us via our Telegram
        community or the contact details provided when you joined.
      </p>
    </LegalLayout>
  );
}
