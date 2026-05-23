import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-32 md:py-48 site-gutter bg-background relative">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 md:col-start-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              A philosophy of <span className="italic text-primary">restraint</span> and unhurried confidence.
            </h2>
          </motion.div>
        </div>
        <div className="md:col-span-4 md:col-start-8 flex flex-col gap-8">
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We do not build for the moment. We build for the decades. Every material choice, every sightline, every corner of landscaping is considered with an eye toward enduring value and quiet luxury.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our properties are designed to be sanctuaries in the heart of Accra — spaces where West African heritage meets global standards of comfort and sophistication.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
