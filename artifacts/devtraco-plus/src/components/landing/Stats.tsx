import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption: string;
};

const stats: Stat[] = [
  {
    value: 20,
    suffix: "+",
    label: "Years",
    caption: "Building Accra's most considered residences since 2004.",
  },
  {
    value: 6,
    label: "Signature Developments",
    caption: "From Cantonments to Roman Ridge, Labone to Airport.",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Homes Delivered",
    caption: "Each one signed off by the team that designed it.",
  },
  {
    value: 250,
    prefix: "$",
    suffix: "M",
    label: "Property Value",
    caption: "Cumulative real estate value created across the portfolio.",
  },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (v) => {
    const n = Math.round(v);
    return n >= 1000 ? n.toLocaleString() : n.toString();
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-28 md:py-36 site-gutter bg-foreground text-background overflow-hidden">
      {/* subtle gold halo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary))_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-screen-2xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-6 block">
            Twenty Years, In Numbers
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            A track record we are{" "}
            <span className="italic font-light text-primary">quietly proud</span>{" "}
            of.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-foreground p-8 lg:p-10 flex flex-col"
            >
              <div className="font-serif text-6xl md:text-7xl lg:text-[88px] leading-none text-white mb-5 tracking-tight">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-3">
                {s.label}
              </div>
              <p className="text-sm text-white/55 leading-relaxed max-w-[28ch]">
                {s.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
