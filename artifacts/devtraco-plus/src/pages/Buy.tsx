import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MapPin, MagnifyingGlass, Bed, Tag, ShieldCheck, ArrowRight, Funnel } from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { images } from "@/lib/media";

type Property = {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "Now Selling" | "Final Units" | "Coming Soon";
  beds: string;
  price: string;
  numericPrice: number;
  image: string;
  blurb: string;
  area: string;
};

const properties: Property[] = [
  {
    id: "avant-garde",
    name: "Avant Garde",
    location: "Labone",
    type: "Apartments",
    status: "Final Units",
    beds: "1 – 4 Bed",
    price: "$310,000",
    numericPrice: 310000,
    image: images.homepage,
    blurb: "A 22-storey landmark of glass and timber overlooking the Atlantic. The flagship address of the portfolio.",
    area: "Labone, Accra",
  },
  {
    id: "arlo",
    name: "Arlo",
    location: "Cantonments",
    type: "Apartments",
    status: "Now Selling",
    beds: "1 – 3 Bed",
    price: "$83,000",
    numericPrice: 83000,
    image: images.arlo,
    blurb: "Considered city-living in the heart of the diplomatic enclave. Walkable, quiet, beautifully made.",
    area: "Cantonments, Accra",
  },
  {
    id: "the-address",
    name: "The Address",
    location: "Roman Ridge",
    type: "Apartments & Penthouses",
    status: "Now Selling",
    beds: "2 – 4 Bed",
    price: "$89,000",
    numericPrice: 89000,
    image: images.address,
    blurb: "Penthouse-led, pool-deck residences with panoramic views of one of the most established suburbs in Accra.",
    area: "Roman Ridge, Accra",
  },
  {
    id: "pelican",
    name: "The Pelican",
    location: "Cantonments",
    type: "Hotel Apartments",
    status: "Now Selling",
    beds: "Studio – 2 Bed",
    price: "$274,000",
    numericPrice: 274000,
    image: images.pelican,
    blurb: "Hotel-managed residences with full Aleph Hospitality service. Earn yield while owning a piece of the city.",
    area: "Cantonments, Accra",
  },
  {
    id: "forte",
    name: "Forte",
    location: "Airport Residential",
    type: "Townhouses & Garden Apartments",
    status: "Coming Soon",
    beds: "3 – 5 Bed",
    price: "$450,000",
    numericPrice: 450000,
    image: images.forte,
    blurb: "A low-rise sanctuary of family-sized residences, inner gardens and shaded courtyards in Airport Residential.",
    area: "Airport Residential, Accra",
  },
  {
    id: "henriettas",
    name: "Henrietta's Place",
    location: "Cantonments",
    type: "Apartments",
    status: "Final Units",
    beds: "1 – 3 Bed",
    price: "$180,000",
    numericPrice: 180000,
    image: images.forte,
    blurb: "Intimate and exceptionally secure signature apartments tucked into Cantonment's quietest lane.",
    area: "Cantonments, Accra",
  }
];

