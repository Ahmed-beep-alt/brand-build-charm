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
    <section className="py-16 bg-gradient-to-r from-card via-background to-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest"
        >
          Trusted by leading brands across industries
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center justify-center px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 h-16 min-w-[120px]"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-10 max-w-[100px] object-contain"
                />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground">{brand.name}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
