import { motion } from "framer-motion";
import { Brain, Zap, Shield, BarChart3, Cog, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Analytics",
    description: "Harness the power of machine learning to extract meaningful insights from your data and make data-driven decisions."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Processing",
    description: "Experience unprecedented speed with our optimized AI algorithms that process large datasets in real-time."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security ensures your sensitive data remains protected with end-to-end encryption and compliance."
  },
  {
    icon: BarChart3,
    title: "Predictive Modeling",
    description: "Forecast trends and outcomes with sophisticated predictive models tailored to your business needs."
  },
  {
    icon: Cog,
    title: "Seamless Integration",
    description: "Integrate effortlessly with your existing systems through our comprehensive API and plugin ecosystem."
  },
  {
    icon: Sparkles,
    title: "Intelligent Automation",
    description: "Automate complex workflows and repetitive tasks with our intelligent automation engine."
  }
];

export function FeaturesSection() {
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
    <section id="features" className="py-20 px-6 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Powerful AI Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the comprehensive suite of AI tools designed to revolutionize your business operations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="p-8 h-full hover:shadow-elegant transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}