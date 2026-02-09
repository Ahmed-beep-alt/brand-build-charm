import { motion } from "framer-motion";
import { ShieldCheck, Lock, Award } from "lucide-react";

const certs = [
  {
    icon: Lock,
    title: "GDPR Compliant",
    desc: "Ensuring data privacy, protection, and lawful processing across systems.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 9001 & ISO 27001",
    desc: "Proven quality management and robust information security ensuring confidentiality, integrity, and availability.",
  },
  {
    icon: Award,
    title: "CMMI Aligned",
    desc: "Mature development and delivery processes focused on risk control, quality, and continuous improvement.",
  },
];

const SecuritySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">
            Security & Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Built on strong security, governance, and compliance standards — ensuring data protection,
            operational reliability, and regulatory alignment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
                <cert.icon className="w-7 h-7 text-warm" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{cert.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
