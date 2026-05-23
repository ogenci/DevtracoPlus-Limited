import { motion } from "framer-motion";
import {
  ShieldCheck,
  Calendar,
  Crown,
  ChartLineUp,
  ArrowRight,
} from "@phosphor-icons/react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Title Secure",
    body:
      "Every Devtraco Plus home is delivered with a clean Land Title Certificate from the Lands Commission. No surprises, no disputes, ever.",
    chip: "Land Title · Verified",
  },
  {
    icon: Calendar,
    title: "Handover, On Time",
    body:
      "We commit to a date and we hold to it. 95% of our completions in the last decade have shipped on or ahead of schedule.",
    chip: "95% On-Time Track Record",
  },
  {
    icon: Crown,
    title: "Concierge Living",
    body:
      "Twenty-four hour concierge, valet, housekeeping and maintenance — built into every signature address. The luxury is in not having to think.",
    chip: "24/7 Service",
  },
  {
    icon: ChartLineUp,
    title: "Asset Performance",
    body:
      "Our portfolio has appreciated an average of 8.2% year-on-year. We design homes to live in and to hold their value across decades.",
    chip: "8.2% Avg. YoY Appreciation",
  },
];

export default function TrustPillars() {
  return (
    <section className="py-32 md:py-44 site-gutter bg-background relative z-10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-6 block">
              Why Devtraco Plus
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              Four promises that <br />
              come standard with{" "}
              <span className="italic text-primary font-light">every key.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-4 lg:col-start-9 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Buying a home is a serious decision. These are the four
            commitments — written and underwritten — that make ours easier.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 rounded-md overflow-hidden border border-foreground/10">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-card p-10 lg:p-14 flex flex-col gap-6 relative overflow-hidden hover:bg-foreground hover:text-background transition-colors duration-500"
              >
                {/* hover gold accent */}
                <span className="absolute top-0 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-full bg-foreground/[0.04] group-hover:bg-primary/15 flex items-center justify-center transition-colors duration-500">
                    <Icon
                      size={26}
                      weight="duotone"
                      className="text-primary"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-white/60 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4 text-foreground group-hover:text-white transition-colors duration-500">
                    {p.title}
                  </h3>
                  <p className="text-base text-muted-foreground group-hover:text-white/70 leading-relaxed max-w-[44ch] transition-colors duration-500">
                    {p.body}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-foreground/10 group-hover:border-white/10 transition-colors duration-500">
                  <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {p.chip}
                  </span>
                  <span className="text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-500">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
