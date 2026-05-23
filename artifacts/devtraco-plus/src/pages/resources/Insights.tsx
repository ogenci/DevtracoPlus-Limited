import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Clock, EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { images } from "@/lib/media";

type Article = {
  id: string;
  title: string;
  category: "Market Reports" | "Investment Guides" | "Spotlight";
  readTime: string;
  date: string;
  image: string;
  blurb: string;
};

const articles: Article[] = [
  {
    id: "market-outlook-2026",
    title: "Accra Real Estate Market Outlook & Yield Analysis",
    category: "Market Reports",
    readTime: "8 min read",
    date: "May 12, 2026",
    image: images.homepage,
    blurb: "An in-depth review of rental yield curves, luxury occupancy rates, and institutional interest in premium residential sectors."
  },
  {
    id: "diaspora-title-guide",
    title: "The Diaspora Guide to Secure Land Title Registration",
    category: "Investment Guides",
    readTime: "5 min read",
    date: "April 28, 2026",
    image: images.arlo,
    blurb: "Navigating local registries, joint ventures, and legal representation under the Lands Act to protect your capital."
  },
  {
    id: "cantonments-spotlight",
    title: "Accra's Diplomatic Enclave: Why Cantonments Leads Demand",
    category: "Spotlight",
    readTime: "4 min read",
    date: "April 15, 2026",
    image: images.pelican,
    blurb: "Analyzing connectivity, security parameters, and why diplomatic missions choose local premium developments."
  },
  {
    id: "bond-yields-vs-property",
    title: "Sovereign Fixed Income vs. Luxury Real Estate Placements",
    category: "Market Reports",
    readTime: "6 min read",
    date: "March 30, 2026",
    image: images.address,
    blurb: "Comparing risk-adjusted returns of West African sovereign holdings against physical brick-and-mortar assets in prime districts."
  }
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-24">
        {/* Hero Section with full-bleed image bg and premium dark overlay */}
        <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 mb-20 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh] bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={images.pelican}
              alt="Devtraco Portfolio Insights"
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
                Developer Perspectives
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8">
              Devtraco <br />
              Portfolio <span className="italic font-light text-primary">Insights</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch]">
              Market reports, investment methodologies, and architectural viewpoints from West Africa's leading private development house.
            </p>
          </div>
        </section>

        {/* Category filtering tab bar */}
        <section className="site-gutter mb-12 relative z-20">
          <div className="max-w-screen-2xl mx-auto border-b border-border pb-4">
            <div className="flex flex-wrap gap-6 text-sm font-semibold tracking-wider uppercase">
              {["All", "Market Reports", "Investment Guides", "Spotlight"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`pb-4 transition-all relative cursor-pointer ${
                    selectedCategory === cat
                      ? "text-primary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <motion.span
                      layoutId="activeCategoryBorder"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="site-gutter mb-24 relative z-10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((art, idx) => (
                <motion.article
                  key={art.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-card border border-border overflow-hidden rounded-md flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Metadata & title */}
                    <div className="p-8 pb-4">
                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-primary font-semibold mb-4">
                        <span>{art.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{art.date}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{art.blurb}</p>
                    </div>
                  </div>

                  {/* Read time and actions */}
                  <div className="px-8 pb-8 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock size={14} />
                      {art.readTime}
                    </span>

                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors cursor-pointer">
                      Read Article
                      <ArrowRight size={12} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Newsletter section */}
        <section className="site-gutter">
          <div className="max-w-4xl mx-auto bg-card border border-border p-8 md:p-16 rounded-md relative shadow-sm text-center">
            {!newsletterSubmitted ? (
              <>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <BookOpen size={24} weight="duotone" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Subscribe to Private Briefings</h3>
                <p className="text-muted-foreground max-w-[45ch] mx-auto leading-relaxed text-sm mb-10">
                  Receive our quarterly market bulletins, tax updates, and priority notifications of off-market private listings directly in your inbox.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubmitted(true);
                  }}
                  className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full bg-background border border-border focus:border-primary outline-none pl-10 pr-4 py-2.5 text-sm transition-colors rounded-md"
                    />
                    <EnvelopeSimple size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <ShieldCheck size={40} weight="duotone" />
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-3">Subscription Verified</h3>
                <p className="text-muted-foreground max-w-[36ch] mx-auto leading-relaxed text-sm">
                  Welcome to our private circle. You will receive the next quarterly intelligence briefing in your inbox.
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