import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

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
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/40 bg-white/10 text-white hover:bg-white/20 text-base shadow-lg"
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

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 w-72 h-48 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6">
                <div className="text-sm font-medium text-white/60 mb-2">Real-Time Dashboard</div>
                <div className="space-y-3">
                  <div className="h-3 bg-primary/30 rounded-full w-full" />
                  <div className="h-3 bg-warm/30 rounded-full w-3/4" />
                  <div className="h-3 bg-primary/20 rounded-full w-1/2" />
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/20" />
                  <div className="w-12 h-12 rounded-lg bg-warm/20" />
                  <div className="w-12 h-12 rounded-lg bg-primary/15" />
                </div>
              </div>

              <div className="absolute top-32 right-0 w-64 h-40 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6">
                <div className="text-sm font-medium text-white/60 mb-3">Revenue Growth</div>
                <div className="flex items-end gap-2 h-16">
                  {[40, 55, 35, 70, 50, 80, 65, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary/50"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-8 w-60 h-36 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-6">
                <div className="text-sm font-medium text-white/60 mb-2">Modules Active</div>
                <div className="text-3xl font-bold text-warm">9+</div>
                <div className="text-xs text-white/40 mt-1">Fully integrated modules</div>
              </div>

              {/* Spacer for layout */}
              <div className="w-full h-[400px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
