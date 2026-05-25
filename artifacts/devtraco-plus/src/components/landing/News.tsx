import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "@phosphor-icons/react";
import { images } from "@/lib/media";

type Article = {
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const articles: Article[] = [
  {
    date: "Mar 10, 2025",
    readTime: "6 min",
    category: "Investment",
    title:
      "Prime Locations: The Foundation of a Profitable Real Estate Investment",
    excerpt:
      "Why the postal code on a property's title still matters more than any other variable in the long-run performance of a home.",
    image: images.homepage,
    href: "#",
  },
  {
    date: "Feb 20, 2025",
    readTime: "5 min",
    category: "Perspective",
    title:
      "Why Real Estate is the Answer to Your Investment Needs",
    excerpt:
      "From inflation hedge to inheritance vehicle: a candid look at what property does for a portfolio that other assets cannot.",
    image: images.address,
    href: "#",
  },
  {
    date: "Feb 1, 2025",
    readTime: "4 min",
    category: "Press Release",
    title:
      "Aleph Hospitality Continues Africa Expansion with The Pelican Hotel Apartments",
    excerpt:
      "A landmark partnership brings world-class hotel-managed residences to the heart of Cantonments.",
    image:
      images.pelican,
    href: "#",
  },
];

export default function News() {
  const [feature, ...rest] = articles;

  return (
    <section id="news" className="py-32 md:py-44 site-gutter bg-card relative">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-6 block">
              Journal & Press
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              Field notes from the <br />
              <span className="italic text-primary font-light">
                Devtraco Plus
              </span>{" "}
              studio.
            </h2>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-3 self-start md:self-auto text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors shrink-0"
          >
            View all stories
            <span className="w-10 h-10 rounded-full border border-foreground/15 group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300">
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured (large) */}
          <motion.a
            href={feature.href}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 group block relative overflow-hidden rounded-md bg-foreground"
          >
            <div className="aspect-[16/11] lg:aspect-[16/12] relative overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy" decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Featured
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[10px] uppercase tracking-[0.2em] font-medium">
                  {feature.category}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/70 mb-4">
                  <span>{feature.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} weight="bold" />
                    {feature.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight max-w-[24ch] mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-[55ch] mb-6 hidden md:block">
                  {feature.excerpt}
                </p>
                <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  Read article
                  <span className="w-9 h-9 rounded-full border border-white/30 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={13} weight="bold" />
                  </span>
                </span>
              </div>
            </div>
          </motion.a>

          {/* Side stack of two */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10">
            {rest.map((a, i) => (
              <motion.a
                key={a.title}
                href={a.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex-1 grid grid-cols-12 gap-5 items-stretch"
              >
                <div className="col-span-5 sm:col-span-5 relative overflow-hidden rounded-md aspect-[4/5] bg-muted">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-foreground text-[9.5px] uppercase tracking-[0.2em] font-semibold">
                    {a.category}
                  </span>
                </div>
                <div className="col-span-7 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      <span>{a.date}</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/20" />
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={11} weight="bold" />
                        {a.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl leading-[1.2] text-foreground group-hover:text-primary transition-colors mb-3">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {a.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-foreground group-hover:text-primary transition-colors mt-4">
                    Read article
                    <ArrowUpRight
                      size={13}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}