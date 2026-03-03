import { motion } from "framer-motion";
import { Play, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Mohammad Ashraful Islam",
    role: "CTO, BSEZ",
    company: "Bangladesh Special Economic Zone",
    quote:
      "Before Brain Station 23, our finance team spent 3 weeks just closing the books each month. Now it takes 3 days. The real-time dashboards changed how our leadership makes decisions — we went from guessing to knowing. That's not an upgrade, that's a transformation.",
    videoThumb: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Kamal Uddin Ahmed",
    role: "Head of IT, Ispahani Group",
    company: "Ispahani Group",
    quote:
      "We used to lose lakhs every quarter to production miscalculations and inventory mismatches. Brain Station 23 didn't just install software — they understood our factory floor, mapped every bottleneck, and gave us a system where production cost, material flow, and finance all speak the same language.",
    videoThumb: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=600&auto=format&fit=crop",
  },
];

const ClientSuccessStories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Don't Take Our Word for It
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg">
              Our clients went from operational chaos to full control — here's what that transformation looks like in their own words.
            </p>
          </div>
          <Button variant="outline" className="mt-4 sm:mt-0 gap-2 border-border text-foreground hover:bg-primary/10">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              {/* Video thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={t.videoThumb}
                  alt={`${t.name} testimonial`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-xl cursor-pointer hover:bg-accent transition-colors">
                    <Play className="w-7 h-7 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-4">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-warm text-warm" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">{t.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
