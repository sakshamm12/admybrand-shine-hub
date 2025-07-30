import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Up to 10,000 AI queries/month",
      "Basic analytics dashboard",
      "Email support",
      "Standard integrations",
      "1 user account"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing companies with advanced AI needs",
    monthlyPrice: 299,
    yearlyPrice: 239,
    features: [
      "Up to 100,000 AI queries/month",
      "Advanced analytics & insights",
      "Priority support",
      "Premium integrations",
      "5 user accounts",
      "Custom model training",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "Complete AI solution for large organizations",
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      "Unlimited AI queries",
      "Enterprise analytics suite",
      "24/7 dedicated support",
      "All integrations included",
      "Unlimited user accounts",
      "Custom AI development",
      "White-label options",
      "SLA guarantee"
    ],
    popular: false
  }
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Choose Your AI Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible pricing plans designed to grow with your business needs
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isYearly ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-accent text-accent-foreground">
                Save 20%
              </Badge>
            )}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard 
                className={`p-8 h-full relative ${
                  plan.popular 
                    ? 'ring-2 ring-primary shadow-glow scale-105' 
                    : 'hover:shadow-elegant'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary-glow shadow-glow' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } transition-all duration-300`}
                  size="lg"
                >
                  Get Started
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}