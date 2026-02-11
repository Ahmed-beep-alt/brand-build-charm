import { motion } from "framer-motion";
import { Settings, Wrench, RefreshCw, Link, MessageSquare, Headphones } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Odoo Implementation",
    desc: "Structured, end-to-end deployment aligned with your business processes.",
    gradient: "from-primary/20 to-teal-light",
    iconBg: "bg-primary",
  },
  {
    icon: Wrench,
    title: "Odoo Customization",
    desc: "Workflow-driven customization and module development tailored to operational needs.",
    gradient: "from-accent/20 to-orange-100",
    iconBg: "bg-accent",
  },
  {
    icon: RefreshCw,
    title: "Odoo Migration",
    desc: "Secure migration from legacy systems or older Odoo versions with full data integrity.",
    gradient: "from-emerald-100 to-teal-50",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Link,
    title: "Odoo Integration",
    desc: "Seamless integration with third-party applications, payment gateways, and enterprise systems.",
    gradient: "from-blue-100 to-sky-50",
    iconBg: "bg-blue-500",
  },
  {
    icon: MessageSquare,
    title: "Odoo Consultation",
    desc: "Strategic ERP advisory covering solution design, module selection, and roadmap planning.",
    gradient: "from-violet-100 to-purple-50",
    iconBg: "bg-violet-500",
  },
  {
    icon: Headphones,
    title: "Odoo Support & Maintenance",
    desc: "Continuous support, upgrades, performance monitoring, and system optimization.",
    gradient: "from-rose-100 to-pink-50",
    iconBg: "bg-rose-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Odoo ERP Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end Odoo ERP services to streamline operations, enhance visibility,
            and enable scalable business growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${svc.gradient} border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center mb-4 shadow-lg`}>
                <svc.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
