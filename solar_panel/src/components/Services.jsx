
import {
  House,
  Building2,
  Sun,
  BatteryCharging,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Residential Solar",
    description:
      "Switch to solar energy for your home and reduce your dependence on grid electricity.",
    tag: "For Homeowners",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Explore solar solutions for shops, offices, schools and other commercial properties.",
    tag: "For Businesses",
  },
  {
    icon: Sun,
    title: "Solar Panels",
    description:
      "Find suitable solar panels and system options for your electricity requirements.",
    tag: "Solar Products",
  },
  {
    icon: BatteryCharging,
    title: "Solar Inverters",
    description:
      "Explore inverter options and compatible components for your solar installation.",
    tag: "Power Solutions",
  },
  {
    icon: Wrench,
    title: "Installation & Support",
    description:
      "Get assistance with system installation, setup and ongoing maintenance requirements.",
    tag: "Expert Assistance",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-[var(--color-surface)]">
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="section-label">
            What We Offer
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Complete Solar Solutions
            <span className="text-[var(--color-primary)]">
              {" "}For You
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[var(--color-text)]">
            From choosing the right solar system to installation
            support, explore solutions designed around your energy needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/30 hover:shadow-xl sm:p-7"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Tag */}
                <span className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {service.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-text)]">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]"
                >
                  Enquire Now
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[var(--color-primary)] p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Not Sure Which Solar System You Need?
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/80">
              Estimate your electricity consumption and explore
              a suitable solar system size.
            </p>
          </div>

          <a
            href="#solar-calculator"
            className="btn btn-accent shrink-0"
          >
            Calculate My Solar Needs
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
