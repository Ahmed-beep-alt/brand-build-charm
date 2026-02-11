import { motion } from "framer-motion";
import { Factory, ShoppingCart, Globe, Truck, Heart, GraduationCap, Briefcase, Building2 } from "lucide-react";

const industries = [
  { icon: Factory, label: "Manufacturing", color: "from-primary/20 to-teal-50", iconBg: "bg-primary" },
  { icon: ShoppingCart, label: "Retail & Distribution", color: "from-accent/20 to-orange-50", iconBg: "bg-accent" },
  { icon: Globe, label: "E-commerce", color: "from-blue-100 to-sky-50", iconBg: "bg-blue-500" },
  { icon: Truck, label: "Logistics & Supply Chain", color: "from-emerald-100 to-teal-50", iconBg: "bg-emerald-500" },
  { icon: Heart, label: "Healthcare", color: "from-rose-100 to-pink-50", iconBg: "bg-rose-500" },
  { icon: GraduationCap, label: "Education", color: "from-violet-100 to-purple-50", iconBg: "bg-violet-500" },
  { icon: Briefcase, label: "Professional Services", color: "from-amber-100 to-yellow-50", iconBg: "bg-amber-500" },
  { icon: Building2, label: "Enterprises & SMEs", color: "from-primary/15 to-cyan-50", iconBg: "bg-primary" },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Industries We Serve</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${ind.color} border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 text-center`}
            >
              <div className={`w-14 h-14 rounded-xl ${ind.iconBg} flex items-center justify-center shadow-lg`}>
                <ind.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
