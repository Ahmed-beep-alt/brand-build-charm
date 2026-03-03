import { motion } from "framer-motion";
import { Users, Code2, BarChart3, Bug } from "lucide-react";

const teamCards = [
  {
    role: "Solution Architects",
    count: "8",
    unit: "+",
    color: "from-primary/15 to-teal-50",
    iconBg: "bg-gradient-to-br from-primary to-teal",
    icon: Users,
    borderAccent: "border-primary/20",
  },
  {
    role: "Odoo Developers",
    count: "25",
    unit: "+",
    color: "from-accent/15 to-orange-50",
    iconBg: "bg-gradient-to-br from-accent to-yellow-500",
    icon: Code2,
    borderAccent: "border-accent/20",
  },
  {
    role: "Business Analysts",
    count: "10",
    unit: "+",
    color: "from-blue-100 to-sky-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-sky-400",
    icon: BarChart3,
    borderAccent: "border-blue-500/20",
  },
  {
    role: "QA Engineers",
    count: "12",
    unit: "+",
    color: "from-violet-100 to-purple-50",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-400",
    icon: Bug,
    borderAccent: "border-violet-500/20",
  },
];

const stats = [
  { value: "95", unit: "%", label: "Client Retention", color: "from-primary/15 to-teal-50", textColor: "text-primary" },
  { value: "99", unit: "%", label: "On-Time Delivery", color: "from-accent/15 to-orange-50", textColor: "text-accent" },
  { value: "50", unit: "+", label: "Projects Delivered", color: "from-emerald-100 to-teal-50", textColor: "text-emerald-600" },
];

const AnimatedNumber = ({ value, unit }: { value: string; unit: string }) => {
  return (
    <span className="tabular-nums">
      {value}<span className="text-lg">{unit}</span>
    </span>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              55+ ERP Specialists.{" "}
              <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">One Mission.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Behind every successful ERP deployment is a team that understands both the technology and the business it serves. Our certified Odoo architects, developers, and analysts have collectively delivered 50+ enterprise projects — across manufacturing, logistics, finance, and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We don't rotate junior staff onto your project. You get senior professionals who've solved problems like yours before — and who stay with you from blueprint to go-live and beyond.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-center p-5 rounded-2xl bg-gradient-to-br ${stat.color} border border-border shadow-md`}
                >
                  <div className={`text-3xl sm:text-4xl font-extrabold ${stat.textColor}`}>
                    <AnimatedNumber value={stat.value} unit={stat.unit} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">
              {teamCards.map((member, i) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-7 rounded-2xl bg-gradient-to-br ${member.color} border ${member.borderAccent} flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${member.iconBg} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-extrabold text-foreground">
                    <AnimatedNumber value={member.count} unit={member.unit} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 font-medium">{member.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
