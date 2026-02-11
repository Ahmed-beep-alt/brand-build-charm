import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator, Users, ShoppingCart, Warehouse,
  Factory, UserCheck, FolderKanban, ShieldCheck, BarChart3,
  ChevronDown,
} from "lucide-react";

const modules = [
  {
    icon: Calculator,
    title: "Finance & Accounting",
    color: "from-primary/20 to-teal-light",
    accent: "bg-primary",
    features: [
      "Automated accounting, reconciliation, and reporting",
      "Integrated landed cost, shipping, and production costing",
      "Real-time financial visibility and compliance readiness",
    ],
  },
  {
    icon: Users,
    title: "Sales & CRM",
    color: "from-accent/20 to-orange-100",
    accent: "bg-accent",
    features: [
      "Policy-based pricing and discount control",
      "Approval-driven quotation and sales workflows",
      "End-to-end integration with inventory, logistics, and finance",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Purchase & Vendor Management",
    color: "from-primary/15 to-sky-100",
    accent: "bg-primary",
    features: [
      "Separate workflows for local and foreign procurement",
      "Letter of Credit (LC) and import process tracking",
      "Vendor performance monitoring and cost control",
    ],
  },
  {
    icon: Warehouse,
    title: "Inventory & Warehouse",
    color: "from-emerald-100 to-teal-50",
    accent: "bg-emerald-500",
    features: [
      "Real-time stock tracking across multiple warehouses",
      "Lot, batch, and serial number traceability",
      "Automated stock valuation and movement control",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & MRP",
    color: "from-accent/15 to-amber-50",
    accent: "bg-accent",
    features: [
      "Multi-level BoM and production planning",
      "Work center scheduling and capacity optimization",
      "Accurate production cost and material tracking",
    ],
  },
  {
    icon: UserCheck,
    title: "Human Resources & Payroll",
    color: "from-violet-100 to-purple-50",
    accent: "bg-violet-500",
    features: [
      "Automated attendance, leave, and payroll processing",
      "Policy-based salary structures and approvals",
      "Seamless HR integration with finance and operations",
    ],
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    color: "from-blue-100 to-sky-50",
    accent: "bg-blue-500",
    features: [
      "Task-based project execution and budgeting",
      "Resource allocation and milestone tracking",
      "Real-time project profitability insights",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    color: "from-rose-100 to-pink-50",
    accent: "bg-rose-500",
    features: [
      "Automated quality checks across procurement and production",
      "Compliance documentation and audit traceability",
      "Standardized approval workflows",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & BI",
    color: "from-primary/20 to-cyan-50",
    accent: "bg-primary",
    features: [
      "Real-time dashboards and KPI monitoring",
      "Cross-module analytics for management decisions",
      "Single source of truth across the organization",
    ],
  },
];

const ModulesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="modules" className="py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            ERP Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industry-Focused ERP Automation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each module is implemented with real operational challenges in mind — ensuring automation, accuracy, and scalability.
          </p>
        </motion.div>

        <div className="space-y-3">
          {modules.map((mod, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left ${
                    isOpen
                      ? "bg-gradient-to-r " + mod.color + " border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-card border-border hover:border-primary/20 hover:shadow-md"
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl ${isOpen ? mod.accent : "bg-primary/10"} flex items-center justify-center shrink-0 transition-colors duration-300`}>
                    <mod.icon className={`w-5 h-5 ${isOpen ? "text-white" : "text-primary"}`} />
                  </div>
                  <h3 className="font-semibold text-foreground flex-1">{mod.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid sm:grid-cols-3 gap-3 px-2 pt-3 pb-1">
                        {mod.features.map((f, fi) => (
                          <motion.div
                            key={f}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: fi * 0.08 }}
                            className="p-4 rounded-xl bg-card border border-border shadow-sm"
                          >
                            <div className="flex items-start gap-2">
                              <span className={`w-2 h-2 rounded-full ${mod.accent} mt-1.5 shrink-0`} />
                              <span className="text-sm text-muted-foreground leading-relaxed">{f}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
