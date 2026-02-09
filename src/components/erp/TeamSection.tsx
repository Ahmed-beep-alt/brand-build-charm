import { motion } from "framer-motion";
import { Users } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Meet Our ERP Experts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our strength lies in our people. Brain Station 23's ERP team brings together certified Odoo professionals, solution architects, and industry specialists who understand both technology and business operations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We work closely with clients to design, implement, and optimize Odoo ERP solutions that align with real-world processes, industry policies, and long-term growth goals. From strategy and architecture to customization and support, our team ensures every ERP implementation is reliable, scalable, and built for success.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-xs text-muted-foreground mt-1">Client Retention</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground mt-1">On-Time Delivery</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects Delivered</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { role: "Solution Architects", count: "8+" },
                { role: "Odoo Developers", count: "25+" },
                { role: "Business Analysts", count: "10+" },
                { role: "QA Engineers", count: "12+" },
              ].map((member, i) => (
                <div
                  key={member.role}
                  className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-primary" />
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
