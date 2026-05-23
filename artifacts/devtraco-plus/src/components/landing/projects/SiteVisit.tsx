import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  VideoCamera,
} from "@phosphor-icons/react";

const projectChoices = [
  "Avant Garde",
  "Arlo",
  "The Address",
  "The Pelican",
  "Forte",
  "Not sure — advise me",
];

const formats = [
  {
    id: "in-person",
    icon: Users,
    label: "In-person",
    sub: "Visit on-site in Accra",
  },
  {
    id: "virtual",
    icon: VideoCamera,
    label: "Live virtual tour",
    sub: "We walk you through on video",
  },
];

export default function SiteVisit() {
  const [submitted, setSubmitted] = useState(false);
  const [format, setFormat] = useState("in-person");
  const [project, setProject] = useState(projectChoices[0]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 site-gutter bg-foreground text-background overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary))_0%,_transparent_55%)]"
      />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary">
                  Schedule a Site Visit
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-white mb-8">
                See your future <br />
                <span className="italic font-light text-primary">
                  address — in person.
                </span>
              </h2>
              <p className="text-lg text-white/65 leading-relaxed max-w-[52ch] mb-12">
                Tell us which residence has caught your eye. A senior member
                of our team will host you on-site, walk you through every
                finish, and answer every question — without pressure.
              </p>
            </div>

            <ul className="space-y-5 pt-10 border-t border-white/10">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0">
                  <Calendar
                    size={16}
                    weight="duotone"
                    className="text-primary"
                  />
                </span>
                <div>
                  <span className="block font-serif text-lg text-white leading-snug">
                    Available daily, 09:00–18:00 GMT
                  </span>
                  <span className="text-sm text-white/50">
                    Evenings & weekends by request
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0">
                  <Users size={16} weight="duotone" className="text-primary" />
                </span>
                <div>
                  <span className="block font-serif text-lg text-white leading-snug">
                    Hosted by senior sales
                  </span>
                  <span className="text-sm text-white/50">
                    Never an intern. Never a hand-off.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0">
                  <VideoCamera
                    size={16}
                    weight="duotone"
                    className="text-primary"
                  />
                </span>
                <div>
                  <span className="block font-serif text-lg text-white leading-snug">
                    Live virtual tour available
                  </span>
                  <span className="text-sm text-white/50">
                    Recorded walkthroughs sent on request
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6"
          >
            <div className="relative bg-white/[0.04] border border-white/10 backdrop-blur-sm p-8 md:p-10 lg:p-12 rounded-md overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              {!submitted ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/45">
                      Booking Request · Confidential
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                      Reply &lt; 24h
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project pills */}
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.22em] text-white/55 block mb-3">
                        Which residence
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectChoices.map((p) => {
                          const active = project === p;
                          return (
                            <button
                              key={p}
                              type="button"
                              onClick={() => setProject(p)}
                              className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all border ${
                                active
                                  ? "bg-primary border-primary text-white"
                                  : "bg-transparent border-white/15 text-white/70 hover:border-primary/50 hover:text-white"
                              }`}
                            >
                              {p}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Format */}
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.22em] text-white/55 block mb-3">
                        Visit format
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {formats.map((f) => {
                          const active = format === f.id;
                          const Icon = f.icon;
                          return (
                            <button
                              key={f.id}
                              type="button"
                              onClick={() => setFormat(f.id)}
                              className={`text-left p-4 rounded-md border transition-all ${
                                active
                                  ? "bg-primary/15 border-primary"
                                  : "bg-transparent border-white/15 hover:border-primary/40"
                              }`}
                            >
                              <Icon
                                size={18}
                                weight="duotone"
                                className="text-primary mb-2"
                              />
                              <span className="block text-sm font-semibold text-white leading-tight">
                                {f.label}
                              </span>
                              <span className="block text-[11px] text-white/50 mt-0.5">
                                {f.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="Full name" name="fullName" required />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="Phone" name="phone" type="tel" />
                      <Field
                        label="Preferred date"
                        name="preferredDate"
                        type="date"
                      />
                    </div>

                    <input type="hidden" name="project" value={project} />
                    <input type="hidden" name="format" value={format} />

                    <button
                      type="submit"
                      className="group w-full mt-4 inline-flex items-center justify-between pl-6 pr-2 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all"
                    >
                      Confirm Site Visit
                      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight size={14} weight="bold" />
                      </span>
                    </button>

                    <p className="text-[11px] text-white/40 leading-relaxed pt-1">
                      We never share your details. Cancel or reschedule any
                      time.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 text-center"
                >
                  <CheckCircle
                    size={56}
                    weight="duotone"
                    className="text-primary mx-auto mb-6"
                  />
                  <h3 className="font-serif text-3xl text-white mb-3">
                    Visit requested.
                  </h3>
                  <p className="text-white/65 max-w-[40ch] mx-auto leading-relaxed">
                    We've noted your interest in{" "}
                    <span className="text-primary">{project}</span>. A senior
                    member of our team will confirm your visit within 24
                    hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.22em] text-white/55 block mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2.5 text-white placeholder:text-white/30 text-sm transition-colors"
      />
    </div>
  );
}
