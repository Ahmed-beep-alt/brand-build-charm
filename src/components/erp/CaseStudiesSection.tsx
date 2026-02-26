import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Bangladesh Special Economic Zone (BSEZ)",
    industry: "Economic Zone Management",
    accentColor: "bg-primary",
    accentText: "text-primary",
    challenge:
      "BSEZ operated with fragmented manual processes across finance, procurement, HR, and zone management — leading to data silos, delayed reporting, and operational bottlenecks.",
    solution:
      "Brain Station 23 implemented a fully customized Odoo ERP covering finance, HR, procurement, inventory, and zone-specific compliance workflows with real-time dashboards.",
    modules: ["Finance & Accounting", "HR & Payroll", "Procurement", "Inventory", "Project Management"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "60%", label: "Reduction in manual processing time" },
      { value: "5+", label: "Departments unified with real-time data" },
      { value: "100%", label: "Financial visibility achieved" },
    ],
  },
  {
    title: "Ispahani Group – Manufacturing ERP",
    industry: "Manufacturing & FMCG",
    accentColor: "bg-accent",
    accentText: "text-accent",
    challenge:
      "Ispahani's multi-location manufacturing operations relied on disconnected legacy systems, making production planning, costing, and inventory control error-prone and slow.",
    solution:
      "Brain Station 23 deployed Odoo ERP with multi-level BoM, MRP, integrated costing, and warehouse management — connecting production floors to the boardroom.",
    modules: ["Manufacturing & MRP", "Inventory", "Finance", "Purchase", "Quality Control"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "45%", label: "Improvement in production planning accuracy" },
      { value: "3x", label: "Faster cost tracking across product lines" },
      { value: "100%", label: "Centralized multi-warehouse management" },
    ],
  },
  {
    title: "Sea Resources Group – Supply Chain",
    industry: "Logistics & Supply Chain",
    accentColor: "bg-blue-500",
    accentText: "text-blue-500",
    challenge:
      "Complex import/export processes, LC tracking, and multi-vendor procurement created delays and compliance risks across Sea Resources Group's operations.",
    solution:
      "Brain Station 23 implemented Odoo with custom LC management, foreign procurement workflows, vendor scoring, and integrated logistics tracking.",
    modules: ["Purchase & Vendor Management", "Inventory", "Finance", "Sales & CRM"],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "50%", label: "Faster procurement cycle time" },
      { value: "100%", label: "Automated LC and import tracking" },
      { value: "2x", label: "Enhanced vendor performance monitoring" },
    ],
  },
];

const CaseStudiesSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % caseStudies.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + caseStudies.length) % caseStudies.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const cs = caseStudies[current];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-muted/40 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Use Cases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world ERP transformations delivered by Brain Station 23 for leading enterprises.
          </p>
        </motion.div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`relative h-2 rounded-full transition-all duration-500 ${
                  i === current ? "w-10 bg-primary" : "w-6 bg-border hover:bg-primary/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-border bg-card hover:bg-primary/10 hover:border-primary/30 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-border bg-card hover:bg-primary/10 hover:border-primary/30 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Slide content */}
        <div
          className="relative min-h-[480px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image side */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${cs.accentColor} text-white text-xs font-semibold`}>
                      <Building className="w-3.5 h-3.5" />
                      {cs.industry}
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 lg:p-10">
                  <h3 className="font-bold text-xl lg:text-2xl text-foreground mb-6">{cs.title}</h3>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {cs.metrics.map((metric, mi) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + mi * 0.12 }}
                        className="text-center p-3 rounded-xl bg-muted/50 border border-border"
                      >
                        <div className={`text-2xl lg:text-3xl font-extrabold ${cs.accentText}`}>
                          {metric.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-tight mt-1">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/15">
                      <h4 className="text-xs font-bold text-destructive mb-2 uppercase tracking-wide">⚡ Challenge</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="p-4 rounded-xl border" style={{ background: "hsl(var(--primary) / 0.04)", borderColor: "hsl(var(--primary) / 0.15)" }}>
                      <h4 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">🚀 Solution</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Modules */}
                  <div className="flex flex-wrap gap-2">
                    {cs.modules.map((m) => (
                      <span key={m} className="px-3 py-1 rounded-full bg-muted/50 border border-primary/20 text-xs font-semibold text-primary">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-8 py-3 text-base">
            View All Use Cases <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
