import { motion } from "framer-motion";
import { Factory, ShoppingCart, Globe, Truck, Heart, GraduationCap, Briefcase, Building2 } from "lucide-react";

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingCart, label: "Retail & Distribution" },
  { icon: Globe, label: "E-commerce" },
  { icon: Truck, label: "Logistics & Supply Chain" },
  { icon: Heart, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: Building2, label: "Enterprises & SMEs" },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
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
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ind.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
