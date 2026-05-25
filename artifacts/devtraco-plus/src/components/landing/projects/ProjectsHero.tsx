import { motion } from "framer-motion";
import { ArrowDown } from "@phosphor-icons/react";
import { images } from "@/lib/media";

export default function ProjectsHero() {
  return (
    <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh] bg-black">
      {/* Background Image and Premium Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.homepage}
          alt="Devtraco Plus Signature Portfolio"
          fetchPriority="high" decoding="async"
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10" />
      </div>

      <div className="relative max-w-screen-2xl mx-auto z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
            The Portfolio
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-12 lg:col-span-8 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[0.98] tracking-[-0.02em] text-white"
          >
            Six addresses. <br />
            <span className="italic font-light text-primary">
              One standard.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="col-span-12 lg:col-span-4 lg:pl-8 flex flex-col justify-end"
          >
            <p className="text-base md:text-lg text-white/70 leading-[1.75] max-w-[42ch] mb-8">
              Each Devtraco Plus development is conceived from the same
              question — what would it take to build the kind of home Accra has
              been waiting for? Browse the answers below.
            </p>
            <a
              href="#grid"
              className="self-start inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:text-primary transition-colors group"
            >
              Browse the portfolio
              <span className="w-9 h-9 rounded-full border border-white/20 group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
                <ArrowDown size={13} weight="bold" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 md:mt-28 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent origin-left"
        />
      </div>
    </section>
  );
}