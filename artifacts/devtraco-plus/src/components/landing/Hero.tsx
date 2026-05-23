import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import heroImage from "@/assets/hero.png";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 site-gutter pt-24 sm:pt-28 md:pt-32 overflow-hidden bg-black"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10" />
        <img
          src={heroImage}
          alt="Luxury Devtraco Plus residential tower at twilight in Accra"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 site-container grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end text-white"
      >
        <div className="md:col-span-8 lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs uppercase tracking-[0.25em] text-primary mb-6 block"
          >
            Devtraco Plus · Accra, Ghana
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
          >
            A new generation <br />
            of Signature{" "}
            <span className="italic font-light text-primary">Homes</span> <br />
            in Ghana.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 lg:col-span-3 lg:col-start-10 flex flex-col gap-8"
        >
          <p className="text-lg md:text-xl font-light text-white/80 leading-relaxed">
            A heavenly range of property developments in the heart of Accra
            which will offer people a chance to achieve their dream lifestyle
            and investment goals.
          </p>

          <a
            href="#projects"
            className="group flex items-center gap-4 text-sm uppercase tracking-wider font-semibold hover:text-primary transition-colors w-fit"
          >
            Explore Projects
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 text-[10px] uppercase tracking-[0.3em] flex items-center gap-3"
      >
        <span className="block w-8 h-px bg-white/30" />
        Scroll
        <span className="block w-8 h-px bg-white/30" />
      </motion.div>
    </section>
  );
}
