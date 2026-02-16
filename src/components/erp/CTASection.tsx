import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy to-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how Brain Station 23 can implement and customize Odoo ERP
            to match your industry-specific processes and drive measurable impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/15 text-white hover:bg-white/25 gap-2 text-base backdrop-blur-sm shadow-lg"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              erp@brainstation-23.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +880 1XXX-XXXXXX
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
