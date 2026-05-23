import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Stats from "@/components/landing/Stats";
import Practice from "@/components/landing/Practice";
import Projects from "@/components/landing/Projects";
import TrustPillars from "@/components/landing/TrustPillars";
import Philosophy from "@/components/landing/Philosophy";
import Team from "@/components/landing/Team";
import Testimonial from "@/components/landing/Testimonial";
import News from "@/components/landing/News";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50 mix-blend-multiply"
        style={{ scaleX: scrollYProgress }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Practice />
        <Projects />
        <TrustPillars />
        <Philosophy />
        <Team />
        <Testimonial />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
