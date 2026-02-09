import { motion } from "framer-motion";
import { Building, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Bangladesh Special Economic Zone (BSEZ)",
    industry: "Economic Zone Management",
    challenge:
      "BSEZ operated with fragmented manual processes across finance, procurement, HR, and zone management — leading to data silos, delayed reporting, and operational bottlenecks.",
    solution:
      "Brain Station 23 implemented a fully customized Odoo ERP covering finance, HR, procurement, inventory, and zone-specific compliance workflows with real-time dashboards.",
    modules: ["Finance & Accounting", "HR & Payroll", "Procurement", "Inventory", "Project Management"],
    metrics: ["60% reduction in manual processing time", "Real-time financial visibility", "Unified data across 5+ departments"],
  },
  {
    title: "Ispahani Group – Manufacturing ERP",
    industry: "Manufacturing & FMCG",
    challenge:
      "Ispahani's multi-location manufacturing operations relied on disconnected legacy systems, making production planning, costing, and inventory control error-prone and slow.",
    solution:
      "Brain Station 23 deployed Odoo ERP with multi-level BoM, MRP, integrated costing, and warehouse management — connecting production floors to the boardroom.",
    modules: ["Manufacturing & MRP", "Inventory", "Finance", "Purchase", "Quality Control"],
    metrics: ["45% improvement in production planning accuracy", "Centralized multi-warehouse management", "Automated cost tracking across product lines"],
  },
  {
    title: "Sea Resources Group – Supply Chain",
    industry: "Logistics & Supply Chain",
    challenge:
      "Complex import/export processes, LC tracking, and multi-vendor procurement created delays and compliance risks across Sea Resources Group's operations.",
    solution:
      "Brain Station 23 implemented Odoo with custom LC management, foreign procurement workflows, vendor scoring, and integrated logistics tracking.",
    modules: ["Purchase & Vendor Management", "Inventory", "Finance", "Sales & CRM"],
    metrics: ["50% faster procurement cycle time", "Automated LC and import tracking", "Enhanced vendor performance monitoring"],
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ERP Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world ERP transformations delivered by Brain Station 23 for leading enterprises.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{cs.title}</h3>
                    <span className="text-xs text-muted-foreground">{cs.industry}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold text-destructive mb-2">Business Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Brain Station 23 Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cs.modules.map((m) => (
                    <span key={m} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  {cs.metrics.map((metric) => (
                    <div key={metric} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                      <TrendingUp className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
