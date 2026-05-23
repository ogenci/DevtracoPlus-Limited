import { motion } from "framer-motion";

const lines = [
  "For more than two decades, Devtraco Plus has",
  "shaped the residential fabric of Accra —",
  "assembling architecture, location and service",
  "into homes that hold their value, and their",
  "meaning, across generations.",
];

export default function Practice() {
  return (
    <section className="relative bg-background py-24 sm:py-32 md:py-44 lg:py-52 site-gutter overflow-hidden">
      {/* very faint warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.06)_0%,_transparent_60%)]"
      />

      <div className="relative max-w-screen-xl mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Eyebrow — far left */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-3 lg:col-span-2 flex items-center gap-3 md:pt-3 mb-4 md:mb-0"
          >
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
              Our Practice
            </span>
          </motion.div>

          {/* Main column */}
          <div className="col-span-12 md:col-span-9 lg:col-span-9 lg:col-start-4">
            {/* Gold italic tagline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif italic text-primary text-lg sm:text-xl md:text-2xl lg:text-[26px] mb-8 md:mb-12 tracking-tight"
            >
              We build addresses, not buildings.
            </motion.p>

            {/* Big serif manifesto — line-by-line reveal */}
            <h2 className="font-serif text-foreground text-[30px] leading-[1.18] sm:text-4xl md:text-5xl lg:text-[58px] lg:leading-[1.15] tracking-[-0.01em] mb-10 md:mb-14">
              {lines.map((line, i) => (
                <span
                  key={i}
                  className="block overflow-hidden"
                >
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + i * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* Quiet supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[15px] md:text-[17px] text-muted-foreground leading-[1.75] max-w-[58ch]"
            >
              Each project is the product of patient design, considered
              partnerships and a refusal to compromise. The result is a
              portfolio of residences and hotel apartments unlike anything else
              in the country.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
