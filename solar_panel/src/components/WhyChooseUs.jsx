
import {
  ShieldCheck,
  BadgeCheck,
  Headset,
  Wallet,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality-Focused Solutions",
    description:
      "Explore solar systems and components suited to your property's energy requirements.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "Understand your system options, installation costs and applicable subsidy eligibility.",
  },
  {
    icon: Headset,
    title: "Local Customer Support",
    description:
      "Get assistance with product selection, installation coordination and your solar queries.",
  },
  {
    icon: BadgeCheck,
    title: "Guidance You Can Trust",
    description:
      "Get clear information about system sizing, installation requirements and available schemes.",
  },
];

const commitments = [
  "Recommendations based on your energy requirements",
  "Clear information about pricing and inclusions",
  "Guidance on applicable subsidy procedures",
  "Support throughout your purchase journey",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section scroll-mt-24 overflow-hidden bg-white"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Introduction and commitments */}
          <div>
            <span className="section-label">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Your Local Partner
              <span className="text-[var(--color-primary)]">
                {" "}for Solar Energy
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-text)]">
              Choosing solar is an important investment.
              We help you understand your options so you can
              make an informed decision for your home or business.
            </p>

            <div className="mt-8 space-y-4">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[var(--color-primary)]"
                  />

                  <p className="text-sm font-medium leading-6 text-[var(--color-heading)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn btn-primary mt-9"
            >
              Talk to Our Team
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right: Benefits grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className={`rounded-2xl border border-[var(--color-border)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    index === 1
                      ? "bg-[var(--color-surface)]"
                      : "bg-white"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[var(--color-primary)] p-7 sm:p-10 lg:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                <MapPin size={14} />
                Residential & Commercial Solar
              </div>

              <h3 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                Ready to Explore Solar for Your Property?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Tell us about your electricity requirements
                and get guidance on a suitable solar solution.
              </p>
            </div>

            <a
              href="#solar-calculator"
              className="btn btn-accent shrink-0"
            >
              Check My Solar Needs
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
