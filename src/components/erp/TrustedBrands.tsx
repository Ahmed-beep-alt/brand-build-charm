import { motion } from "framer-motion";
import kireiLogo from "@/assets/partners/kirei.png";
import augLogo from "@/assets/partners/aug.webp";
import idlcLogo from "@/assets/partners/idlc.webp";
import rhLogo from "@/assets/partners/rh.png";
import nathLogo from "@/assets/partners/nath.webp";
import gothamLogo from "@/assets/partners/gotham.webp";
import alareebLogo from "@/assets/partners/alareeb.webp";
import noEventsLogo from "@/assets/partners/no-events.webp";
import rakayezLogo from "@/assets/partners/rakayez.webp";
import omeraLogo from "@/assets/partners/omera.webp";

const brands = [
  { name: "Ispahani", logo: null },
  { name: "Sea Resources Group", logo: null },
  { name: "Omera LPG", logo: omeraLogo },
  { name: "Rakayez", logo: rakayezLogo },
  { name: "No Events", logo: noEventsLogo },
  { name: "Alareeb", logo: alareebLogo },
  { name: "Gotham Manufacturing", logo: gothamLogo },
  { name: "Nath", logo: nathLogo },
  { name: "RH Corp", logo: rhLogo },
  { name: "AugMedix", logo: augLogo },
  { name: "IDLC", logo: idlcLogo },
  { name: "Kirei", logo: kireiLogo },
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Trusted by fast-moving tech teams{" "}
            <span className="text-muted-foreground">from startups to enterprises</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex items-center justify-center px-5 py-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-20"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-[120px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
