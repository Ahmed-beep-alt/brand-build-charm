import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const offices = [
  {
    country: "Bangladesh (HQ)",
    address: "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212",
    email: "sales@brainstation-23.com",
    phone: "+880 9610 902323",
  },
  {
    country: "USA",
    address: "7426 Alban Station Blvd, Suite A101, Springfield, VA 22150",
    email: "sales@brainstation-23.com",
    phone: "+1 606 773 7443",
  },
  {
    country: "UAE",
    address: "903, 9th Floor, DAMAC XL Tower, Business Bay, Dubai",
    email: "sales@brainstation-23.com",
    phone: "+971 4 242 0223",
  },
  {
    country: "Germany",
    address: "26160 Bad Zwischenahn, Germany",
    email: "sales@brainstation-23.de",
    phone: "+49 4403 699 9839",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Office info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Talk About What's Slowing Your Business Down
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Whether you're evaluating ERP for the first time or replacing a system that no longer fits — our solution architects will help you map a clear path forward. No sales pitch, just expert advice.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" /> Our Offices
            </h3>
            <div className="space-y-4">
              {offices.map((office, i) => (
                <motion.div
                  key={office.country}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-foreground text-sm mb-2">{office.country}</h4>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                      {office.address}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="w-3.5 h-3.5 shrink-0 text-accent" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">{office.email}</a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="w-3.5 h-3.5 shrink-0 text-accent" />
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{office.phone}</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 shadow-lg sticky top-24">
              <h3 className="text-xl font-semibold text-foreground mb-2">Request a Free ERP Consultation</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill out the form and our solution architect will get back to you within 24 hours.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name*</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email*</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="+880..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Select Industry*</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail & Distribution</option>
                    <option value="logistics">Logistics & Supply Chain</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="services">Professional Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Select Service*</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="implementation">Odoo Implementation</option>
                    <option value="customization">Odoo Customization</option>
                    <option value="migration">Odoo Migration</option>
                    <option value="integration">Odoo Integration</option>
                    <option value="consultation">Odoo Consultation</option>
                    <option value="support">Support & Maintenance</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-1.5">Project Details</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your ERP needs..."
                />
              </div>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base">
                <Send className="w-4 h-4" /> Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
