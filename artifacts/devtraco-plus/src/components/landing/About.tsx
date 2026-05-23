import { motion } from "framer-motion";
import { images } from "@/lib/media";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 site-gutter bg-background relative z-10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[3/4] overflow-hidden"
          >
            <img 
              src={images.forte} 
              alt="Forte Residences" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary -z-10 hidden md:block" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-xs mb-6 block">Heritage & Luxury</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-secondary">
            Shaping Accra's <br/> skyline for decades.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
            We build more than homes; we curate lifestyles. Every Devtraco Plus property represents a meticulous intersection of West African heritage and uncompromising global luxury. From serene Cantonments to prestigious Roman Ridge, our developments stand as testaments to architectural restraint and enduring value.
          </p>
        </motion.div>

      </div>
    </section>
  );
}