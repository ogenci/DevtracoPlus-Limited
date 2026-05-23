import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  ArrowRight,
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  YoutubeLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  CheckCircle,
} from "@phosphor-icons/react";

const linkGroups = [
  {
    heading: "Residences",
    links: [
      "Avant Garde",
      "Arlo Cantonments",
      "The Address",
      "The Pelican",
      "Forte",
      "Henrietta's",
    ],
  },
  {
    heading: "Company",
    links: ["About", "Team", "Press", "Careers", "Sustainability", "Journal"],
  },
  {
    heading: "Owners",
    links: [
      "Buy",
      "Rent",
      "Sell",
      "Concierge",
      "Referral Programme",
      "Owner Portal",
    ],
  },
];

const routeMapping: Record<string, string> = {
  "About": "/about",
  "Buy": "/buy",
  "Rent": "/rent",
  "Sell": "/sell",
  "Referral Programme": "/resources/affiliate-program",
};

const socials = [
  { Icon: InstagramLogo, label: "Instagram", href: "#" },
  { Icon: LinkedinLogo, label: "LinkedIn", href: "#" },
  { Icon: FacebookLogo, label: "Facebook", href: "#" },
  { Icon: YoutubeLogo, label: "YouTube", href: "#" },
];

const wordmark = "DEVTRACO PLUS";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wordmarkRef, { once: true, margin: "-15%" });

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["6%", "-2%"]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer
      ref={containerRef}
      className="relative bg-foreground text-background overflow-hidden"
    >
      {/* gold top hairline */}
      <span className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary))_0%,_transparent_55%)]"
      />

      <div className="relative max-w-screen-2xl mx-auto site-gutter pt-24 md:pt-32 pb-10">
        {/* TOP — manifesto + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-6 block">
              Let's stay in touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-white max-w-[18ch]">
              Quiet luxury,{" "}
              <span className="italic font-light text-primary">
                delivered to your inbox.
              </span>
            </h2>
            <p className="text-white/55 text-base lg:text-lg mt-8 max-w-[55ch] leading-relaxed">
              Four times a year — new releases, owner stories, and field notes
              from the studio. No noise. Unsubscribe in one click.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 lg:pl-8 flex flex-col justify-end"
          >
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="w-full">
                <label className="text-[10px] uppercase tracking-[0.25em] text-white/45 block mb-3">
                  Your email
                </label>
                <div className="group relative flex items-center gap-2 border-b border-white/20 focus-within:border-primary transition-colors py-2">
                  <input
                    type="email"
                    required
                    placeholder="hello@devtracoplus.com"
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30 text-base lg:text-lg py-2"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="shrink-0 inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all"
                  >
                    Subscribe
                    <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight size={11} weight="bold" />
                    </span>
                  </button>
                </div>
                <p className="text-[11px] text-white/35 mt-4 leading-relaxed">
                  By subscribing you agree to our{" "}
                  <a href="#" className="underline-offset-4 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 py-3"
              >
                <CheckCircle
                  size={32}
                  weight="duotone"
                  className="text-primary shrink-0"
                />
                <div>
                  <p className="font-serif text-xl text-white">
                    You're on the list.
                  </p>
                  <p className="text-sm text-white/55">
                    We'll be in your inbox soon — never too often.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* MIDDLE — link grid + contact card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-20">
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-12">
            {linkGroups.map((g, gi) => (
              <motion.nav
                key={g.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: gi * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-6">
                  {g.heading}
                </h4>
                <ul className="space-y-3">
                  {g.links.map((l) => {
                    const route = routeMapping[l];
                    return (
                      <li key={l}>
                        {route ? (
                          <Link
                            href={route}
                            className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                          >
                            <span className="relative">
                              {l}
                              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                            </span>
                            <ArrowUpRight
                              size={11}
                              weight="bold"
                              className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300"
                            />
                          </Link>
                        ) : (
                          <a
                            href="#"
                            className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                          >
                            <span className="relative">
                              {l}
                              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                            </span>
                            <ArrowUpRight
                              size={11}
                              weight="bold"
                              className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300"
                            />
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </motion.nav>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pl-8"
          >
            <div className="rounded-md p-8 lg:p-10 bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary mb-6">
                Sales Gallery
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 w-9 h-9 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={15} weight="duotone" className="text-primary" />
                  </span>
                  <div>
                    <span className="block font-serif text-lg text-white leading-snug">
                      Cantonments, Accra
                    </span>
                    <span className="text-sm text-white/55">
                      Greater Accra Region · Ghana
                    </span>
                  </div>
                </li>
                <li>
                  <a
                    href="tel:+233270000004"
                    className="group flex items-start gap-4"
                  >
                    <span className="mt-0.5 w-9 h-9 rounded-full bg-white/5 group-hover:bg-primary/15 flex items-center justify-center shrink-0 transition-colors">
                      <Phone size={15} weight="duotone" className="text-primary" />
                    </span>
                    <div>
                      <span className="block font-serif text-lg text-white group-hover:text-primary transition-colors leading-snug">
                        +233 (0)27 000 0004
                      </span>
                      <span className="text-sm text-white/55">
                        Mon–Sat, 09:00 – 18:00 GMT
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@devtracoplus.com"
                    className="group flex items-start gap-4"
                  >
                    <span className="mt-0.5 w-9 h-9 rounded-full bg-white/5 group-hover:bg-primary/15 flex items-center justify-center shrink-0 transition-colors">
                      <EnvelopeSimple
                        size={15}
                        weight="duotone"
                        className="text-primary"
                      />
                    </span>
                    <div>
                      <span className="block font-serif text-lg text-white group-hover:text-primary transition-colors leading-snug">
                        hello@devtracoplus.com
                      </span>
                      <span className="text-sm text-white/55">
                        We reply within 24 hours
                      </span>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 pt-2 border-t border-white/10">
                  <span className="mt-0.5 w-9 h-9 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Clock size={15} weight="duotone" className="text-primary" />
                  </span>
                  <div className="text-sm text-white/65 leading-relaxed">
                    Private viewings by appointment, including evenings and
                    weekends.
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR — socials, legal */}
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <p className="text-xs text-white/45 leading-relaxed">
              © {new Date().getFullYear()} Devtraco Plus Ghana Limited.
              <br className="md:hidden" /> All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/45">
              {["Privacy", "Terms", "Cookies", "Accessibility"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white/70 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <Icon size={15} weight="bold" />
              </a>
            ))}
          </div>
        </div>

        {/* MASSIVE WORDMARK REVEAL */}
        <motion.div
          ref={wordmarkRef}
          style={{ y: wordmarkY, opacity: wordmarkOpacity }}
          className="mt-20 md:mt-28 select-none"
          aria-hidden="true"
        >
          <div className="font-serif font-light text-white whitespace-nowrap leading-[0.85] tracking-[-0.04em] text-[19vw] flex justify-between gap-[0.02em] overflow-hidden">
            {wordmark.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden"
                style={{ height: "0.9em" }}
              >
                <motion.span
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : { y: "110%" }}
                  transition={{
                    duration: 1.4,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={
              inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-center text-[11px] uppercase tracking-[0.4em] text-white/40"
          >
            Intersection of Heritage & Global Luxury · Est. 2004
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
