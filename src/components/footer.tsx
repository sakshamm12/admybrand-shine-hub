import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Documentation", href: "#docs" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Partners", href: "#partners" }
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact", href: "#contact" },
    { name: "Status", href: "#status" },
    { name: "Community", href: "#community" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Security", href: "#security" },
    { name: "Compliance", href: "#compliance" }
  ]
};

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Github, href: "#", name: "GitHub" },
  { icon: Mail, href: "mailto:contact@admybrand.com", name: "Email" }
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 font-serif">ADmyBRAND</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering businesses with cutting-edge AI solutions that drive innovation, 
                efficiency, and growth in the digital age.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>123 AI Innovation Drive, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>contact@admybrand.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4 capitalize">
                {category === 'product' ? 'Product' : 
                 category === 'company' ? 'Company' :
                 category === 'support' ? 'Support' : 'Legal'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-primary-foreground/70 text-sm">
            © 2024 ADmyBRAND. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href={social.href} aria-label={social.name}>
                  <social.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button size="sm" className="bg-accent hover:bg-accent-glow">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}