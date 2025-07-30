import { motion } from "framer-motion";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using ADmyBRAND's AI platform and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you may not use our services.",
      "These terms constitute a legally binding agreement between you and ADmyBRAND, Inc.",
      "We reserve the right to modify these terms at any time, with notice provided to users."
    ]
  },
  {
    title: "Description of Services",
    content: [
      "ADmyBRAND provides an AI automation platform that enables businesses to integrate artificial intelligence into their workflows.",
      "Our services include AI model access, workflow automation tools, integrations, and related support services.",
      "We may modify, suspend, or discontinue any aspect of our services at any time with reasonable notice.",
      "New features or tools added to the current services shall be subject to these Terms of Service."
    ]
  },
  {
    title: "User Accounts and Registration",
    content: [
      "You must create an account to access certain features of our platform.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must provide accurate, current, and complete information during registration.",
      "You are responsible for all activities that occur under your account.",
      "We reserve the right to suspend or terminate accounts that violate these terms."
    ]
  },
  {
    title: "Acceptable Use Policy",
    content: [
      "You may not use our services for any unlawful purpose or in violation of these terms.",
      "Prohibited uses include but are not limited to: creating harmful content, infringing intellectual property, or attempting to compromise our systems.",
      "You may not reverse engineer, decompile, or attempt to extract source code from our platform.",
      "You are prohibited from using our services to compete with us or to develop competing products.",
      "Bulk downloading or scraping of our content is not permitted without express written consent."
    ]
  },
  {
    title: "Intellectual Property Rights",
    content: [
      "ADmyBRAND retains all rights, title, and interest in our platform, technology, and related intellectual property.",
      "You retain ownership of any content you upload or create using our platform.",
      "By using our services, you grant us a limited license to use your content solely to provide our services.",
      "You represent that you have the necessary rights to any content you upload or process through our platform.",
      "We respect intellectual property rights and will respond to valid DMCA takedown requests."
    ]
  },
  {
    title: "Privacy and Data Protection",
    content: [
      "Our collection and use of personal information is governed by our Privacy Policy.",
      "You are responsible for ensuring you have proper consent for any personal data you process through our platform.",
      "We implement appropriate security measures to protect your data, but cannot guarantee absolute security.",
      "You should not upload sensitive personal information unless necessary for your use case.",
      "Data processing agreements are available for enterprise customers upon request."
    ]
  },
  {
    title: "Payment Terms and Billing",
    content: [
      "Subscription fees are billed in advance on a monthly or annual basis, depending on your chosen plan.",
      "Usage-based charges are billed monthly based on your actual consumption.",
      "All fees are non-refundable except as required by law or as specifically stated in these terms.",
      "We may change our pricing with 30 days' notice to existing customers.",
      "Failure to pay fees may result in suspension or termination of your account."
    ]
  },
  {
    title: "Service Availability and Support",
    content: [
      "We strive to maintain high availability of our services but do not guarantee uninterrupted access.",
      "Planned maintenance will be communicated in advance when possible.",
      "Support is provided according to your subscription plan and our published SLA.",
      "We are not responsible for third-party service interruptions that may affect our platform.",
      "Service credits may be available for significant downtime as specified in our SLA."
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      "Our total liability to you for any claim arising from your use of our services shall not exceed the amount paid by you in the 12 months preceding the claim.",
      "We are not liable for any indirect, incidental, special, consequential, or punitive damages.",
      "You acknowledge that AI systems may produce unexpected or incorrect results, and you use our services at your own risk.",
      "We disclaim all warranties except as expressly stated in these terms.",
      "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you."
    ]
  },
  {
    title: "Termination",
    content: [
      "You may terminate your account at any time by contacting our support team.",
      "We may suspend or terminate your account for violation of these terms or for any other reason with reasonable notice.",
      "Upon termination, your right to use our services will cease immediately.",
      "We will provide reasonable opportunity to export your data following termination.",
      "Provisions of these terms that by their nature should survive termination will remain in effect."
    ]
  }
];

export default function TermsOfService() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            These Terms of Service govern your use of ADmyBRAND's AI platform and services. 
            Please read them carefully as they contain important information about your rights and obligations.
          </p>
          <p className="text-sm text-gray-300 mt-4">Last updated: January 15, 2024</p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Agreement Overview</h2>
            <p className="text-gray-200 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the ADmyBRAND platform 
              and related services provided by ADmyBRAND, Inc. ("Company," "we," "our," or "us"). 
              By using our services, you ("User," "you," or "your") agree to these Terms in their entirety.
            </p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-200 leading-relaxed flex">
                    <span className="text-blue-300 mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Governing Law */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Governing Law and Disputes</h2>
            <div className="text-gray-200 space-y-4">
              <p>
                These Terms are governed by the laws of the State of California, without regard to 
                conflict of law principles. Any disputes arising from these Terms or your use of 
                our services will be resolved through binding arbitration, except for claims that 
                may be brought in small claims court.
              </p>
              <p>
                You agree that any arbitration will be conducted by a single arbitrator through the 
                American Arbitration Association (AAA) under its Commercial Arbitration Rules. 
                The arbitration will take place in San Francisco, California, or virtually at the 
                arbitrator's discretion.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-gray-200 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="text-gray-200 space-y-2">
              <p><strong>Email:</strong> legal@admybrand.com</p>
              <p><strong>Address:</strong> ADmyBRAND, Inc., 123 AI Innovation Drive, Tech City, TC 12345</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>
        </motion.div>

        {/* Acknowledgment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8"
        >
          <div className="bg-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
            <h2 className="text-2xl font-semibold text-white mb-4">Acknowledgment</h2>
            <p className="text-gray-200">
              By using ADmyBRAND's services, you acknowledge that you have read, understood, and 
              agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please discontinue use of our services immediately.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}