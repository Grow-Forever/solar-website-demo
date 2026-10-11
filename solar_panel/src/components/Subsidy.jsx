
import {
  BadgeCheck,
  ArrowUpRight,
  House,
  Sun,
  Wallet,
  Info,
} from "lucide-react";

const subsidyPlans = [
  {
    capacity: "1 kW",
    subsidy: 30000,
    description: "Suitable for lower electricity consumption",
    features: [
      "Residential rooftop solar",
      "Central subsidy: ₹30,000",
      "Final sizing depends on usage and roof conditions",
    ],
  },
  {
    capacity: "2 kW",
    subsidy: 60000,
    description: "An option for many small households",
    popular: true,
    features: [
      "Residential rooftop solar",
      "Central subsidy: ₹60,000",
      "A site assessment is recommended",
    ],
  },
  {
    capacity: "3 kW",
    subsidy: 78000,
    description: "For households with higher electricity use",
    features: [
      "Residential rooftop solar",
      "Central subsidy: ₹78,000",
      "Maximum standard central subsidy reached",
    ],
  },
  {
    capacity: "Above 3 kW",
    subsidy: 78000,
    description: "For larger residential energy requirements",
    features: [
      "Residential rooftop solar",
      "Central subsidy capped at ₹78,000",
      "Additional capacity receives no extra central subsidy",
    ],
  },
];

const formatRupees = (amount) =>
  `₹${amount.toLocaleString("en-IN")}`;

export default function Subsidy() {
  return (
    <section
      id="subsidy"
      className="section scroll-mt-24 bg-[var(--color-surface)]"
    >
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-label">
            Government Support
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Save More with Solar
            <span className="text-[var(--color-primary)]">
              {" "}Subsidy
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text)]">
            Explore the standard central government subsidy
            available for eligible residential rooftop solar
            systems under PM Surya Ghar: Muft Bijli Yojana.
          </p>
        </div>

        {/* Scheme information banner */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-[var(--color-primary)] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
              <Sun size={27} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white/75">
                PM Surya Ghar: Muft Bijli Yojana
              </p>

              <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                Up to ₹78,000 subsidy
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Standard central assistance for eligible
                residential rooftop solar installations.
              </p>
            </div>
          </div>

          <a
            href="https://pmsuryaghar.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent shrink-0"
          >
            Official Portal
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Subsidy cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {subsidyPlans.map((plan) => (
            <article
              key={plan.capacity}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "border-[var(--color-primary)] shadow-md"
                  : "border-[var(--color-border)]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-5 rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-bold text-[var(--color-heading)]">
                  Popular Option
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                <House size={25} />
              </div>

              <p className="mt-5 text-sm font-semibold text-[var(--color-muted)]">
                Solar System
              </p>

              <h3 className="mt-1 text-2xl font-extrabold">
                {plan.capacity}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-[var(--color-text)]">
                {plan.description}
              </p>

              <div className="my-5 rounded-xl bg-[var(--color-surface)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Standard central subsidy
                </p>

                <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--color-primary)]">
                  {formatRupees(plan.subsidy)}
                </p>
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm leading-6 text-[var(--color-text)]"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-1 shrink-0 text-[var(--color-primary)]"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn w-full ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-outline"
                }`}
              >
                Check Eligibility
                <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>

        {/* Important information */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-5">
          <Info
            size={21}
            className="mt-0.5 shrink-0 text-[var(--color-primary)]"
          />

          <div className="text-sm leading-7 text-[var(--color-text)]">
            <p className="font-bold text-[var(--color-heading)]">
              Important subsidy information
            </p>

            <p className="mt-1">
              These figures represent standard central assistance
              for eligible residential systems, not a guaranteed
              payment or a reduction automatically applied to
              the purchase price. Commercial systems do not qualify
              under this residential subsidy provision. Actual
              eligibility and payment depend on current scheme
              requirements, the approved installation process and
              DISCOM verification. Any additional Haryana state
              assistance is subject to separate eligibility rules.
            </p>

            <a
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 font-bold text-[var(--color-primary)] hover:underline"
            >
              Verify current rules on the official portal
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-[var(--color-heading)]">
            <Wallet size={27} />
          </div>

          <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">
            Not Sure Which Plan Is Right for You?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-text)]">
            Calculate your estimated solar needs and speak
            with our team about system sizing and subsidy
            eligibility.
          </p>

          <a
            href="#solar-calculator"
            className="btn btn-primary mt-6"
          >
            Calculate My Solar Needs
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
