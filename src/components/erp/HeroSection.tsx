import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--teal)/0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <Shield className="w-4 h-4 text-warm" />
              <span className="text-sm font-medium text-primary-foreground/80">
                Certified Odoo Silver Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-foreground leading-[1.15] mb-6">
              One Platform to{" "}
              <span className="text-warm">Unify, Automate & Scale</span>{" "}
              Your Entire Business
            </h1>

            <p className="text-lg text-navy-foreground/60 max-w-xl mb-10 leading-relaxed">
              Fragmented systems drain productivity and hide the insights you need to grow. As a certified Odoo Silver Partner, Brain Station 23 replaces scattered tools with a single intelligent ERP — giving your leadership real-time visibility from warehouse to balance sheet.
            </p>

            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8 py-6 rounded-full shadow-lg shadow-accent/30"
            >
              <CalendarDays className="w-5 h-5" /> Book a Meeting
            </Button>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Brain Station 23 ERP Dashboard - Enterprise Resource Planning Solution"
                className="w-full h-[500px] object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
