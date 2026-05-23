import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Phone,
  EnvelopeSimple,
  CheckCircle,
  MapPin,
} from "@phosphor-icons/react";

const projects = [
  "Avant Garde · Labone",
  "Arlo · Cantonments",
  "The Address · Roman Ridge",
  "The Pelican · Cantonments",
  "Forte · Airport Residential",
  "Henrietta's · Cantonments",
  "Not sure yet — advise me",
];

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 site-gutter bg-background overflow-hidden"
    >
      {/* warm gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.15)_0%,_transparent_55%)]"
      />

      <div className="max-w-screen-2xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* LEFT — Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <span className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-6 block">
                Schedule a Private Viewing
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground mb-8">
                Let's find you the <br />
                <span className="italic text-primary font-light">
                  right address
                </span>{" "}
                in Accra.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[52ch] mb-10">
                Tell us a little about what you're looking for. A senior member
                of our team will reach out within 24 hours to arrange a private
                viewing — in person in Accra, or live on a video walkthrough if
                you're abroad.
              </p>
            </div>

            <div className="space-y-5 pt-8 border-t border-foreground/10">
              <a
                href="tel:+233270000004"
                className="group flex items-center gap-4"
              >
                <span className="w-11 h-11 rounded-full bg-foreground/[0.05] group-hover:bg-primary/15 flex items-center justify-center transition-colors">
                  <Phone size={18} weight="duotone" className="text-primary" />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground block mb-0.5">
                    Speak with us
                  </span>
                  <span className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    +233 (0)27 000 0004
                  </span>
                </div>
              </a>
              <a
                href="mailto:hello@devtracoplus.com"
                className="group flex items-center gap-4"
              >
                <span className="w-11 h-11 rounded-full bg-foreground/[0.05] group-hover:bg-primary/15 flex items-center justify-center transition-colors">
                  <EnvelopeSimple
                    size={18}
                    weight="duotone"
                    className="text-primary"
                  />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground block mb-0.5">
                    Email
                  </span>
                  <span className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    hello@devtracoplus.com
                  </span>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-foreground/[0.05] flex items-center justify-center">
                  <MapPin size={18} weight="duotone" className="text-primary" />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground block mb-0.5">
                    Sales Gallery
                  </span>
                  <span className="font-serif text-xl text-foreground">
                    Cantonments, Accra · Ghana
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
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
            <div className="relative bg-foreground text-background p-8 md:p-10 lg:p-12 rounded-md overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
              {/* gold top accent */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

              {!submitted ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/45">
                      Private Inquiry · Confidential
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                      Reply &lt; 24h
                    </span>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="First name" name="firstName" required />
                      <Field label="Last name" name="lastName" required />
                    </div>
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />
                    <Field label="Phone" name="phone" type="tel" />
                    <SelectField
                      label="Project of interest"
                      name="project"
                      options={projects}
                    />
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.22em] text-white/55 block mb-2">
                        Anything we should know
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Budget, timing, specific requirements..."
                        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2.5 text-white placeholder:text-white/30 text-sm transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full mt-6 inline-flex items-center justify-between pl-6 pr-2 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all"
                    >
                      Request a Viewing
                      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight size={14} weight="bold" />
                      </span>
                    </button>
                    <p className="text-[11px] text-white/40 leading-relaxed pt-2">
                      By submitting, you agree to be contacted by Devtraco
                      Plus. We never share your details with third parties.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-12 text-center"
                >
                  <CheckCircle
                    size={56}
                    weight="duotone"
                    className="text-primary mx-auto mb-6"
                  />
                  <h3 className="font-serif text-3xl text-white mb-3">
                    Thank you.
                  </h3>
                  <p className="text-white/65 max-w-[36ch] mx-auto leading-relaxed">
                    A senior member of our team will be in touch within 24
                    hours to arrange your private viewing.
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

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.22em] text-white/55 block mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-b border-white/15 focus:border-primary outline-none py-2.5 text-white text-sm transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='none' stroke='%23B68D52' stroke-width='1.5' d='M1 1.5l5 5 5-5'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.25rem center",
        }}
      >
        <option value="" disabled className="bg-foreground text-white/40">
          Select a project
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-foreground text-white">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
