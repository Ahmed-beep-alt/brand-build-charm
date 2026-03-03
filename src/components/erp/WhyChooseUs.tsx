import { motion } from "framer-motion";
import { Layers, Eye, Zap, TrendingUp, Building, Award } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Your Data Lives in 10 Different Places",
    desc: "Sales in one tool, inventory in another, finance in a spreadsheet. We unify everything into one Odoo platform — so every team works from the same real-time data.",
    gradient: "from-primary/15 to-teal-50",
    iconBg: "bg-primary",
  },
  {
    icon: Eye,
    title: "You Can't See What's Actually Happening",
    desc: "If your leadership needs to ask for reports instead of seeing live dashboards, you're making decisions on outdated data. We build real-time KPIs and operational visibility into every module.",
    gradient: "from-blue-100 to-sky-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: Zap,
    title: "Too Many Manual Approvals & Workarounds",
    desc: "If your team spends more time on approvals and follow-ups than actual work, your processes need automation. We digitize workflows, routing, and business rules — aligned to your company policies.",
    gradient: "from-accent/15 to-amber-50",
    iconBg: "bg-accent",
  },
  {
    icon: TrendingUp,
    title: "Growth is Breaking Your Systems",
    desc: "What worked for 50 employees doesn't work for 500. We architect Odoo ERP for scalable multi-location, multi-company, and multi-currency operations — so your system grows with you, not against you.",
    gradient: "from-emerald-100 to-teal-50",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Building,
    title: "Generic ERP Doesn't Fit Your Industry",
    desc: "Cookie-cutter solutions create more problems than they solve. We customize Odoo to match your industry's specific compliance rules, production processes, and operational workflows — without compromising stability.",
    gradient: "from-violet-100 to-purple-50",
    iconBg: "bg-violet-500",
  },
  {
    icon: Award,
    title: "You Need a Partner, Not Just a Vendor",
    desc: "As a certified Odoo Silver Partner with 50+ enterprise deployments, we don't disappear after go-live. We provide strategic ERP leadership from roadmap planning through long-term optimization.",
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
            We Don't Just Implement ERP — We Solve the Problems That Made You Need One
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most companies don't wake up wanting ERP — they wake up frustrated by broken processes, invisible data, and teams that can't scale. Here's how we fix that.
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
