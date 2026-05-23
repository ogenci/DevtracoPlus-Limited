import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import ProjectsHero from "@/components/landing/projects/ProjectsHero";
import ProjectsGrid from "@/components/landing/projects/ProjectsGrid";
import OwnershipJourney from "@/components/landing/projects/OwnershipJourney";
import PaymentPlans from "@/components/landing/projects/PaymentPlans";
import SiteVisit from "@/components/landing/projects/SiteVisit";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

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
        <ProjectsHero />
        <ProjectsGrid />
        <OwnershipJourney />
        <PaymentPlans />
        <SiteVisit />
      </main>
      <Footer />
    </div>
  );
}
