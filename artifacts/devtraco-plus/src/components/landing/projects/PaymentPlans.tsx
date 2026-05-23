import { motion } from "framer-motion";
import { Check, Sparkle, Bank, Vault } from "@phosphor-icons/react";

const plans = [
  {
    icon: Vault,
    name: "Outright Purchase",
    sub: "Full payment on signing",
    discount: "Save up to 5%",
    body:
      "The simplest path. Settle at the point of signing and unlock our most favourable price, with handover on schedule.",
    bullets: [
      "Up to 5% off list price",
      "Priority unit selection",
      "Free first-year concierge",
      "Title Certificate at handover",
    ],
    accent: false,
  },
  {
    icon: Sparkle,
    name: "Stretched Plan",
    sub: "Up to 24 months, interest-free",
    discount: "0% interest",
    body:
      "Our most popular path. Reserve with 25% and spread the balance over up to 24 months — at no interest, with no third party.",
    bullets: [
      "25% reservation deposit",
      "Up to 24 monthly instalments",
      "Zero interest, zero hidden fees",
      "Lock-in price at signing",
    ],
    accent: true,
  },
  {
    icon: Bank,
    name: "Mortgage Partners",
    sub: "Through our partner banks",
    discount: "Up to 80% LTV",
    body:
      "We work hand-in-hand with leading mortgage providers in Ghana to arrange financing for both resident and diaspora buyers.",
    bullets: [
      "Republic Bank · Stanbic · HFC",
      "Up to 80% loan-to-value",
      "Cedi & USD financing",
      "Diaspora mortgage available",
    ],
    accent: false,
  },
];

export default function PaymentPlans() {
  return (
    <section className="relative py-28 md:py-40 site-gutter bg-background overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.08)_0%,_transparent_60%)]"
      />

      <div className="relative max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                Payment & Financing
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              Three ways to make a <br />
              Devtraco Plus residence{" "}
              <span className="italic font-light text-primary">yours.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-4 lg:col-start-9 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Whether you're buying outright, spreading payments, or arranging
            a mortgage, we'll structure a plan that works for your finances —
            and your peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col p-8 lg:p-10 rounded-md overflow-hidden border transition-colors ${
                  p.accent
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-foreground border-foreground/10 hover:border-primary/40"
                }`}
              >
                {p.accent && (
                  <>
                    <span className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <span className="absolute top-4 right-6 z-20 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-semibold tracking-[0.22em] uppercase">
                      Most Chosen
                    </span>
                  </>
                )}

                <div className="flex items-start justify-between mb-8">
                  <span
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      p.accent ? "bg-white/10" : "bg-foreground/[0.05]"
                    }`}
                  >
                    <Icon size={24} weight="duotone" className="text-primary" />
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-[0.22em] ${
                      p.accent ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    Plan 0{i + 1}
                  </span>
                </div>

                <h3
                  className={`font-serif text-2xl md:text-3xl leading-tight mb-2 ${
                    p.accent ? "text-white" : "text-foreground"
                  }`}
                >
                  {p.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    p.accent ? "text-white/55" : "text-muted-foreground"
                  }`}
                >
                  {p.sub}
                </p>

                <div
                  className={`inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[11px] uppercase tracking-[0.18em] font-semibold ${
                    p.accent
                      ? "bg-primary/15 text-primary border border-primary/40"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {p.discount}
                </div>

                <p
                  className={`text-[15px] leading-relaxed mb-8 ${
                    p.accent ? "text-white/75" : "text-muted-foreground"
                  }`}
                >
                  {p.body}
                </p>

                <ul
                  className={`space-y-3 pt-6 mt-auto border-t ${
                    p.accent ? "border-white/10" : "border-foreground/10"
                  }`}
                >
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span
                        className={`mt-0.5 w-4 h-4 rounded-full shrink-0 flex items-center justify-center ${
                          p.accent ? "bg-primary/20" : "bg-primary/10"
                        }`}
                      >
                        <Check
                          size={10}
                          weight="bold"
                          className="text-primary"
                        />
                      </span>
                      <span
                        className={
                          p.accent ? "text-white/85" : "text-foreground/85"
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          All plans subject to a Reservation Agreement and standard KYC.
          Final pricing confirmed at unit selection. We're happy to walk
          through the full schedule with you in person.
        </motion.p>
      </div>
    </section>
  );
}
