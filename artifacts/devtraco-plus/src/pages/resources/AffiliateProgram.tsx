import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Handshake, TrendUp, Gift, Briefcase } from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { images } from "@/lib/media";

const tiers = [
  {
    icon: Briefcase,
    name: "Bronze Partner",
    condition: "1 – 2 Referrals",
    rate: "1.5%",
    description: "Ideal for real estate enthusiasts, private brokers, and single introductions."
  },
  {
    icon: TrendUp,
    name: "Silver Executive",
    condition: "3 – 5 Referrals",
    rate: "2.0%",
    description: "Elevated tier for active brokers and corporate matchmakers. Includes private previews."
  },
  {
    icon: Gift,
    name: "Gold Ambassador",
    condition: "6 – 10 Referrals",
    rate: "2.5%",
    description: "Premium rewards with direct access to developer pricing and priority allocation."
  },
  {
    icon: Handshake,
    name: "Platinum Elite",
    condition: "11+ Referrals",
    rate: "3.0%",
    description: "Our highest alliance. Full brokerage support, customized campaigns, and co-branded events."
  }
];

export default function AffiliateProgram() {
  const [propertyPrice, setPropertyPrice] = useState<number>(300000);
  const [selectedTierRate, setSelectedTierRate] = useState<number>(0.02);
  const [registered, setRegistered] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const estimatedCommission = propertyPrice * selectedTierRate;

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-24">
        <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 mb-20 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh] bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={images.arlo}
              alt="Affiliate Partner Program"
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
                Corporate Alliances
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8">
              Affiliate <br />
              & Referral <span className="italic font-light text-primary">Program</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch]">
              Partner with Devtraco Plus and earn signature commission payouts by introducing qualified buyers to our portfolio of luxury developments.
            </p>
          </div>
        </section>

        {/* Dynamic Calculator Section */}
        <section className="site-gutter mb-24 relative z-10">
          <div className="max-w-screen-2xl mx-auto bg-card border border-border rounded-md p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-2">Simulate Earnings</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground">Commission Estimator</h2>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Select your affiliate partnership level and drag the slider to estimate your potential payouts on closed transactions.
                  </p>
                </div>

                {/* Tier Selection Button Group */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3 font-semibold">Partnership Tier</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { name: "Bronze (1.5%)", rate: 0.015 },
                      { name: "Silver (2.0%)", rate: 0.02 },
                      { name: "Gold (2.5%)", rate: 0.025 },
                      { name: "Platinum (3.0%)", rate: 0.03 }
                    ].map((tier) => (
                      <button
                        key={tier.name}
                        onClick={() => setSelectedTierRate(tier.rate)}
                        className={`px-3 py-2.5 rounded-md text-xs font-semibold tracking-wider transition-all cursor-pointer border ${
                          selectedTierRate === tier.rate
                            ? "bg-primary border-primary text-white"
                            : "bg-background border-border hover:border-primary/50 text-foreground"
                        }`}
                      >
                        {tier.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider */}
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-semibold">
                    <span>Property Sale Value</span>
                    <span className="text-foreground font-serif text-base">${propertyPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="80000"
                    max="1000000"
                    step="20000"
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="w-full accent-primary bg-muted rounded-lg appearance-none cursor-pointer h-1.5"
                  />
                  <div className="flex justify-between text-[9px] text-muted-foreground/60 mt-1">
                    <span>$80k</span>
                    <span>$500k</span>
                    <span>$1M</span>
                  </div>
                </div>
              </div>

              {/* Display Result Box */}
              <div className="lg:col-span-5 bg-background border border-border p-8 rounded-md text-center relative overflow-hidden flex flex-col justify-center min-h-[250px]">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0%,_transparent_70%)]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground block mb-2 font-semibold">Your Estimated Payout</span>
                <span className="font-serif text-5xl md:text-6xl text-primary font-bold block mb-4">
                  ${estimatedCommission.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
                <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-[28ch] mx-auto">
                  Calculated based on standard client contract terms upon successful completion and transaction closure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="site-gutter mb-24 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center max-w-[60ch] mx-auto mb-16">
              <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-3">Affiliation Levels</span>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground">Program Partnership Structure</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tiers.map((tier, idx) => {
                const Icon = tier.icon;
                return (
                  <div key={idx} className="p-6 bg-card border border-border rounded-md hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <Icon size={20} weight="duotone" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-1">{tier.name}</h3>
                    <span className="block text-[10px] uppercase tracking-widest text-primary font-semibold mb-4">{tier.condition}</span>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{tier.description}</p>
                    <div className="pt-4 border-t border-border flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Commission Rate</span>
                      <span className="font-serif text-lg font-semibold text-primary">{tier.rate}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="site-gutter">
          <div className="max-w-3xl mx-auto bg-foreground text-background p-8 md:p-12 rounded-md relative shadow-2xl overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            {!registered ? (
              <>
                <div className="text-center mb-10">
                  <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-2">Join The Alliance</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white">Register as an Affiliate</h2>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRegistered(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
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
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Phone Number</label>
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
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Primary Profession</label>
                      <input
                        type="text"
                        placeholder="e.g. Attorney, Investment Advisor, Agent"
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Market Core</label>
                      <select
                        required
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2.5 text-white text-sm transition-colors cursor-pointer appearance-none"
                      >
                        <option value="Accra Local" className="bg-foreground text-white">Accra Local Market</option>
                        <option value="Ghana Diaspora" className="bg-foreground text-white">Ghana Diaspora Market</option>
                        <option value="West Africa Regional" className="bg-foreground text-white">West African Region</option>
                        <option value="International" className="bg-foreground text-white">Global/International Clients</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Brief Referral Background</label>
                    <textarea
                      rows={3}
                      placeholder="Share details of your network, experience, or potential client referrals..."
                      className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-6 inline-flex items-center justify-between pl-6 pr-2 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Submit Alliance Application
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
                <h3 className="font-serif text-3xl text-white mb-3">Alliance Application Received</h3>
                <p className="text-white/60 max-w-[36ch] mx-auto leading-relaxed text-sm">
                  Our corporate alliances team will review your application and network profile. An onboarding manager will contact you with login credentials and contract details.
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