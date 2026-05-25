import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ShieldCheck, Camera, Globe, Users, Trophy } from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { images } from "@/lib/media";

const pillars = [
  {
    icon: Globe,
    title: "Global Diaspora Reach",
    description: "Your listing is broadcast to high-net-worth Ghanaian diaspora investors, international executives, and global funds."
  },
  {
    icon: Camera,
    title: "Cinematic Media Production",
    description: "Every listing is presented with cinematic walkthrough tours, HDR architectural photography, and placement in our private portfolio catalogs."
  },
  {
    icon: Users,
    title: "Vetted Buyer Registry",
    description: "We immediately cross-reference your asset against our private, pre-qualified registry of active buyers seeking signature properties."
  },
  {
    icon: Trophy,
    title: "Elite Closing Rates",
    description: "Our legal and advisory teams handle local compliance, land title validation, and currency transitions to ensure rapid closings."
  }
];

export default function Sell() {
  const [valuationSubmitted, setValuationSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleStartListing = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-24">
        <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 mb-20 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="absolute inset-0 z-0">
            <img
              src={images.address}
              alt="Sell With Devtraco Plus"
              fetchPriority="high" decoding="async"
              className="w-full h-full object-cover brightness-[0.3]"
            />
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
                Premium Asset Brokerage
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8">
              Sell With <br />
              Devtraco <span className="italic font-light text-primary">Plus</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch] mb-10">
              Entrust your luxury property or undeveloped land holding to Accra's premium real estate network. We deliver clean title matching, institutional representation, and elite market positioning.
            </p>

            <button
              onClick={handleStartListing}
              className="group inline-flex items-center gap-4 pl-6 pr-2 py-3 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer"
            >
              Request Property Valuation
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={14} weight="bold" />
              </span>
            </button>
          </div>
        </section>

        {/* Marketing Steps / Pillars */}
        <section className="px-6 py-20 bg-card border-y border-border relative z-10 mb-20">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center max-w-[60ch] mx-auto mb-16">
              <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-3">Our Representation Model</span>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground">The Signature Presentation Standard</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.05 }}
                    className="p-6 bg-background border border-border rounded-md hover:border-primary/45 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <Icon size={24} weight="duotone" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section ref={formRef} className="site-gutter">
          <div className="max-w-3xl mx-auto bg-foreground text-background p-8 md:p-12 rounded-md relative shadow-2xl overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            {!valuationSubmitted ? (
              <>
                <div className="text-center mb-10">
                  <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-2">Sell Your Property</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white">List Your Asset</h2>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setValuationSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Owner Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Owner Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+233..."
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Property Location</label>
                      <select
                        required
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2.5 text-white text-sm transition-colors cursor-pointer appearance-none"
                      >
                        <option value="Cantonments" className="bg-foreground text-white">Cantonments, Accra</option>
                        <option value="Labone" className="bg-foreground text-white">Labone, Accra</option>
                        <option value="Airport Residential" className="bg-foreground text-white">Airport Residential, Accra</option>
                        <option value="Roman Ridge" className="bg-foreground text-white">Roman Ridge, Accra</option>
                        <option value="Other Accra location" className="bg-foreground text-white">Other Location in Accra</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Property Type</label>
                      <select
                        required
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white text-sm transition-colors cursor-pointer appearance-none"
                      >
                        <option value="Apartment" className="bg-foreground text-white">Apartment</option>
                        <option value="Penthouse" className="bg-foreground text-white">Penthouse</option>
                        <option value="Townhouse" className="bg-foreground text-white">Townhouse</option>
                        <option value="Land holding" className="bg-foreground text-white">Undeveloped Land Holding</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Estimated Value</label>
                      <input
                        type="text"
                        placeholder="e.g. $250,000"
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Asset Details & Legal Title Status</label>
                    <textarea
                      rows={3}
                      placeholder="Describe the property's specifications, structural status, and registry info (e.g. Lands Commission registry details)..."
                      className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-6 inline-flex items-center justify-between pl-6 pr-2 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Submit Listing & Valuation Request
                    <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight size={14} weight="bold" />
                    </span>
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <ShieldCheck size={40} weight="duotone" />
                </div>
                <h3 className="font-serif text-3xl text-white mb-3">Listing Proposal Received</h3>
                <p className="text-white/60 max-w-[36ch] mx-auto leading-relaxed text-sm">
                  Our acquisitions and valuation desk has received your listing proposal. We will schedule a physical inspection and registry audit within 48 hours.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}