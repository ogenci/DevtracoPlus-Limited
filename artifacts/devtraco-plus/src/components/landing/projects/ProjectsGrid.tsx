import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import { images } from "@/lib/media";

type Project = {
  id: string;
  name: string;
  location: string;
  type: string;
  status: "Now Selling" | "Final Units" | "Now Leasing" | "Coming Soon";
  beds: string;
  startingPrice: string;
  image: string;
  blurb: string;
  span: string;
  aspect: string;
};

const projects: Project[] = [
  {
    id: "avant-garde",
    name: "Avant Garde",
    location: "Labone, Accra",
    type: "Flagship Apartments",
    status: "Final Units",
    beds: "1 – 4 Bed",
    startingPrice: "$310,000",
    image:
      images.homepage,
    blurb:
      "A 22-storey landmark of glass and timber overlooking the Atlantic. The flagship address of the portfolio.",
    span: "lg:col-span-7",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
  },
  {
    id: "arlo",
    name: "Arlo",
    location: "Cantonments, Accra",
    type: "Apartments",
    status: "Now Selling",
    beds: "1 – 3 Bed",
    startingPrice: "$83,000",
    image:
      images.arlo,
    blurb:
      "Considered city-living in the heart of the diplomatic enclave. Walkable, quiet, beautifully made.",
    span: "lg:col-span-5",
    aspect: "aspect-[4/5] md:aspect-[4/5]",
  },
  {
    id: "the-address",
    name: "The Address",
    location: "Roman Ridge, Accra",
    type: "Apartments & Penthouses",
    status: "Now Selling",
    beds: "2 – 4 Bed",
    startingPrice: "$89,000",
    image: images.address,
    blurb:
      "Penthouse-led, pool-deck residences with panoramic views of one of the most established suburbs in Accra.",
    span: "lg:col-span-5",
    aspect: "aspect-[4/5] md:aspect-[4/5]",
  },
  {
    id: "pelican",
    name: "The Pelican",
    location: "Cantonments, Accra",
    type: "Hotel Apartments",
    status: "Now Leasing",
    beds: "Studio – 2 Bed",
    startingPrice: "$274,000",
    image:
      images.pelican,
    blurb:
      "Hotel-managed residences with full Aleph Hospitality service. Earn yield while owning a piece of the city.",
    span: "lg:col-span-7",
    aspect: "aspect-[4/5] md:aspect-[16/10]",
  },
  {
    id: "forte",
    name: "Forte",
    location: "Airport Residential",
    type: "Townhouses & Garden Apartments",
    status: "Coming Soon",
    beds: "3 – 5 Bed",
    startingPrice: "On request",
    image: images.forte,
    blurb:
      "A low-rise sanctuary of family-sized residences, inner gardens and shaded courtyards in Airport Residential.",
    span: "lg:col-span-12",
    aspect: "aspect-[4/5] md:aspect-[21/9]",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="grid" className="relative bg-background py-20 md:py-28 site-gutter">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.85,
                delay: (i % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-md bg-foreground ${p.span}`}
            >
              <div className={`relative w-full ${p.aspect} overflow-hidden`}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top status row */}
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[10px] uppercase tracking-[0.22em] font-semibold">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        p.status === "Coming Soon"
                          ? "bg-white/60"
                          : "bg-primary animate-pulse"
                      }`}
                    />
                    {p.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-[10px] uppercase tracking-[0.22em] font-semibold">
                    {p.type}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10 text-white">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70 mb-3">
                    <MapPin size={12} weight="duotone" />
                    {p.location}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-4">
                    {p.name}
                  </h3>
                  <p className="text-[15px] text-white/75 leading-relaxed max-w-[58ch] mb-6 hidden md:block">
                    {p.blurb}
                  </p>
                  <div className="flex items-end justify-between gap-6 pt-5 border-t border-white/15">
                    <div className="flex flex-col sm:flex-row sm:gap-8 gap-2">
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.22em] text-white/50 mb-1">
                          Residences
                        </span>
                        <span className="font-serif text-base md:text-lg text-white">
                          {p.beds}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.22em] text-white/50 mb-1">
                          From
                        </span>
                        <span className="font-serif text-base md:text-lg text-primary">
                          {p.startingPrice}
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-semibold text-white">
                      <span className="hidden md:inline">Explore</span>
                      <span className="w-10 h-10 rounded-full border border-white/30 group-hover:bg-primary group-hover:border-primary flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight
                          size={14}
                          weight="bold"
                          className="transition-transform duration-300 group-hover:rotate-12"
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}