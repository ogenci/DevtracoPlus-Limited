import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Info, Calculator, FileText, CheckCircle } from "@phosphor-icons/react";
import Nav from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";
import { images } from "@/lib/media";

// FAQ data
const faqs = [
  {
    q: "Is there a Stamp Duty on property transactions in Ghana?",
    a: "Yes. Stamp Duty is charged on the transfer document (conveyance) under the Stamp Duty Act. It is typically calculated at 0.5% to 1.0% of the total purchase price depending on whether the purchaser is a resident or non-resident, and the value of the property."
  },
  {
    q: "Do diaspora or foreign buyers pay higher taxes?",
    a: "Under current regulations, there is no direct discriminatory tax rate on foreigners buying property. However, non-resident status can impact withholding tax rates on rental income (typically 15% flat rate withholding tax on rent paid to non-resident owners)."
  },
  {
    q: "Is Value Added Tax (VAT) charged on residential purchases?",
    a: "Generally, sales of residential properties are exempt from standard VAT (currently 15%) unless they are commercial real estate holdings or form part of secondary serviced estates. Consult with our legal desk to verify your specific contract's VAT exemption."
  },
  {
    q: "What are the ongoing yearly property taxes?",
    a: "Property rate is an annual tax paid to local municipal assemblies (e.g. Accra Metropolitan Assembly). The rate is based on the rateable valuation of the property and is relatively nominal compared to Western municipal property taxes."
  }
];

export default function TaxChanges() {
  const [purchasePrice, setPurchasePrice] = useState<number>(250000);
  const [isResident, setIsResident] = useState<boolean>(true);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Compute estimates:
  // Stamp duty: 0.5% for resident, 1% for non-resident
  const stampDutyRate = isResident ? 0.005 : 0.01;
  const stampDuty = purchasePrice * stampDutyRate;
  
  // Registration fees: 0.5%
  const registrationFee = purchasePrice * 0.005;

  // Legal / Conveyance estimation: flat $1,500
  const legalFee = 1500;

  const totalFees = stampDuty + registrationFee + legalFee;

  return (
    <div className="relative bg-background min-h-screen text-foreground overflow-hidden selection:bg-primary/20">
      <Nav />

      <main className="pb-24">
        <section className="relative site-gutter pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 lg:pt-56 lg:pb-36 mb-20 overflow-hidden flex items-center min-h-[60vh] md:min-h-[70vh] bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={images.address}
              alt="Tax changes and closing costs"
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
                Investment Intelligence
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-8">
              Tax Guide & <br />
              Closing <span className="italic font-light text-primary">Costs</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-[50ch]">
              A premium analysis of real estate taxation, stamp duties, and regulatory transaction fees in Ghana.
            </p>
          </div>
        </section>

        {/* Calculator section */}
        <section className="site-gutter mb-24 relative z-10">
          <div className="max-w-screen-2xl mx-auto bg-card border border-border rounded-md p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-semibold block mb-2">Estimate Expenses</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground">Transaction Cost Estimator</h2>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Adjust the property purchase price and residency status to project closing costs and municipal duties.
                  </p>
                </div>

                {/* Residency selection */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-3 font-semibold">Residency Status</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsResident(true)}
                      className={`px-6 py-2.5 rounded-md text-xs font-semibold tracking-wider transition-all cursor-pointer border ${
                        isResident
                          ? "bg-primary border-primary text-white"
                          : "bg-background border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      Ghanaian Resident
                    </button>
                    <button
                      onClick={() => setIsResident(false)}
                      className={`px-6 py-2.5 rounded-md text-xs font-semibold tracking-wider transition-all cursor-pointer border ${
                        !isResident
                          ? "bg-primary border-primary text-white"
                          : "bg-background border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      Non-Resident / Diaspora
                    </button>
                  </div>
                </div>

                {/* Slider */}
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 font-semibold">
                    <span>Purchase Price</span>
                    <span className="text-foreground font-serif text-base">${purchasePrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="80000"
                    max="1000000"
                    step="10000"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="w-full accent-primary bg-muted rounded-lg appearance-none cursor-pointer h-1.5"
                  />
                  <div className="flex justify-between text-[9px] text-muted-foreground/60 mt-1">
                    <span>$80k</span>
                    <span>$500k</span>
                    <span>$1M</span>
                  </div>
                </div>
              </div>

              {/* Outputs display */}
              <div className="lg:col-span-5 bg-background border border-border p-8 rounded-md space-y-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground block font-semibold">Breakdown of Projected Fees</span>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-border/60 pb-3">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <FileText size={14} />
                      Stamp Duty ({isResident ? "0.5%" : "1.0%"})
                    </span>
                    <span className="font-semibold text-foreground">${stampDuty.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border/60 pb-3">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <FileText size={14} />
                      Title Registration (0.5%)
                    </span>
                    <span className="font-semibold text-foreground">${registrationFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-border/60 pb-3">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <FileText size={14} />
                      Legal Conveyancing Fee (Est.)
                    </span>
                    <span className="font-semibold text-foreground">${legalFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-foreground font-semibold">Total Closing Cost</span>
                    <span className="font-serif text-2xl font-bold text-primary">${totalFees.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-md p-4 text-xs leading-relaxed text-muted-foreground border border-primary/10 flex gap-2">
                  <Info size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>These figures are advisory estimates. Exact registry fees are assessed dynamically by the Lands Commission at the time of title registration.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="site-gutter mb-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-border rounded-md bg-card overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left font-serif text-lg md:text-xl text-foreground cursor-pointer"
                    >
                      {faq.q}
                      <span className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
                        <ArrowRight size={18} />
                      </span>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0 }}
                      className="overflow-hidden"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="site-gutter">
          <div className="max-w-3xl mx-auto bg-foreground text-background p-8 md:p-12 rounded-md text-center relative shadow-2xl overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
              <CheckCircle size={24} weight="duotone" />
            </div>
            <h3 className="font-serif text-3xl text-white mb-4">Request a Legal Advisory Session</h3>
            <p className="text-white/60 max-w-[45ch] mx-auto leading-relaxed text-sm mb-8">
              Verify tax exemptions, capital structure rules, and currency conversion paths with our dedicated legal advisors.
            </p>
            <a
              href="/buy"
              className="group inline-flex items-center gap-4 pl-6 pr-2 py-3 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer"
            >
              Contact Legal Desk
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={14} weight="bold" />
              </span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}