import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Trophy, Sparkle } from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import Stats from "@/components/landing/Stats";
import Philosophy from "@/components/landing/Philosophy";
import Team from "@/components/landing/Team";
import { images } from "@/lib/media";

const timelineEvents = [
  {
    year: "2008",
    title: "Founding & Vision",
    subtitle: "A Subsidiary of Devtraco Group",
    description: "Devtraco Plus was established with a clear mandate: to design and build premium, niche residential properties for corporate executives, investors, and the diaspora, leveraging the decades-long excellence of the parent Devtraco Group.",
    image: images.homepage
  },
  {
    year: "2012",
    title: "The Avant-Garde Launch",
    subtitle: "Setting Benchmarks in Labone",
    description: "Launch of Avant-Garde in Labone, demonstrating our commitment to statement architecture, luxury finishes, and tight urban integration in Accra's finest residential enclaves.",
    image: images.address
  },
  {
    year: "2018",
    title: "The Pelican Innovation",
    subtitle: "Pioneering Managed Hotel Suites",
    description: "Completion of The Pelican in Cantonments, launching Ghana's first fully-managed hotel apartment investment opportunity, yielding consistent returns for diaspora buyers.",
    image: images.pelican
  },
  {
    year: "2024",
    title: "Arlo & The Address",
    subtitle: "The Next Era of Luxury Living",
    description: "Introducing Arlo and The Address, our latest collection featuring cutting-edge smart home integrations, elevated private pools, and high-performance building infrastructure.",
    image: images.arlo
  }
];

export default function AboutPage() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const activeEvent = timelineEvents[activeYearIndex];

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-24">
        <section className="relative site-gutter pt-28 pb-12 sm:pt-36 sm:pb-14 md:pt-44 md:pb-16 lg:pt-56 lg:pb-20 overflow-hidden flex items-center min-h-[60vh] md:min-h-[75vh]">
          {/* Background Image and Overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src={images.homepage}
              alt="About Devtraco Plus"
              fetchPriority="high" decoding="async"
              className="w-full h-full object-cover brightness-[0.35]"
            />
            {/* Gradients to assure premium glass/dark aesthetics and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-10" />
          </div>

          <div className="max-w-screen-2xl mx-auto relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                About the Developer
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8">
              Enduring Values, <br />
              Bespoke <span className="italic font-light text-primary">Craft</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch]">
              Devtraco Plus addresses the needs of the cosmopolitan buyer, crafting luxury sanctuaries across Accra's key diplomatic corridors.
            </p>
          </div>
        </section>

        <section className="site-gutter pt-24 md:pt-36 mb-28 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center max-w-[60ch] mx-auto mb-16">
              <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-3">Our Heritage</span>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground">Timeline of Signature Innovation</h2>
            </div>

            {/* Year Selector Tabs */}
            <div className="flex justify-center border-b border-border mb-12">
              <div className="flex gap-8 md:gap-16 text-lg md:text-2xl font-serif">
                {timelineEvents.map((evt, idx) => (
                  <button
                    key={evt.year}
                    onClick={() => setActiveYearIndex(idx)}
                    className={`pb-4 transition-all relative cursor-pointer ${
                      activeYearIndex === idx
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {evt.year}
                    {activeYearIndex === idx && (
                      <motion.span
                        layoutId="activeYearBorder"
                        className="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline content details */}
            <div className="bg-card border border-border rounded-md overflow-hidden p-6 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvent.year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden rounded-md bg-muted">
                    <img
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      loading="lazy" decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold block mb-1">
                        {activeEvent.subtitle}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                        {activeEvent.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {activeEvent.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <Stats />

        <Philosophy />

        <Team />
      </main>

      <Footer />
    </div>
  );
}