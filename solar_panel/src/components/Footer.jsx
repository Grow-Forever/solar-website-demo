
import { Sun, Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Replace with the actual seller's WhatsApp number.
  const whatsappNumber = "919876543210";

  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2"
            aria-label="Sunora Solar home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-accent)]">
              <Sun size={23} />
            </span>

            <span className="font-[var(--font-heading)] text-lg font-extrabold text-[var(--color-heading)]">
              Sunora<span className="text-[var(--color-primary)]">.</span>
            </span>
          </a>

          {/* Quick links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[var(--color-text)]"
          >
            <a href="#services" className="hover:text-[var(--color-primary)]">
              Services
            </a>
            <a href="#solar-calculator" className="hover:text-[var(--color-primary)]">
              Solar Calculator
            </a>
            <a href="#subsidy" className="hover:text-[var(--color-primary)]">
              Subsidy
            </a>
            <a href="#contact" className="hover:text-[var(--color-primary)]">
              Contact
            </a>
          </nav>

          {/* Contact actions */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact us on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
            >
              <MessageCircle size={19} />
            </a>

            <a
              href="#contact"
              aria-label="Contact us by phone"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
            >
              <Phone size={19} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-heading)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-7 border-t border-[var(--color-border)] pt-5 text-center">
          <p className="text-xs leading-6 text-[var(--color-muted)]">
            © {currentYear} Sunora Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
