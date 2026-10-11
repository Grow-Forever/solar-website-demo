
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    property: "Residential",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Replace with the actual solar seller's details.
  const businessPhone = "919053608485";
  const displayPhone = "+91 98765 43210";
  const businessEmail = "hello@example.com";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Solar Enquiry",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `City: ${formData.city}`,
      `Property: ${formData.property}`,
      `Requirements: ${formData.message || "Not specified"}`,
    ].join("\n");

    const whatsappURL = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section scroll-mt-24 bg-[var(--color-surface)]"
    >
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="section-label">
            Get in Touch
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Let's Discuss Your
            <span className="text-[var(--color-primary)]">
              {" "}Solar Needs
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text)]">
            Looking for rooftop solar for your home or shop?
            Share your requirements and connect with our team.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-xl lg:grid-cols-5">
          {/* Left: Contact information */}
          <div className="relative overflow-hidden bg-[var(--color-primary)] p-7 text-white sm:p-10 lg:col-span-2">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full border-[35px] border-white/5" />

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-white">
                Contact Information
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                Have questions about system sizing, products or
                installation? We're happy to discuss your needs.
              </p>

              <div className="mt-9 space-y-7">
                <a
                  href={`tel:+${businessPhone}`}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
                    <Phone size={21} />
                  </span>

                  <span>
                    <span className="block text-xs text-white/60">
                      Call Us
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      {displayPhone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${businessEmail}`}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
                    <Mail size={21} />
                  </span>

                  <span>
                    <span className="block text-xs text-white/60">
                      Email Us
                    </span>
                    <span className="mt-1 block break-all text-sm font-semibold">
                      {businessEmail}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
                    <MapPin size={21} />
                  </span>

                  <span>
                    <span className="block text-xs text-white/60">
                      Service Area
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      Haryana, India
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-white/60">
                      Replace with the seller's actual service area.
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--color-accent)]">
                    <Clock size={21} />
                  </span>

                  <span>
                    <span className="block text-xs text-white/60">
                      Business Hours
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      Contact us for availability
                    </span>
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/${businessPhone}?text=${encodeURIComponent("Hello, I would like to enquire about solar installation.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent mt-9 w-full"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          {/* Right: Enquiry form */}
          <div className="p-7 sm:p-10 lg:col-span-3">
            <h3 className="text-2xl font-extrabold">
              Request a Solar Consultation
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text)]">
              Fill in the details below. Your enquiry will open
              in WhatsApp for you to review and send.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-xl border border-[var(--color-border)] px-4 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                  >
                    Mobile Number *
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[0-9+() -]{10,18}"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className="h-12 w-full rounded-xl border border-[var(--color-border)] px-4 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-city"
                    className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                  >
                    City / Town *
                  </label>

                  <input
                    id="contact-city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Karnal"
                    className="h-12 w-full rounded-xl border border-[var(--color-border)] px-4 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-property"
                    className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                  >
                    Property Type *
                  </label>

                  <select
                    id="contact-property"
                    name="property"
                    required
                    value={formData.property}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
                  >
                    <option value="Residential">Home</option>
                    <option value="Shop">Shop</option>
                    <option value="Commercial">Office / Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[var(--color-heading)]"
                >
                  Tell Us About Your Requirements
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your monthly bill, preferred system size, or any questions..."
                  className="w-full resize-y rounded-xl border border-[var(--color-border)] p-4 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
              >
                Send Enquiry on WhatsApp
                <Send size={17} />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="flex items-start gap-2 text-sm leading-6 text-[var(--color-primary)]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0"
                  />
                  WhatsApp should open with your enquiry.
                  Review the details and press Send in WhatsApp
                  to submit it to the seller.
                </p>
              )}

              <p className="text-xs leading-5 text-[var(--color-muted)]">
                Your details are placed in a WhatsApp message.
                This demo does not save form submissions to a database.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
