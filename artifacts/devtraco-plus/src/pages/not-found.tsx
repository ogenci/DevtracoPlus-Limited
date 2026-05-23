import { Link } from "wouter";
import { ArrowLeft, Warning } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden site-gutter">
      {/* Radial backdrop glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary))_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-8">
          <Warning size={32} weight="duotone" />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl tracking-tight mb-4 text-secondary">
          404
        </h1>

        <h2 className="font-serif text-2xl mb-6 text-foreground">
          Address Not Found
        </h2>

        <p className="text-muted-foreground mb-10 leading-relaxed">
          The signature residence or resource page you are looking for does not exist or has been relocated.
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-300"
          >
            Back to Home
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-0.5">
              <ArrowLeft size={14} weight="bold" />
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
