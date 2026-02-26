import { motion } from "framer-motion";
import { MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HaveQuestionsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy to-primary/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--teal)/0.15),transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/60 text-lg mb-3 max-w-xl mx-auto">
            Our team is standing by to help. We'd love to discuss your ERP needs.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
            <Clock className="w-4 h-4" />
            Average response time: 5 minutes
          </div>

          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8">
            <MessageCircle className="w-4 h-4" /> Chat With Us Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HaveQuestionsSection;
