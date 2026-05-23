import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, type FormEvent } from "react";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  YoutubeLogo,
  House,
  Key,
  Coins,
  Handshake,
  Sparkle,
  Buildings,
} from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { images } from "@/lib/media";

const enquiryTypes = [
  { icon: House,      label: "Buy a Residence"      },
  { icon: Key,        label: "Rent / Lease"          },
  { icon: Coins,      label: "Investment & Returns"  },
  { icon: Handshake,  label: "Broker Partnership"    },
  { icon: Sparkle,    label: "Private Viewing"       },
  { icon: Buildings,  label: "General Enquiry"       },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Sales Gallery",
    lines: ["Cantonments, Accra", "Greater Accra Region · Ghana"],
    href: "https://maps.google.com/?q=Cantonments+Accra+Ghana",
    linkLabel: "Get directions",
  },
  {
    icon: Phone,
    label: "Sales Hotline",
    lines: ["+233 (0)27 000 0004", "Mon–Sat, 09:00 – 18:00 GMT"],
    href: "tel:+233270000004",
    linkLabel: "Call now",
  },
  {
    icon: EnvelopeSimple,
    label: "Email Us",
    lines: ["hello@devtracoplus.com", "Reply within 24 hours"],
    href: "mailto:hello@devtracoplus.com",
    linkLabel: "Send email",
  },
  {
    icon: Clock,
    label: "Viewings",
    lines: ["Available 7 days a week", "Including evenings by appointment"],
    href: "#enquiry-form",
    linkLabel: "Book a visit",
  },
];

const socials = [
  { Icon: InstagramLogo, label: "Instagram", href: "#" },
  { Icon: LinkedinLogo,  label: "LinkedIn",  href: "#" },
  { Icon: FacebookLogo,  label: "Facebook",  href: "#" },
  { Icon: YoutubeLogo,   label: "YouTube",   href: "#" },
];

