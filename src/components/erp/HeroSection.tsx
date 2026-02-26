import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users, CalendarDays } from "lucide-react";

const stats = [
  { icon: Shield, value: "Certified", label: "Odoo Silver Partner" },
  { icon: Clock, value: "10+", label: "Years of Odoo Experience" },
  { icon: Users, value: "50+", label: "ERP Projects Delivered" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--teal)/0.15),transparent_60%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,hsl(var(--warm)/0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Shield className="w-4 h-4 text-warm" />
              <span className="text-sm font-medium text-primary-foreground/80">
                Certified Odoo Silver Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Enterprise-Grade{" "}
              <span className="bg-gradient-to-r from-warm to-yellow-400 bg-clip-text text-transparent">
                ERP Solutions
              </span>{" "}
              with Odoo
            </h1>

            <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              Brain Station 23 delivers Odoo ERP solutions that help organizations unify operations,
              improve efficiency, and gain real-time business visibility across the full ERP lifecycle.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base">
                <CalendarDays className="w-4 h-4" /> Book a Meeting
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/15 text-white hover:bg-white/25 text-base shadow-lg backdrop-blur-sm"
              >
                View Case Studies
              </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual - ERP Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                  alt="Brain Station 23 ERP Dashboard - Enterprise Resource Planning Solution"
                  className="w-full h-[480px] object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border p-5 shadow-xl"
              >
                <div className="text-3xl font-bold text-accent">9+</div>
                <div className="text-xs text-muted-foreground mt-1">Integrated Modules</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 bg-card/95 backdrop-blur-md rounded-2xl border border-border p-5 shadow-xl"
              >
                <div className="text-3xl font-bold text-primary">60%</div>
                <div className="text-xs text-muted-foreground mt-1">Faster Operations</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
