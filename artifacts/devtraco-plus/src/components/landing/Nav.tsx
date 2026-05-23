import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  Phone,
  List,
  X,
  ArrowRight,
  CaretDown,
  House,
  Key,
  Coins,
  Handshake,
  Receipt,
  BookOpen
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { images } from "@/lib/media";
import { RemoteImage } from "@/components/ui/remote-image";

interface NavLinkItem {
  label: string;
  href?: string;
  route?: boolean;
  dropdown?: { label: string; href: string; route?: boolean }[];
}

const links: NavLinkItem[] = [
  { label: "Home", href: "/", route: true },
  { label: "Projects", href: "/projects", route: true },
  {
    label: "Buy-Rent-Sell",
    dropdown: [
      { label: "Buy", href: "/buy", route: true },
      { label: "Rent", href: "/rent", route: true },
      { label: "Sell", href: "/sell", route: true },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Affiliate Program", href: "/resources/affiliate-program", route: true },
      { label: "Tax Changes", href: "/resources/tax-changes", route: true },
      { label: "Insights", href: "/resources/insights", route: true },
    ],
  },
  { label: "About", href: "/about", route: true },
  { label: "Contact", href: "/contact", route: true },
];

const megaMenuData = {
  "Buy-Rent-Sell": {
    featured: {
      title: "Signature Living",
      description: "Explore our collection of award-winning developments across prime Accra locations.",
      cta: "View All Projects",
      href: "/projects",
      image: images.homepage
    },
    items: [
      {
        label: "Buy",
        href: "/buy",
        description: "Explore luxury residences for sale with flexible payment options.",
        icon: House
      },
      {
        label: "Rent",
        href: "/rent",
        description: "Executive suites, serviced apartments, and long-term leasing.",
        icon: Key
      },
      {
        label: "Sell",
        href: "/sell",
        description: "Brokerage solutions and professional valuation for your asset.",
        icon: Coins
      }
    ]
  },
  "Resources": {
    featured: {
      title: "Market Intelligence",
      description: "Stay ahead with expert reports, regulatory updates, and partner rewards.",
      cta: "Read Our Blog",
      href: "/resources/insights",
      image: images.address
    },
    items: [
      {
        label: "Affiliate Program",
        href: "/resources/affiliate-program",
        description: "Partner with Devtraco and earn signature referral commissions.",
        icon: Handshake
      },
      {
        label: "Tax Changes",
        href: "/resources/tax-changes",
        description: "Advisory on stamp duties, closing costs, and tax exemptions.",
        icon: Receipt
      },
      {
        label: "Insights",
        href: "/resources/insights",
        description: "Accra real estate market forecasts and investment perspectives.",
        icon: BookOpen
      }
    ]
  }
};

type MegaMenuKey = keyof typeof megaMenuData;

function FlipText({ label }: { label: string }) {
  return (
    <span className="relative block overflow-hidden select-none pointer-events-none">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-full">
        {label}
      </span>
      <span className="absolute left-0 top-0 block w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform translate-y-full group-hover:translate-y-0 text-primary">
        {label}
      </span>
    </span>
  );
}

