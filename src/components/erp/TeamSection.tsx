import { motion } from "framer-motion";
import { Users } from "lucide-react";

const teamCards = [
  { role: "Solution Architects", count: "8+", color: "from-primary/15 to-teal-50", iconBg: "bg-primary" },
  { role: "Odoo Developers", count: "25+", color: "from-accent/15 to-orange-50", iconBg: "bg-accent" },
  { role: "Business Analysts", count: "10+", color: "from-blue-100 to-sky-50", iconBg: "bg-blue-500" },
  { role: "QA Engineers", count: "12+", color: "from-violet-100 to-purple-50", iconBg: "bg-violet-500" },
];

const stats = [
  { value: "95%", label: "Client Retention", color: "from-primary/15 to-teal-50" },
  { value: "99%", label: "On-Time Delivery", color: "from-accent/15 to-orange-50" },
  { value: "50+", label: "Projects Delivered", color: "from-emerald-100 to-teal-50" },
];

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
              Meet Our ERP Experts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our strength lies in our people. Brain Station 23's ERP team brings together certified Odoo professionals, solution architects, and industry specialists who understand both technology and business operations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We work closely with clients to design, implement, and optimize Odoo ERP solutions that align with real-world processes, industry policies, and long-term growth goals.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className={`text-center p-4 rounded-xl bg-gradient-to-br ${stat.color} border border-border`}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {teamCards.map((member) => (
                <div
                  key={member.role}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${member.color} border border-border flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-full ${member.iconBg} flex items-center justify-center mb-3 shadow-lg`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{member.count}</div>
                  <div className="text-sm text-muted-foreground mt-1">{member.role}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
