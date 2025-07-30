import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.",
      "Personal information may include your name, email address, phone number, company information, and payment details.",
      "We automatically collect certain information about your use of our services, including log data, device information, and usage patterns.",
      "We may collect information from third-party services you choose to integrate with our platform."
    ]
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide, maintain, and improve our AI platform and services",
      "To process transactions and send you related information",
      "To communicate with you about our services, updates, and promotional offers",
      "To monitor and analyze usage patterns to improve user experience",
      "To detect, prevent, and address technical issues and security threats",
      "To comply with legal obligations and protect our rights"
    ]
  },
  {
    title: "Information Sharing and Disclosure",
    content: [
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
      "We may share information with trusted service providers who assist us in operating our platform and conducting our business.",
      "We may disclose information if required by law, legal process, or to protect the rights, property, or safety of ADmyBRAND, our users, or others.",
      "In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction."
    ]
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "All data transmission is encrypted using industry-standard SSL/TLS protocols.",
      "We maintain SOC 2 Type II compliance and undergo regular security audits.",
      "Access to personal information is restricted to authorized personnel who need it to perform their job functions.",
      "We regularly monitor our systems for potential vulnerabilities and attacks."
    ]
  },
  {
    title: "Data Retention",
    content: [
      "We retain personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.",
      "Account information is retained until you request deletion or your account is terminated.",
      "Usage data and logs are typically retained for up to 2 years for security and analytical purposes.",
      "Billing information is retained as required by law and accounting standards.",
      "You may request deletion of your personal information, subject to certain legal and operational requirements."
    ]
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, update, or delete your personal information.",
      "You can opt out of promotional communications at any time.",
      "You have the right to data portability for information you've provided to us.",
      "If you're in the EU, you have additional rights under GDPR, including the right to object to processing and the right to lodge a complaint with a supervisory authority.",
      "To exercise these rights, please contact us using the information provided below."
    ]
  },
  {
    title: "Cookies and Tracking",
    content: [
      "We use cookies and similar tracking technologies to enhance your experience on our platform.",
      "Essential cookies are necessary for the platform to function and cannot be disabled.",
      "Analytics cookies help us understand how you use our services and improve functionality.",
      "You can control cookie preferences through your browser settings.",
      "We do not use cookies for advertising or sell cookie data to third parties."
    ]
  },
  {
    title: "International Data Transfers",
    content: [
      "Your information may be transferred to and processed in countries other than your country of residence.",
      "We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses and adequacy decisions.",
      "Data transferred outside the EU is protected by appropriate safeguards under GDPR.",
      "We maintain data processing agreements with all service providers handling personal information."
    ]
  }
];

export default function PrivacyPolicy() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At ADmyBRAND, we take your privacy seriously. This policy explains how we collect, 
            use, and protect your personal information when you use our AI platform.
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
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-gray-200 leading-relaxed">
              This Privacy Policy describes how ADmyBRAND, Inc. ("we," "our," or "us") collects, uses, 
              and shares information about you when you use our AI platform and related services 
              (collectively, the "Services"). By using our Services, you agree to the collection, 
              use, and sharing of your information as described in this policy.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections */}
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

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-200 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us at:
            </p>
            <div className="text-gray-200 space-y-2">
              <p><strong>Email:</strong> privacy@admybrand.com</p>
              <p><strong>Address:</strong> ADmyBRAND, Inc., 123 AI Innovation Drive, Tech City, TC 12345</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
            <p className="text-gray-200 mt-4">
              We will respond to your inquiry within 30 days. If you are located in the European Union, 
              you also have the right to lodge a complaint with your local data protection authority.
            </p>
          </div>
        </motion.div>

        {/* Changes to Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-200">
              We may update this Privacy Policy from time to time. When we do, we will post the 
              updated policy on this page and update the "Last updated" date above. We will also 
              notify you of significant changes via email or through our platform. Your continued 
              use of our Services after any changes indicates your acceptance of the updated policy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}