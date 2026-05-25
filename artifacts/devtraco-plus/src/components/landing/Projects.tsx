import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { images } from "@/lib/media";

const projects = [
  {
    id: "avant-garde",
    name: "Avant Garde",
    location: "Labone",
    image: images.homepage,
    type: "Flagship Apartments",
    price: null,
    span: "col-span-1 md:col-span-2 lg:col-span-2 aspect-[4/3] md:aspect-[21/9]",
  },
  {
    id: "arlo",
    name: "Arlo",
    location: "Cantonments",
    image: images.arlo,
    type: "Apartments",
    price: "$83,000+",
    span: "col-span-1 md:col-span-1 aspect-[4/5]",
  },
  {
    id: "the-address",
    name: "The Address",
    location: "Roman Ridge",
    image: images.address,
    type: "Apartments & Penthouses",
    price: "$89,000+",
    span: "col-span-1 md:col-span-1 aspect-[4/5]",
  },
  {
    id: "pelican",
    name: "The Pelican",
    location: "Cantonments",
    image: images.pelican,
    type: "Hotel Apartments",
    price: "$274,125+",
    span: "col-span-1 md:col-span-2 lg:col-span-2 aspect-[4/3] md:aspect-[16/7]",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 site-gutter bg-card relative z-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Curated Portfolio</h2>
          </motion.div>
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold hover:text-primary transition-colors"
          >
            View all properties <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden bg-muted ${project.span}`}
            >
              <img 
                src={project.image} 
                alt={project.name}
                loading="lazy" decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-medium tracking-widest uppercase text-white/80 mb-2 block">
                      {project.location}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl mb-1">{project.name}</h3>
                    <p className="text-white/70 text-sm">{project.type}</p>
                  </div>
                  {project.price && (
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-widest text-white/60 block mb-1">Starting From</span>
                      <span className="font-serif text-xl text-primary">{project.price}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}