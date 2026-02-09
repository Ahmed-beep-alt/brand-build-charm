import { motion } from "framer-motion";
import {
  Calculator, Users, ShoppingCart, Warehouse,
  Factory, UserCheck, FolderKanban, ShieldCheck, BarChart3,
} from "lucide-react";

const modules = [
  {
    icon: Calculator,
    title: "Finance & Accounting",
    features: [
      "Automated accounting, reconciliation, and reporting",
      "Integrated landed cost, shipping, and production costing",
      "Real-time financial visibility and compliance readiness",
    ],
  },
  {
    icon: Users,
    title: "Sales & CRM",
    features: [
      "Policy-based pricing and discount control",
      "Approval-driven quotation and sales workflows",
      "End-to-end integration with inventory, logistics, and finance",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Purchase & Vendor Management",
    features: [
      "Separate workflows for local and foreign procurement",
      "Letter of Credit (LC) and import process tracking",
      "Vendor performance monitoring and cost control",
    ],
  },
  {
    icon: Warehouse,
    title: "Inventory & Warehouse",
    features: [
      "Real-time stock tracking across multiple warehouses",
      "Lot, batch, and serial number traceability",
      "Automated stock valuation and movement control",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & MRP",
    features: [
      "Multi-level BoM and production planning",
      "Work center scheduling and capacity optimization",
      "Accurate production cost and material tracking",
    ],
  },
  {
    icon: UserCheck,
    title: "Human Resources & Payroll",
    features: [
      "Automated attendance, leave, and payroll processing",
      "Policy-based salary structures and approvals",
      "Seamless HR integration with finance and operations",
    ],
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    features: [
      "Task-based project execution and budgeting",
      "Resource allocation and milestone tracking",
      "Real-time project profitability insights",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    features: [
      "Automated quality checks across procurement and production",
      "Compliance documentation and audit traceability",
      "Standardized approval workflows",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & BI",
    features: [
      "Real-time dashboards and KPI monitoring",
      "Cross-module analytics for management decisions",
      "Single source of truth across the organization",
    ],
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            ERP Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industry-Focused ERP Automation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each module is implemented with real operational challenges in mind — ensuring automation, accuracy, and scalability.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <mod.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{mod.title}</h3>
              </div>
              <ul className="space-y-2">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
