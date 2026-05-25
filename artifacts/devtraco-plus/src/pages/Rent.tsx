import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MapPin, MagnifyingGlass, Bed, Calendar, ShieldCheck, ArrowRight, Sparkle, Key } from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { images } from "@/lib/media";

type RentalProperty = {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "Short Stay" | "Long Term" | "Corporate Suite";
  beds: string;
  rate: string;
  numericRate: number;
  image: string;
  blurb: string;
  amenities: string[];
};

const rentals: RentalProperty[] = [
  {
    id: "pelican-suite",
    name: "The Pelican Serviced Suites",
    location: "Cantonments",
    type: "Serviced Hotel Apartment",
    status: "Short Stay",
    beds: "Studio & 1 Bed",
    rate: "$180 / night",
    numericRate: 180,
    image: images.pelican,
    blurb: "Fully-managed luxury suites with daily housekeeping, private concierge service, and high-speed fiber internet.",
    amenities: ["Housekeeping", "Rooftop Pool", "Concierge", "24/7 Power"],
  },
  {
    id: "arlo-exec",
    name: "Arlo Executive Residence",
    location: "Cantonments",
    type: "Premium Apartment",
    status: "Long Term",
    beds: "2 Bed",
    rate: "$2,800 / month",
    numericRate: 2800,
    image: images.arlo,
    blurb: "Modern aesthetic apartments tucked in the diplomatic corridor. Walkable, high-level perimeter security.",
    amenities: ["Fully Furnished", "Gym Access", "Private Balcony", "Secure Parking"],
  },
  {
    id: "avant-garde-penthouse",
    name: "Avant Garde Signature Penthouse",
    location: "Labone",
    type: "Luxury Penthouse",
    status: "Corporate Suite",
    beds: "3 Bed Duplex",
    rate: "$5,500 / month",
    numericRate: 5500,
    image: images.homepage,
    blurb: "Overlooking the Accra skyline and the Atlantic coast. Double-height ceilings, private plunge pool, elite finishes.",
    amenities: ["Plunge Pool", "Dual Kitchens", "Concierge Desk", "Security Patrols"],
  },
  {
    id: "address-garden",
    name: "The Address Poolside Suites",
    location: "Roman Ridge",
    type: "Poolside Apartment",
    status: "Long Term",
    beds: "2 Bed",
    rate: "$3,200 / month",
    numericRate: 3200,
    image: images.address,
    blurb: "Resort-style living with private deck access, infinity pool view, and direct entry to private wellness deck.",
    amenities: ["Pool Deck Access", "Fitness Center", "High Security", "Backup Water"],
  }
];