function MegaMenuPanel({ menuKey }: { menuKey: MegaMenuKey }) {
  const menuInfo = megaMenuData[menuKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 right-0 top-full mt-1 z-50 w-full rounded-xl sm:rounded-2xl bg-foreground text-background border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden grid grid-cols-1 xl:grid-cols-12"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="xl:col-span-5 relative bg-muted p-5 sm:p-6 flex flex-col justify-between overflow-hidden group/feat min-h-[200px] sm:min-h-[240px] xl:min-h-[260px]">
        <div className="absolute inset-0 z-0">
          <RemoteImage
            src={menuInfo.featured.image}
            alt={menuInfo.featured.title}
            className="w-full h-full object-cover brightness-[0.45] group-hover/feat:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10">
          <span className="text-[9px] uppercase tracking-[0.25em] text-primary font-bold block mb-1">Featured</span>
          <h4 className="font-serif text-sm sm:text-base text-white leading-tight">{menuInfo.featured.title}</h4>
        </div>

        <div className="relative z-10 space-y-2 sm:space-y-3">
          <p className="text-[10px] sm:text-[11px] text-white/70 leading-relaxed line-clamp-3 sm:line-clamp-none">
            {menuInfo.featured.description}
          </p>
          <Link
            href={menuInfo.featured.href}
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-primary group-hover/feat:text-white transition-colors"
          >
            {menuInfo.featured.cta}
            <ArrowRight size={10} weight="bold" />
          </Link>
        </div>
      </div>

      <div className="xl:col-span-7 bg-background p-5 sm:p-6 flex flex-col justify-between">
        <div className="space-y-3 sm:space-y-4">
          <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold block">Quick Links</span>
          <div className="flex flex-col gap-1">
            {menuInfo.items.map((sub) => {
              const Icon = sub.icon;
              return (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="flex gap-3 sm:gap-4.5 p-2.5 sm:p-3 rounded-[4px] hover:bg-muted/50 sm:hover:scale-105 transition-all duration-200 group text-left border border-transparent hover:border-border/40"
                >
                  <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={16} weight="duotone" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors block">
                      <FlipText label={sub.label} />
                    </span>
                    <span className="text-[10px] text-muted-foreground leading-snug block">
                      {sub.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DesktopDropdown({
  item,
  isCapsule,
  isActive,
  onActivate,
}: {
  item: NavLinkItem;
  isCapsule: boolean;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <div onMouseEnter={onActivate}>
      <button
        aria-expanded={isActive}
        className={
          isCapsule
            ? "relative flex items-center gap-1 px-2.5 xl:px-3.5 py-[7px] text-xs xl:text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors group"
            : "relative flex items-center gap-1 px-3 xl:px-4 py-[9px] text-sm font-medium rounded-full text-white/85 hover:text-white hover:bg-white/10 transition-colors group"
        }
      >
        <FlipText label={item.label} />
        <CaretDown
          size={12}
          weight="bold"
          className={cn(
            "transition-transform duration-300 opacity-60 text-primary",
            isActive && "rotate-180"
          )}
        />
      </button>
    </div>
  );
}

function MobileDropdown({
  item,
  setOpen,
}: {
  item: NavLinkItem;
  setOpen: (open: boolean) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const menuInfo = megaMenuData[item.label as MegaMenuKey];

  return (
    <div className="w-full flex flex-col items-start">
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground hover:text-primary transition-colors flex items-center gap-2 py-1 text-left"
      >
        {item.label}
        <CaretDown
          size={22}
          weight="bold"
          className={cn(
            "transition-transform duration-300 shrink-0 opacity-60 text-primary sm:w-6 sm:h-6",
            expanded && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {expanded && menuInfo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full pl-3 sm:pl-4 overflow-hidden flex flex-col items-start gap-6.75 sm:gap-4 my-3 border-l border-primary/20"
          >
            {menuInfo.items.map((sub) => {
              const Icon = sub.icon;
              return (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={() => setOpen(false)}
                  className="flex gap-3 sm:gap-4 items-start w-full group py-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon size={14} weight="duotone" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="font-serif text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors block">
                      {sub.label}
                    </span>
                    <span className="text-[11px] text-muted-foreground leading-snug block">
                      {sub.description}
                    </span>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const linkClass = (scrolled: boolean) =>
  cn(
    "relative font-medium rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-500 group whitespace-nowrap",
    scrolled
      ? "px-2.5 xl:px-3.5 py-[7px] text-xs xl:text-[13px]"
      : "px-3 xl:px-4 py-[9px] text-sm"
  );

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey | null>(null);
  const [location] = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 80);
  });

  useEffect(() => {
    setOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "pt-2.5 pb-2.5 sm:pt-3 sm:pb-3 lg:pt-3.5 lg:pb-3.5" : "pt-3 pb-3 sm:pt-4 sm:pb-4 md:pt-5 md:pb-5 lg:pt-6 lg:pb-6"
        )}
      >
        <div
          data-nav-inner
          onMouseLeave={() => setActiveMegaMenu(null)}
          className={cn(
            "relative mx-auto flex items-center justify-between gap-2 sm:gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled
              ? "max-w-[1080px] w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] pl-3 pr-1.5 sm:pl-5 sm:pr-2 py-2 sm:py-[9px] rounded-full bg-foreground/85 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
              : "site-container site-gutter bg-transparent"
          )}
        >
          {scrolled && (
            <>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.06] to-transparent" />
              <span className="pointer-events-none absolute inset-x-6 sm:inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </>
          )}

          <Link href="/" className="relative z-10 shrink-0 flex items-center gap-2 pl-0 sm:pl-1 transition-all duration-500 min-w-0">
            <img
              src={images.logo}
              alt="Devtraco Plus"
              className={cn(
                "w-auto transition-all duration-500 max-w-[120px] sm:max-w-none brightness-0 invert",
                scrolled ? "h-7 sm:h-8 lg:h-[31px]" : "h-8 sm:h-10 md:h-11 lg:h-12"
              )}
            />
          </Link>

          <nav className="z-10 hidden lg:flex items-center gap-0.5 xl:gap-1 transition-all duration-500 min-w-0">
            <div
              className={cn(
                "flex items-center gap-0.5 xl:gap-1 transition-all duration-500 min-w-0",
                !scrolled && "px-1.5 xl:px-2 py-[7px] rounded-full bg-white/10 backdrop-blur-md"
              )}
            >
              {links.map((l) =>
                l.dropdown ? (
                  <DesktopDropdown
                    key={l.label}
                    item={l}
                    isCapsule={scrolled}
                    isActive={activeMegaMenu === (l.label as MegaMenuKey)}
                    onActivate={() => setActiveMegaMenu(l.label as MegaMenuKey)}
                  />
                ) : l.route ? (
                  <Link key={l.label} href={l.href!} className={linkClass(scrolled)}>
                    <FlipText label={l.label} />
                  </Link>
                ) : (
                  <a key={l.label} href={l.href!} className={linkClass(scrolled)}>
                    <FlipText label={l.label} />
                  </a>
                )
              )}
            </div>
          </nav>

          <div className="relative z-10 flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0">
            <a
              href="tel:+233270000004"
              className={cn(
                "items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-500",
                scrolled ? "hidden" : "hidden xl:flex"
              )}
            >
              <Phone size={16} weight="duotone" />
              <span className="whitespace-nowrap">+233 (0)27 000 0004</span>
            </a>

            <a
              href="/contact"
              className={cn(
                "group inline-flex items-center gap-1.5 sm:gap-2 font-semibold transition-all duration-500 rounded-full shrink-0",
                scrolled
                  ? "bg-primary text-white hover:bg-primary/90 pl-3 sm:pl-4 pr-1 sm:pr-1.5 py-[7px] text-xs xl:text-[13px]"
                  : "bg-white text-foreground hover:bg-primary hover:text-white pl-3 sm:pl-5 pr-1 sm:pr-2 py-2 sm:py-[9px] text-xs sm:text-sm shadow-sm"
              )}
            >
              <span className="hidden sm:inline">Get in Touch</span>
              <span className="sm:hidden">Contact</span>
              <span
                className={cn(
                  "rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 shrink-0",
                  scrolled ? "w-6 h-6 sm:w-[26px] sm:h-[26px] bg-white/15" : "w-7 h-7 sm:w-[31px] sm:h-[31px] bg-foreground/15"
                )}
              >
                <ArrowRight size={scrolled ? 11 : 13} weight="bold" />
              </span>
            </a>

            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full text-white cursor-pointer shrink-0"
            >
              <List size={scrolled ? 18 : 22} />
            </button>
          </div>

          <AnimatePresence>
            {activeMegaMenu && <MegaMenuPanel key={activeMegaMenu} menuKey={activeMegaMenu} />}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between site-gutter py-4 sm:py-5 border-b border-foreground/5 shrink-0">
              <img
                src={images.logo}
                alt="Devtraco Plus"
                className="h-8 sm:h-9 w-auto max-w-[140px]"
              />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="w-10 h-10 -mr-1 flex items-center justify-center cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-start gap-2.25 sm:gap-2 site-gutter py-8 sm:py-12 overflow-y-auto overscroll-contain">
              {links.map((l, i) => {
                const className =
                  "font-serif text-2xl sm:text-3xl md:text-4xl text-foreground hover:text-primary transition-colors py-1";
                const onClick = () => setOpen(false);

                if (l.dropdown) {
                  return (
                    <motion.div
                      key={l.label}
                      className="w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <MobileDropdown item={l} setOpen={setOpen} />
                    </motion.div>
                  );
                }

                return l.route ? (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link href={l.href!} onClick={onClick} className={className}>
                      {l.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={l.label}
                    href={l.href!}
                    onClick={onClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={className}
                  >
                    {l.label}
                  </motion.a>
                );
              })}
            </nav>
            <div className="site-gutter pb-8 sm:pb-10 pb-[max(2rem,env(safe-area-inset-bottom))] space-y-4 shrink-0">
              <a
                href="tel:+233270000004"
                className="flex items-center gap-3 text-sm sm:text-base text-foreground/80"
              >
                <Phone size={18} weight="duotone" />
                +233 (0)27 000 0004
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="group w-full inline-flex items-center justify-between pl-5 pr-2 py-3 rounded-full bg-foreground text-background text-sm font-semibold cursor-pointer"
              >
                Get in Touch
                <span className="w-8 h-8 rounded-full bg-background/15 flex items-center justify-center shrink-0">
                  <ArrowRight size={14} weight="bold" />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}