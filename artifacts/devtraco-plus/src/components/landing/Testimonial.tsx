import { motion } from "framer-motion";
import { Play, Quotes } from "@phosphor-icons/react";
import { images } from "@/lib/media";

type Story = {
  quote: string;
  author: string;
  role: string;
  project: string;
  duration: string;
  poster: string;
  featured?: boolean;
};

const stories: Story[] = [
  {
    quote:
      "Purchasing a property when you are far away from home can be a daunting experience. The team at Devtraco Plus made everything smooth and painless.",
    author: "D. Armah",
    role: "Diaspora Homeowner",
    project: "Forte Residences",
    duration: "02:14",
    poster: images.forte,
    featured: true,
  },
  {
    quote:
      "The finish on the apartment is what convinced us — quietly luxurious, considered, and built to last.",
    author: "K. Mensah",
    role: "Owner",
    project: "The Address · Roman Ridge",
    duration: "01:48",
    poster: images.address,
  },
  {
    quote:
      "From the first viewing to handover, the team treated us like family. The timeline held to the day.",
    author: "A. Boateng",
    role: "Owner",
    project: "Arlo · Cantonments",
    duration: "01:32",
    poster: images.arlo,
  },
  {
    quote:
      "We bought as an investment from London. The numbers made sense, but it was the trust we placed in them that made it easy.",
    author: "E. Ofori-Atta",
    role: "Investor",
    project: "Avant Garde · Labone",
    duration: "02:06",
    poster: images.homepage,
  },
];

function VideoCard({
  story,
  index,
  size = "default",
}: {
  story: Story;
  index: number;
  size?: "default" | "featured";
}) {
  const isFeatured = size === "featured";
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group cursor-pointer"
    >
      <div
        className={`relative overflow-hidden rounded-md bg-black ${
          isFeatured ? "aspect-[16/10]" : "aspect-[4/5]"
        }`}
      >
        {/* Poster */}
        <img
          src={story.poster}
          alt={`${story.author} testimonial — ${story.project}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />

        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

        {/* Top-row chips */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.2em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Owner Story
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-medium tabular-nums">
            {story.duration}
          </span>
        </div>

        {/* Centered play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer pulse ring */}
            <span className="absolute inset-0 rounded-full border border-white/40 scale-100 group-hover:scale-125 group-hover:opacity-0 opacity-100 transition-all duration-700" />
            {/* Button */}
            <div
              className={`relative ${
                isFeatured ? "w-20 h-20" : "w-16 h-16"
              } rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:scale-105`}
            >
              <Play
                size={isFeatured ? 26 : 22}
                weight="fill"
                className="text-white translate-x-0.5"
              />
            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white">
          <Quotes
            size={16}
            weight="fill"
            className="text-primary mb-3 opacity-90"
          />
          <p
            className={`font-serif font-light leading-snug text-white mb-4 ${
              isFeatured
                ? "text-xl md:text-2xl lg:text-[26px] max-w-[40ch]"
                : "text-base md:text-lg max-w-[32ch]"
            }`}
          >
            "{story.quote}"
          </p>
          <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/15">
            <div>
              <cite className="not-italic block text-sm font-semibold text-white">
                {story.author}
              </cite>
              <span className="text-[10.5px] uppercase tracking-[0.22em] text-white/55">
                {story.role}
              </span>
            </div>
            <span className="text-[10.5px] uppercase tracking-[0.22em] text-primary text-right max-w-[12ch]">
              {story.project}
            </span>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export default function Testimonial() {
  const [featured, ...rest] = stories;

  return (
    <section className="py-32 md:py-44 site-gutter bg-secondary text-secondary-foreground relative z-10 overflow-hidden">
      {/* subtle backdrop texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#fff,transparent_60%)]" />

      <div className="max-w-screen-2xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-6 block">
              Owner Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
              Hear it from the <br />
              people who{" "}
              <span className="italic text-primary font-light">
                live here.
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-4 lg:col-start-9 text-base md:text-lg text-white/70 leading-relaxed"
          >
            Short films with our owners — diaspora returnees, local families
            and investors — talking openly about what it's like to buy and
            live in a Devtraco Plus residence.
          </motion.p>
        </div>

        {/* Featured large video card */}
        <div className="mb-6 lg:mb-8">
          <VideoCard story={featured} index={0} size="featured" />
        </div>

        {/* Three supporting video cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((s, i) => (
            <VideoCard key={s.author} story={s} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}