const trustPoints = [
  { value: "2,000+", label: "Homes delivered since 2004" },
  { value: "16+",    label: "Years of signature craftsmanship" },
  { value: "8",      label: "Landmark developments" },
  { value: "98%",    label: "Client satisfaction score" },
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-0">
        <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 overflow-hidden flex items-center min-h-[60vh] md:min-h-[72vh]">
          <div className="absolute inset-0 z-0">
            <img
              src={images.address}
              alt="Devtraco Plus Sales Gallery"
              className="w-full h-full object-cover brightness-[0.32]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10" />
          </div>

          <div className="max-w-screen-2xl mx-auto relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                Contact & Enquiries
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8 max-w-[16ch]"
            >
              Let's find your{" "}
              <span className="italic font-light text-primary">perfect</span>
              <br />residence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-white/65 leading-relaxed max-w-[48ch]"
            >
              Our sales team is available six days a week at our Cantonments
              gallery — or reach us by phone, email, or through the form below.
            </motion.p>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="max-w-screen-2xl mx-auto site-gutter py-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
            {trustPoints.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center px-4 md:px-8"
              >
                <span className="font-serif text-3xl md:text-4xl text-foreground mb-1">
                  {t.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative py-28 md:py-40 site-gutter overflow-hidden">
          {/* subtle radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.10)_0%,_transparent_55%)]"
          />

          <div className="relative max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

              {/* LEFT: FORM ──────────────────────────────── */}
              <div className="lg:col-span-7" id="enquiry-form">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                      Enquiry Form
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-4">
                    Send us a{" "}
                    <span className="italic font-light text-primary">message.</span>
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-12">
                    Tell us about your interest and we'll pair you with the right
                    member of our team — no automated replies, just real people.
                  </p>
                </motion.div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-start gap-6 py-16 px-10 border border-primary/30 bg-primary/5 rounded-[4px]"
                    >
                      <CheckCircle
                        size={48}
                        weight="duotone"
                        className="text-primary"
                      />
                      <div>
                        <h3 className="font-serif text-3xl text-foreground mb-2">
                          Message received.
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-[42ch]">
                          One of our sales consultants will be in touch within
                          24 hours. For urgent enquiries call{" "}
                          <a
                            href="tel:+233270000004"
                            className="text-primary hover:underline"
                          >
                            +233 (0)27 000 0004
                          </a>
                          .
                        </p>
                      </div>
                      <button
                        onClick={() => { setSubmitted(false); setSelectedType(null); }}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
                      >
                        Send another message
                        <ArrowRight size={14} weight="bold" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onSubmit={handleSubmit}
                      className="space-y-10"
                    >
                      {/* Enquiry type selector */}
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-4">
                          I'm interested in
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {enquiryTypes.map(({ icon: Icon, label }) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => setSelectedType(label)}
                              className={`group relative flex flex-col items-start gap-3 p-4 border rounded-[4px] text-left transition-all duration-300 ${
                                selectedType === label
                                  ? "border-primary bg-primary/8 text-foreground"
                                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/4"
                              }`}
                            >
                              <Icon
                                size={20}
                                weight="duotone"
                                className={`transition-colors ${
                                  selectedType === label ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                }`}
                              />
                              <span className="text-[13px] font-medium leading-tight">{label}</span>
                              {selectedType === label && (
                                <motion.span
                                  layoutId="enquiry-selected"
                                  className="absolute inset-0 rounded-[4px] border border-primary pointer-events-none"
                                />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name + Phone row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-2">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Kwame Mensah"
                            className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors duration-300"
                          />
                        </div>
                        <div className="group">
                          <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+233 or international"
                            className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors duration-300"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-2">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors duration-300"
                        />
                      </div>

                      {/* Budget / project */}
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-2">
                          Budget Range / Development of Interest
                        </label>
                        <select
                          className="w-full bg-background border-b border-border focus:border-primary outline-none py-3 text-foreground text-sm transition-colors duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">Select an option…</option>
                          <option>Under $200,000</option>
                          <option>$200,000 – $350,000</option>
                          <option>$350,000 – $600,000</option>
                          <option>$600,000 – $1M</option>
                          <option>Above $1M</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-2">
                          Your Message
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us more about what you're looking for — location preferences, timeline, or anything else we should know."
                          className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors duration-300 resize-none"
                        />
                      </div>

                      {/* Preferred contact method */}
                      <div>
                        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-3">
                          Preferred contact method
                        </label>
                        <div className="flex items-center gap-6">
                          {["Email", "Phone", "WhatsApp"].map((m) => (
                            <label
                              key={m}
                              className="flex items-center gap-2 cursor-pointer group"
                            >
                              <input
                                type="radio"
                                name="contact-method"
                                defaultChecked={m === "Email"}
                                className="accent-primary w-4 h-4"
                              />
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                {m}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Privacy + submit */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="group relative inline-flex items-center gap-3 pl-7 pr-2.5 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden disabled:opacity-70"
                        >
                          {loading ? (
                            <>
                              <span>Sending…</span>
                              <span className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center">
                                <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                </svg>
                              </span>
                            </>
                          ) : (
                            <>
                              Send Enquiry
                              <span className="w-8 h-8 rounded-full bg-background/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                                <ArrowRight size={13} weight="bold" />
                              </span>
                            </>
                          )}
                        </button>
                        <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[36ch]">
                          By submitting you agree to our{" "}
                          <a href="#" className="underline underline-offset-2 hover:text-primary transition-colors">
                            Privacy Policy
                          </a>
                          . We never share your data.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* RIGHT: SIDEBAR ──────────────────────────── */}
              <div className="lg:col-span-5 space-y-8">

                {/* Contact detail cards */}
                {contactDetails.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-start gap-5 p-6 border border-border rounded-[4px] bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      >
                        <span className="mt-0.5 w-12 h-12 rounded-full border border-border bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          <Icon
                            size={20}
                            weight="duotone"
                            className="text-primary group-hover:text-white transition-colors"
                          />
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-1">
                            {c.label}
                          </span>
                          <span className="font-serif text-xl text-foreground leading-snug block group-hover:text-primary transition-colors">
                            {c.lines[0]}
                          </span>
                          <span className="text-sm text-muted-foreground">{c.lines[1]}</span>
                          <span className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-primary group-hover:gap-2.5 transition-all">
                            {c.linkLabel}
                            <ArrowRight size={11} weight="bold" />
                          </span>
                        </div>
                      </a>
                    </motion.div>
                  );
                })}

                {/* Socials card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 border border-border rounded-[4px] bg-card"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block mb-4">
                    Follow Us
                  </span>
                  <div className="flex items-center gap-3">
                    {socials.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-10 h-10 rounded-full border border-border bg-muted hover:bg-primary hover:border-primary text-muted-foreground hover:text-white flex items-center justify-center transition-all duration-300"
                      >
                        <Icon size={16} weight="bold" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto site-gutter mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                Visit Us
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl md:text-5xl text-foreground max-w-[22ch]"
            >
              Our Sales Gallery is{" "}
              <span className="italic font-light text-primary">open to you.</span>
            </motion.h2>
          </div>

          {/* Full-bleed image strip with location overlay */}
          <div className="relative h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={images.pelican}
              alt="Devtraco Plus Cantonments, Accra"
              className="w-full h-full object-cover brightness-[0.45]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 bg-foreground/90 backdrop-blur-md border border-white/10 rounded-[4px] p-8 max-w-sm"
            >
              <span className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <h3 className="font-serif text-2xl text-white mb-6">
                Cantonments Sales Gallery
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin size={16} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">
                    Cantonments, Accra — Greater Accra Region, Ghana
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">
                    Mon–Fri: 09:00–18:00 &nbsp;|&nbsp; Sat: 10:00–16:00<br />
                    Evenings &amp; Sunday by appointment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                  <a
                    href="tel:+233270000004"
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    +233 (0)27 000 0004
                  </a>
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=Cantonments+Accra+Ghana"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 pl-5 pr-2.5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all"
              >
                Get Directions
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={12} weight="bold" />
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="relative py-28 md:py-40 site-gutter bg-foreground overflow-hidden">
          <span className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary))_0%,_transparent_55%)]"
          />
          <div className="relative max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8"
            >
              <span className="text-primary font-semibold tracking-[0.3em] uppercase text-[11px] block mb-5">
                Private Viewings
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white">
                Experience Devtraco Plus{" "}
                <span className="italic font-light text-primary">in person.</span>
              </h2>
              <p className="text-white/55 mt-6 text-lg leading-relaxed max-w-[50ch]">
                Our showrooms are styled to reflect the final product — every
                finish, every fixture, precisely as it will be when you take the
                keys. Request a private appointment with one of our senior
                consultants.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 flex lg:justify-end"
            >
              <a
                href="#enquiry-form"
                className="group inline-flex items-center gap-3 pl-7 pr-2.5 py-4 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all"
              >
                Book a Private Viewing
                <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={14} weight="bold" />
                </span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}