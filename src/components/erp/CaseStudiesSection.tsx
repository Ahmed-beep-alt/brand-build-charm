import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, ArrowRight, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Bangladesh Special Economic Zone (BSEZ)",
    industry: "Economic Zone Management",
    accentColor: "bg-primary",
    accentText: "text-primary",
    gradientBg: "from-primary/5 via-teal-50/50 to-background",
    challenge:
      "BSEZ operated with fragmented manual processes across finance, procurement, HR, and zone management — leading to data silos, delayed reporting, and operational bottlenecks.",
    solution:
      "Brain Station 23 implemented a fully customized Odoo ERP covering finance, HR, procurement, inventory, and zone-specific compliance workflows with real-time dashboards.",
    modules: ["Finance & Accounting", "HR & Payroll", "Procurement", "Inventory", "Project Management"],
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
    gradientBg: "from-accent/5 via-orange-50/50 to-background",
    challenge:
      "Ispahani's multi-location manufacturing operations relied on disconnected legacy systems, making production planning, costing, and inventory control error-prone and slow.",
    solution:
      "Brain Station 23 deployed Odoo ERP with multi-level BoM, MRP, integrated costing, and warehouse management — connecting production floors to the boardroom.",
    modules: ["Manufacturing & MRP", "Inventory", "Finance", "Purchase", "Quality Control"],
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
    gradientBg: "from-blue-50/50 via-sky-50/30 to-background",
    challenge:
      "Complex import/export processes, LC tracking, and multi-vendor procurement created delays and compliance risks across Sea Resources Group's operations.",
    solution:
      "Brain Station 23 implemented Odoo with custom LC management, foreign procurement workflows, vendor scoring, and integrated logistics tracking.",
    modules: ["Purchase & Vendor Management", "Inventory", "Finance", "Sales & CRM"],
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

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

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
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ERP Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world ERP transformations delivered by Brain Station 23 for leading enterprises.
          </p>
        </motion.div>

        {/* Slider controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`relative h-2 rounded-full transition-all duration-500 ${
                  i === current ? "w-10 bg-primary" : "w-6 bg-border hover:bg-primary/30"
                }`}
              >
                {i === current && !isPaused && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/50"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`progress-${current}`}
                  />
                )}
              </button>
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
          className="relative min-h-[520px]"
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
              className={`bg-gradient-to-br ${cs.gradientBg} rounded-3xl border border-border overflow-hidden shadow-xl`}
            >
              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${cs.accentColor} flex items-center justify-center shadow-xl`}>
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl lg:text-2xl text-foreground">{cs.title}</h3>
                    <span className={`text-sm font-medium ${cs.accentText}`}>{cs.industry}</span>
                  </div>
                </div>

                {/* Metrics - hero highlight */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cs.metrics.map((metric, mi) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + mi * 0.12 }}
                      className="relative p-5 rounded-2xl bg-card border border-border shadow-md overflow-hidden group"
                    >
                      <div className={`absolute top-0 left-0 w-1 h-full ${cs.accentColor}`} />
                      <div className={`text-3xl lg:text-4xl font-extrabold ${cs.accentText} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-5 rounded-2xl bg-destructive/5 border border-destructive/15"
                  >
                    <h4 className="text-sm font-bold text-destructive mb-3 uppercase tracking-wide">⚡ Business Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className={`p-5 rounded-2xl border`}
                    style={{ background: "hsl(var(--primary) / 0.04)", borderColor: "hsl(var(--primary) / 0.15)" }}
                  >
                    <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">🚀 Our Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </motion.div>
                </div>

                {/* Modules used */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {cs.modules.map((m) => (
                    <span key={m} className="px-4 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-semibold text-primary shadow-sm">
                      {m}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-8 py-3 text-base">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
