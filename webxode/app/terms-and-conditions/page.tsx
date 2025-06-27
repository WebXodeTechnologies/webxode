import React from "react";

export const metadata = {
  title: "Terms & Conditions | Webxode Digital Agency",
  description:
    "Review Webxode’s official terms and conditions regarding service usage, payment structure, revisions, legal policy, and dispute resolution.",
  keywords: [
    "Webxode terms",
    "terms and conditions",
    "project workflow policy",
    "service agreement",
    "payment structure Webxode",
    "refund policy Webxode",
  ],
};

const TermsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="prose dark:prose-invert max-w-none font-montserrat text-wrap tracking-wide">
        <h1 className="text-center">Terms & Conditions</h1>
        <p>
          These Terms and Conditions (“Agreement”) outline the rules and
          guidelines for clients engaging with <strong>Webxode</strong>, a
          full-service digital agency. By accessing or using our services, you
          agree to be bound by these terms.
        </p>

        <section>
          <h2>
            <span className="font-bold">1.</span> User Agreement
          </h2>
          <p>
            Clients must provide accurate information and actively collaborate
            during the project. Timelines and deliverables are discussed and
            mutually agreed upon before project kickoff.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">2.</span> Payment Terms
          </h2>
          <p>
            A 50% upfront payment is mandatory. The remaining balance is due
            before final delivery. Delays beyond 7 days may incur a 5% late fee
            unless pre-approved. Custom enterprise projects follow the terms
            outlined in their respective contracts.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">3.</span> Privacy & Data Policy
          </h2>
          <p>
            Your data is safe with us. Any credentials, business documents, or
            assets shared are kept confidential and are never sold or shared
            without explicit consent.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">4.</span> Scope of Work & Revisions
          </h2>
          <p>
            All deliverables are listed prior to the project. Two revision
            rounds are included. Additional changes or new features outside
            scope will be billed separately.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">5.</span> Intellectual Property
          </h2>
          <p>
            Ownership of source code, designs, and intellectual property is
            transferred upon full payment. Until then, Webxode retains full
            rights to all developed assets.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">6.</span> Service-Level Agreement (SLA)
          </h2>
          <p>
            We aim to deliver on time with high quality. Post-deployment bug
            fixes are supported for 7 days. For long-term support, separate
            maintenance contracts are available.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">7.</span> Refund & Cancellation
          </h2>
          <p>
            No refunds once development begins. If we fail to deliver due to
            internal reasons, a partial refund may be processed based on
            completed work.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">8.</span> Usage Restrictions
          </h2>
          <p>
            Clients must not use deliverables for illegal, unethical, or harmful
            activities. Violations may result in service suspension or
            termination without refund.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">9.</span> Termination Clause
          </h2>
          <p>
            Either party may terminate the agreement in writing. Clients are
            obligated to pay for any work completed prior to termination.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">10.</span> Dispute Resolution
          </h2>
          <p>
            Disputes will first be handled through mutual discussion. Unresolved
            matters fall under the legal jurisdiction of Tamil Nadu, India.
          </p>
        </section>

        <section>
          <h2>
            <span className=" font-bold">11.</span> Contact Information
          </h2>
          <p>
            For any queries related to these terms, feel free to reach us:
            <br />
            <strong>Email:</strong>
            <a href="mailto:contact.webxodetechnolgies@gmail.com">
              contact.webxodetechnolgies@gmail.com
            </a>
            <br />
            <strong>Phone:</strong> +91-9345336311
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
