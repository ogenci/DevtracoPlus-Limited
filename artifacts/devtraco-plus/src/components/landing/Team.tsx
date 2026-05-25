import { motion } from "framer-motion";
import { LinkedinLogo } from "@phosphor-icons/react";
import team1 from "@/assets/team-1.webp";
import team2 from "@/assets/team-2.webp";
import team3 from "@/assets/team-3.webp";
import team4 from "@/assets/team-4.webp";

const members = [
  {
    name: "Kwabena Asante",
    role: "Chief Executive Officer",
    bio: "Twenty years of shaping skylines from Cantonments to Roman Ridge.",
    image: team1,
  },
  {
    name: "Nana Ofori-Mensah",
    role: "Director, Sales & Marketing",
    bio: "Bridging the diaspora and Accra's most considered residences.",
    image: team2,
  },
  {
    name: "Daniel Boateng",
    role: "Head of Architecture",
    bio: "Drafting a quieter modernism rooted in West African craft.",
    image: team3,
  },
  {
    name: "Esi Quartey",
    role: "Head of Client Experience",
    bio: "From keys to concierge — the rituals of moving home, well done.",
    image: team4,
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-32 md:py-44 site-gutter bg-background relative z-10"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-xs mb-6 block">
              The People Behind The Plus
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              A small studio of <br />
              <span className="italic text-primary font-light">
                builders, designers
              </span>{" "}
              and hosts.
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
            className="lg:col-span-4 lg:col-start-9 text-lg text-muted-foreground leading-relaxed"
          >
            Every Devtraco Plus residence is signed off by a tight, in-house
            team. The same people who draw your home are the ones you'll meet
            on site, and again at handover.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {members.map((m, i) => (
            <motion.figure
              key={m.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted relative mb-5">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-foreground flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary hover:text-white"
                >
                  <LinkedinLogo size={16} weight="bold" />
                </a>
              </div>
              <figcaption>
                <h3 className="font-serif text-2xl text-foreground leading-tight">
                  {m.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-primary mt-1.5 mb-3 font-medium">
                  {m.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[28ch]">
                  {m.bio}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