export default function Buy() {
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(500000);
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredProperties = properties.filter((p) => {
    const matchesLocation = selectedLocation === "All" || p.location === selectedLocation;
    const matchesType = selectedType === "All" || p.type.toLowerCase().includes(selectedType.toLowerCase());
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.numericPrice <= maxPrice;
    return matchesLocation && matchesType && matchesSearch && matchesPrice;
  });

  const handleInquireClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-24">
        <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 mb-16 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="absolute inset-0 z-0">
            <img
              src={images.homepage}
              alt="Properties for Sale"
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
                Acquire Signature Assets
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8">
              Properties <br />
              For <span className="italic font-light text-primary">Sale</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch]">
              Own an enduring architectural landmark in Accra's premium residential enclaves. Fully secure land titles, premier amenities, and verified asset appreciation.
            </p>
          </div>
        </section>

        <section className="site-gutter mb-16 relative z-20">
          <div className="max-w-screen-2xl mx-auto bg-card border border-border p-6 md:p-8 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              {/* Search */}
              <div className="relative">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-medium">Search Addresses</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter development or city..."
                    className="w-full bg-background border border-border focus:border-primary outline-none pl-10 pr-4 py-2.5 text-sm transition-colors rounded-md"
                  />
                  <MagnifyingGlass size={16} className="absolute left-3.5 text-muted-foreground" />
                </div>
              </div>

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
                  <option value="Airport Residential">Airport Residential</option>
                </select>
              </div>

              {/* Property Type Filter */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-2 font-medium">Residence Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-background border border-border focus:border-primary outline-none px-3.5 py-2.5 text-sm transition-colors rounded-md cursor-pointer appearance-none"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%23B68D52' stroke-width='1.5' d='M1 1.5l5 5 5-5'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.85rem center",
                  }}
                >
                  <option value="All">All types</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Penthouses">Penthouses</option>
                  <option value="Hotel Apartments">Hotel Apartments</option>
                  <option value="Townhouses">Townhouses</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                  <span>Max Price</span>
                  <span className="text-primary font-serif font-semibold">${maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="80000"
                  max="500000"
                  step="10000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-primary bg-muted rounded-lg appearance-none cursor-pointer h-1.5"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="site-gutter mb-24 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((p, i) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-card border border-border overflow-hidden rounded-md flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy" decoding="async"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Status tag */}
                        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-wider font-semibold">
                          <span className={`w-1.5 h-1.5 rounded-full ${p.status === "Coming Soon" ? "bg-white/60" : "bg-primary animate-pulse"}`} />
                          {p.status}
                        </span>
                      </div>

                      {/* Content details */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-1.5 text-xs text-primary mb-3">
                          <MapPin size={14} weight="bold" />
                          <span className="uppercase tracking-widest">{p.area}</span>
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{p.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.blurb}</p>
                      </div>
                    </div>

                    {/* Specs / bottom panel */}
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-border flex items-center justify-between">
                      <div className="flex gap-6">
                        <div>
                          <span className="block text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Beds</span>
                          <span className="text-xs font-semibold text-foreground flex items-center gap-1">
                            <Bed size={13} />
                            {p.beds}
                          </span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Starting From</span>
                          <span className="text-sm font-serif font-semibold text-primary">{p.price}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleInquireClick}
                        className="w-9 h-9 rounded-full border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white flex items-center justify-center transition-all duration-300"
                        title="Request details"
                      >
                        <ArrowRight size={14} weight="bold" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-md border border-border">
                <p className="text-muted-foreground">No properties match your current filter preferences.</p>
                <button
                  onClick={() => {
                    setSelectedLocation("All");
                    setSelectedType("All");
                    setSearchQuery("");
                    setMaxPrice(500000);
                  }}
                  className="text-primary font-medium underline mt-4 block mx-auto text-sm"
                >
                  Reset all filters
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
                  <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-2">Request Signature Portfolio Catalog</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white">Arrange a Private Consultation</h2>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
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
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Preferred Residence</label>
                    <select
                      required
                      className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2.5 text-white text-sm transition-colors cursor-pointer appearance-none"
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%23B68D52' stroke-width='1.5' d='M1 1.5l5 5 5-5'/></svg>\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.25rem center",
                      }}
                    >
                      <option value="" disabled className="bg-foreground text-white/40">Select a residence...</option>
                      {properties.map((p) => (
                        <option key={p.id} value={p.name} className="bg-foreground text-white">
                          {p.name} ({p.location})
                        </option>
                      ))}
                      <option value="General inquiry" className="bg-foreground text-white">General Portfolio Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/55 block mb-2">Specific Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Indicate ideal beds, timeline, or financing requests..."
                      className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2 text-white placeholder:text-white/20 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-6 inline-flex items-center justify-between pl-6 pr-2 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Submit Purchase Inquiry
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
                <h3 className="font-serif text-3xl text-white mb-3">Inquiry Received</h3>
                <p className="text-white/60 max-w-[36ch] mx-auto leading-relaxed text-sm">
                  Our private client advisory desk has received your request. A senior advisor will reach out within the next 24 hours.
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