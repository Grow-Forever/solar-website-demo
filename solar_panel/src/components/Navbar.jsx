
import { useState } from "react";
import {
  Sun,
  Menu,
  X,
  ArrowUpRight,
  Calculator,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Solar Calculator", href: "#solar-calculator" },
  { name: "Subsidy", href: "#subsidy" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur-md">
      <nav
        className="container flex min-h-[76px] items-center justify-between gap-5"
        aria-label="Main navigation"
      >
        {/* Logo and brand name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Sunora Solar home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)] text-[var(--color-accent)]">
            <Sun size={26} strokeWidth={2.3} />
          </span>

          <span className="flex flex-col">
            <span className="font-[var(--font-heading)] text-xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)]">
              Sunora<span className="text-[var(--color-primary)]">.</span>
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Solar Solutions
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#solar-calculator"
          className="btn btn-primary hidden shrink-0 items-center gap-2 lg:inline-flex"
        >
          <Calculator size={17} />
          Calculate Solar Needs
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-heading)] hover:bg-[var(--color-surface)] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--color-border)] bg-white shadow-lg lg:hidden"
        >
          <div className="container flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[var(--color-border)] py-3.5 text-sm font-semibold text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#solar-calculator"
              onClick={closeMenu}
              className="btn btn-primary mt-4 w-full"
            >
              <Calculator size={18} />
              Calculate Solar Needs
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;