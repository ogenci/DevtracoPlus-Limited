import { motion } from "framer-motion";
import {
  MagnifyingGlass,
  Buildings,
  Handshake,
  Key,
} from "@phosphor-icons/react";

const steps = [
  {
    icon: MagnifyingGlass,
    label: "Discover",
    timeline: "Day 1",
    title: "A conversation, not a pitch.",
    body:
      "We start with a fifteen-minute call to understand what 'home' looks like for you — location, size, budget, timeline. We send you a private shortlist within 48 hours.",
  },
  {
    icon: Buildings,
    label: "Tour",
    timeline: "Week 1",
    title: "See it in person — or live, on screen.",
    body:
      "A senior member of our team walks you through your shortlisted residences. If you're abroad, we host a live high-resolution video tour at your convenience.",
  },
  {
    icon: Handshake,
    label: "Reserve",
    timeline: "Week 2",
    title: "A clear, written offer.",
    body:
      "Once you've chosen, we issue a Reservation Agreement with full price, payment plan options and a transparent fee schedule. You have 14 days to review with your lawyer.",
  },
  {
    icon: Key,
    label: "Move In",
    timeline: "Handover",
    title: "Keys, concierge and a glass of champagne.",
    body:
      "We schedule a personal handover at the residence, hand over your Land Title Certificate, and introduce you to your concierge team. The home is yours.",
  },
];

export default function OwnershipJourney() {
  return (
    <section className="relative bg-card py-28 md:py-40 site-gutter overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                Path to Ownership
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              From first call to{" "}
              <span className="italic font-light text-primary">
                front door
              </span>{" "}
              — in four steps.
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
            We have refined the buying process over twenty years. No
            paperwork ambushes, no last-minute fees, no surprises. Just a
            considered handover of your new home.
          </motion.p>
        </div>

        <div className="relative">
          {/* connecting timeline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute top-7 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex flex-col group"
                >
                  {/* numbered node on the timeline */}
                  <div className="relative flex items-center justify-center mb-8">
                    <span className="relative z-10 w-14 h-14 rounded-full bg-card border border-foreground/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                      <Icon
                        size={22}
                        weight="duotone"
                        className="text-primary"
                      />
                    </span>
                    <span className="absolute -top-2 -right-2 z-10 w-7 h-7 rounded-full bg-foreground text-background text-[10px] font-semibold flex items-center justify-center font-mono">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="text-center lg:text-left">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-[0.22em] text-primary mb-3">
                      {s.timeline} · {s.label}
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground leading-tight mb-4">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[36ch] mx-auto lg:mx-0">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