export default function Rent() {
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedTerm, setSelectedTerm] = useState<string>("All");
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredRentals = rentals.filter((r) => {
    const matchesLocation = selectedLocation === "All" || r.location === selectedLocation;
    const matchesTerm = selectedTerm === "All" || 
      (selectedTerm === "Short" && r.status === "Short Stay") || 
      (selectedTerm === "Long" && (r.status === "Long Term" || r.status === "Corporate Suite"));
    return matchesLocation && matchesTerm;
  });

  const handleInquireClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-24">
        {/* Hero with full-bleed image bg and overlay */}
        <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 mb-16 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="absolute inset-0 z-0">
            <img
              src={images.pelican}
              alt="Executive Leasing"
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
                Executive Residential Services
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8">
              Executive <br />
              Leasing & <span className="italic font-light text-primary">Rentals</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch]">
              Curated short-stay and long-term luxury residences catering to corporate executives, diplomats, and international travelers.
            </p>
          </div>
        </section>

        {/* Filter and Search Panel */}
        <section className="site-gutter mb-16 relative z-20">
          <div className="max-w-screen-2xl mx-auto bg-card border border-border p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Location Filter */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-medium">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full bg-background border border-border focus:border-primary outline-none px-3.5 py-2.5 text-sm transition-colors rounded-md cursor-pointer appearance-none"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%23B68D52' stroke-width='1.5' d='M1 1.5l5 5 5-5'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.85rem center",
                  }}
                >
                  <option value="All">All locations</option>
                  <option value="Cantonments">Cantonments</option>
                  <option value="Labone">Labone</option>
                  <option value="Roman Ridge">Roman Ridge</option>
                </select>
              </div>

              {/* Lease Term */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-medium">Lease Term</label>
                <select
                  value={selectedTerm}
                  onChange={(e) => setSelectedTerm(e.target.value)}
                  className="w-full bg-background border border-border focus:border-primary outline-none px-3.5 py-2.5 text-sm transition-colors rounded-md cursor-pointer appearance-none"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%23B68D52' stroke-width='1.5' d='M1 1.5l5 5 5-5'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.85rem center",
                  }}
                >
                  <option value="All">All lease terms</option>
                  <option value="Short">Short Stay / Nightly</option>
                  <option value="Long">Long Term / Monthly</option>
                </select>
              </div>

              {/* Reset/Apply button helper */}
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setSelectedLocation("All");
                    setSelectedTerm("All");
                  }}
                  className="w-full md:w-auto px-6 py-2.5 bg-secondary border border-secondary-border hover:bg-muted text-sm font-semibold rounded-md transition-colors cursor-pointer text-center"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Rentals Display */}
        <section className="site-gutter mb-24 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            {filteredRentals.length > 0 ? (
              <div className="space-y-12">
                {filteredRentals.map((r, i) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-card border border-border overflow-hidden rounded-md grid grid-cols-1 lg:grid-cols-12 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Media Block */}
                    <div className="relative overflow-hidden lg:col-span-6 aspect-[16/10] lg:aspect-auto min-h-[300px] bg-muted">
                      <img
                        src={r.image}
                        alt={r.name}
                        loading="lazy" decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                      
                      <span className="absolute top-6 left-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-wider font-semibold">
                        <Key size={12} className="text-primary" />
                        {r.status}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-primary mb-3">
                          <MapPin size={14} weight="bold" />
                          <span className="uppercase tracking-widest">{r.location}, Accra</span>
                        </div>
                        <h3 className="font-serif text-3xl text-foreground mb-4">{r.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-[50ch]">{r.blurb}</p>

                        {/* Amenities lists */}
                        <div className="mb-8">
                          <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground block mb-3 font-semibold">Featured Amenities</span>
                          <div className="flex flex-wrap gap-2">
                            {r.amenities.map((amenity, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1 text-[11px] px-3 py-1.5 bg-background border border-border rounded-full text-foreground/80">
                                <Sparkle size={11} className="text-primary" />
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA & Pricing block */}
                      <div className="pt-6 border-t border-border flex items-center justify-between">
                        <div>
                          <span className="block text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Rental Rate</span>
                          <span className="text-xl font-serif font-semibold text-primary">{r.rate}</span>
                        </div>

                        <button
                          onClick={handleInquireClick}
                          className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer"
                        >
                          Book / Inquire
                          <ArrowRight size={12} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-md border border-border">
                <p className="text-muted-foreground">No executive rentals found matching your filter criteria.</p>
                <button
                  onClick={() => {
                    setSelectedLocation("All");
                    setSelectedTerm("All");
                  }}
                  className="text-primary font-medium underline mt-4 block mx-auto text-sm"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section ref={formRef} className="site-gutter pt-16">
          <div className="max-w-3xl mx-auto bg-foreground text-background p-8 md:p-12 rounded-md relative shadow-2xl overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            {!inquirySubmitted ? (
              <>
                <div className="text-center mb-10">
                  <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-2">Luxury Leasing Services</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white">Arrange a Viewing or Booking</h2>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
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
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Ideal Stay Duration</label>
                      <select
                        required
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white text-sm transition-colors cursor-pointer appearance-none"
                      >
                        <option value="Short Stay (Less than 1 month)" className="bg-foreground text-white">Short Stay (Less than 1 month)</option>
                        <option value="Medium Stay (1 to 6 months)" className="bg-foreground text-white">Medium Stay (1 to 6 months)</option>
                        <option value="Long Stay (6+ months)" className="bg-foreground text-white">Long Stay (6+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Preferred Suite / Property</label>
                    <select
                      required
                      className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2.5 text-white text-sm transition-colors cursor-pointer appearance-none"
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%23B68D52' stroke-width='1.5' d='M1 1.5l5 5 5-5'/></svg>\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.25rem center",
                      }}
                    >
                      <option value="" disabled className="bg-foreground text-white/40">Select a property...</option>
                      {rentals.map((r) => (
                        <option key={r.id} value={r.name} className="bg-foreground text-white">
                          {r.name} ({r.location})
                        </option>
                      ))}
                      <option value="General leasing request" className="bg-foreground text-white">General Leasing Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Check-in Date / Preferred Start</label>
                    <input
                      type="date"
                      required
                      className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white/80 text-sm transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-6 inline-flex items-center justify-between pl-6 pr-2 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Submit Booking Inquiry
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
                <h3 className="font-serif text-3xl text-white mb-3">Leasing Request Received</h3>
                <p className="text-white/60 max-w-[36ch] mx-auto leading-relaxed text-sm">
                  Your details have been routed to our corporate leasing representative. We will verify availability and contact you shortly.
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