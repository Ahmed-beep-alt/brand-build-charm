import { motion } from "framer-motion";
import { Layers, Eye, Zap, TrendingUp, Building, Award } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Fragmented Systems & Data Silos",
    desc: "We deliver a unified Odoo ERP platform with seamless cross-module integration and a single source of truth.",
    gradient: "from-primary/15 to-teal-50",
    iconBg: "bg-primary",
  },
  {
    icon: Eye,
    title: "Limited Operational Visibility",
    desc: "We implement real-time dashboards, KPIs, and reporting frameworks tailored to management and operational teams.",
    gradient: "from-blue-100 to-sky-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: Zap,
    title: "Manual, Policy-Heavy Processes",
    desc: "We automate workflows, approvals, and business rules aligned with organizational policies and industry practices.",
    gradient: "from-accent/15 to-amber-50",
    iconBg: "bg-accent",
  },
  {
    icon: TrendingUp,
    title: "Inability to Scale with Growth",
    desc: "Our Odoo ERP solutions are designed with scalable architecture to support growth across users, locations, and regions.",
    gradient: "from-emerald-100 to-teal-50",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Building,
    title: "Industry-Specific Complexity",
    desc: "We customize Odoo ERP to match industry-specific processes — without compromising system stability.",
    gradient: "from-violet-100 to-purple-50",
    iconBg: "bg-violet-500",
  },
  {
    icon: Award,
    title: "Lack of ERP Expertise & Direction",
    desc: "As an Odoo Silver Partner, we provide end-to-end ERP leadership — from solution design to long-term optimization.",
    gradient: "from-rose-100 to-pink-50",
    iconBg: "bg-rose-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-background to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Businesses Choose Brain Station 23
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We solve the real challenges that hold businesses back when their ERP systems can no longer support operational complexity, scale, or industry-specific requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${r.gradient} border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${r.iconBg} flex items-center justify-center mb-4 shadow-lg`}>
                <r.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
