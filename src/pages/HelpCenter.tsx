import { motion } from "framer-motion";
import { Search, Book, MessageCircle, Mail, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Basic guides to help you set up and use ADmyBRAND",
    articles: 12
  },
  {
    icon: Users,
    title: "Account Management",
    description: "Manage your account, billing, and team settings",
    articles: 8
  },
  {
    icon: MessageCircle,
    title: "API & Integrations",
    description: "Technical documentation and integration guides",
    articles: 15
  },
  {
    icon: Search,
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    articles: 20
  }
];

const popularArticles = [
  "How to create your first AI workflow",
  "Setting up team permissions and roles",
  "Integrating with popular business tools",
  "Understanding your billing and usage",
  "Best practices for AI prompt engineering",
  "Data security and privacy settings"
];

const faqs = [
  {
    question: "How do I get started with ADmyBRAND?",
    answer: "Getting started is easy! Simply sign up for an account, choose your plan, and follow our guided onboarding process. Our setup wizard will walk you through creating your first AI workflow in just a few minutes."
  },
  {
    question: "What types of AI models do you support?",
    answer: "We support a wide range of AI models including GPT-4, Claude, PaLM, and custom models. Our platform is designed to work with both public and private AI models, giving you flexibility in your AI implementations."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never used to train our models, and we provide comprehensive audit logs."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer: "Yes! We offer integrations with 100+ popular business tools including Slack, Salesforce, HubSpot, and more. We also provide robust APIs and webhooks for custom integrations."
  },
  {
    question: "What support options are available?",
    answer: "We offer multiple support channels including 24/7 chat support, email support, phone support for enterprise customers, and a comprehensive knowledge base. Our support team consists of AI experts who can help with both technical and strategic questions."
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is based on usage and features. We offer a free tier for getting started, plus Pro and Enterprise plans with additional capabilities. All plans include core AI features, with enterprise plans adding advanced security, compliance, and support options."
  }
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Help Center</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Find answers to your questions, learn how to use ADmyBRAND, and get the support you need 
            to succeed with AI automation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles, guides, and FAQs..."
              className="pl-12 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors cursor-pointer"
              >
                <category.icon className="w-12 h-12 text-blue-300 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-200 mb-3">{category.description}</p>
                <p className="text-blue-300 text-sm">{category.articles} articles</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Popular Articles</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <p className="text-white">{article}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/20 bg-white/5 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-blue-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Need More Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <MessageCircle className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-200 mb-4">Chat with our support team in real-time</p>
              <Button className="w-full">Start Chat</Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Mail className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-200 mb-4">Send us a detailed message about your issue</p>
              <Button variant="outline" className="w-full">Send Email</Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Phone className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-200 mb-4">Talk to our experts directly</p>
              <p className="text-blue-300 font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}