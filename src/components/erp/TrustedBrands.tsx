import { motion } from "framer-motion";

const brands = [
  "Ispahani", "Sea Resources Group", "Omera LPG", "Rakayez",
  "No Events", "Alareeb", "Gotham Manufacturing", "Nath",
  "RH", "AUG", "IDLC", "Kirei",
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest"
        >
          Trusted by leading brands across industries
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="px-5 py-2.5 rounded-lg bg-muted/50 border border-border text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
