import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";

const faqs = [
  {
    question: "How quickly can we implement ADmyBRAND AI Suite?",
    answer: "Implementation typically takes 2-4 weeks depending on your specific requirements and existing infrastructure. Our dedicated implementation team works closely with you to ensure a smooth transition with minimal disruption to your operations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 technical assistance for Enterprise clients, extensive documentation, video tutorials, and dedicated customer success managers. Our support team consists of AI experts who understand both the technology and business applications."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We employ bank-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties, and we offer on-premise deployment options for maximum security control."
  },
  {
    question: "Can ADmyBRAND integrate with our existing systems?",
    answer: "Yes, our platform is designed for seamless integration. We support over 200+ integrations including popular CRM, ERP, and analytics platforms. Our REST API and webhook system allow for custom integrations with virtually any system."
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "Our clients typically see positive ROI within 3-6 months. Common benefits include 40-60% reduction in manual processing time, 25-35% improvement in decision accuracy, and 15-30% cost savings through automation and optimization."
  },
  {
    question: "Do you offer training for our team?",
    answer: "Yes, we provide comprehensive training programs including online courses, live workshops, and certification programs. We also offer custom training sessions tailored to your specific use cases and industry requirements."
  }
];

export function FAQSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our AI solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AccordionItem value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}