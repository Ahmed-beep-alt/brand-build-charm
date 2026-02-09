import { motion } from "framer-motion";
import { Layers, Eye, Zap, TrendingUp, Building, Award } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Fragmented Systems & Data Silos",
    desc: "We deliver a unified Odoo ERP platform with seamless cross-module integration and a single source of truth.",
  },
  {
    icon: Eye,
    title: "Limited Operational Visibility",
    desc: "We implement real-time dashboards, KPIs, and reporting frameworks tailored to management and operational teams.",
  },
  {
    icon: Zap,
    title: "Manual, Policy-Heavy Processes",
    desc: "We automate workflows, approvals, and business rules aligned with organizational policies and industry practices.",
  },
  {
    icon: TrendingUp,
    title: "Inability to Scale with Growth",
    desc: "Our Odoo ERP solutions are designed with scalable architecture to support growth across users, locations, and regions.",
  },
  {
    icon: Building,
    title: "Industry-Specific Complexity",
    desc: "We customize Odoo ERP to match industry-specific processes — without compromising system stability.",
  },
  {
    icon: Award,
    title: "Lack of ERP Expertise & Direction",
    desc: "As an Odoo Silver Partner, we provide end-to-end ERP leadership — from solution design to long-term optimization.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Businesses Choose Brain Station 23
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We solve the real challenges that hold businesses back when their ERP systems can no longer support operational complexity, scale, or industry-specific requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
