import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Users, FileText, Award, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II compliant infrastructure with continuous monitoring and threat detection."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 encryption standards."
  },
  {
    icon: Eye,
    title: "Zero-Knowledge Architecture",
    description: "We cannot access your data or AI models. Your information remains completely private."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Multi-region deployment with automatic failover and 99.9% uptime guarantee."
  },
  {
    icon: Users,
    title: "Access Controls",
    description: "Role-based permissions, multi-factor authentication, and audit logging."
  },
  {
    icon: FileText,
    title: "Compliance Ready",
    description: "GDPR, HIPAA, and other regulatory compliance frameworks supported."
  }
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Annual security audits ensuring data protection and availability",
    status: "Certified"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management",
    status: "In Progress"
  },
  {
    name: "GDPR Compliance",
    description: "Full compliance with European data protection regulations",
    status: "Certified"
  },
  {
    name: "HIPAA Ready",
    description: "Healthcare data protection standards supported",
    status: "Available"
  }
];

const practices = [
  {
    category: "Data Protection",
    items: [
      "256-bit AES encryption for data at rest",
      "TLS 1.3 encryption for data in transit",
      "Encrypted database connections",
      "Regular key rotation and management",
      "Secure backup and recovery procedures"
    ]
  },
  {
    category: "Access Security",
    items: [
      "Multi-factor authentication (MFA) required",
      "Role-based access control (RBAC)",
      "Single sign-on (SSO) integration",
      "Session management and timeout",
      "API key authentication and rotation"
    ]
  },
  {
    category: "Infrastructure Security",
    items: [
      "AWS VPC with private subnets",
      "Web Application Firewall (WAF)",
      "DDoS protection and mitigation",
      "Intrusion detection and prevention",
      "Regular security patches and updates"
    ]
  },
  {
    category: "Monitoring & Compliance",
    items: [
      "24/7 security operations center",
      "Real-time threat detection",
      "Comprehensive audit logging",
      "Regular penetration testing",
      "Incident response procedures"
    ]
  }
];

export default function Security() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Security & Trust</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your data security is our top priority. We implement enterprise-grade security measures 
            and maintain the highest standards of data protection to keep your AI workflows safe and secure.
          </p>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Security Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <feature.icon className="w-12 h-12 text-blue-300 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Certifications & Compliance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-200 text-sm mb-3">{cert.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'Certified' ? 'bg-green-500/20 text-green-300' :
                  cert.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Security Practices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{practice.category}</h3>
                <ul className="space-y-2">
                  {practice.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-200 flex items-start">
                      <span className="text-green-400 mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Incident Response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-400 mr-3" />
              <h2 className="text-2xl font-semibold text-white">Incident Response</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Our Commitment</h3>
                <p className="text-gray-200 mb-4">
                  In the unlikely event of a security incident, we have comprehensive procedures 
                  in place to respond quickly and transparently. Our incident response team is 
                  available 24/7 to address any security concerns.
                </p>
                <h3 className="text-lg font-semibold text-white mb-3">Response Timeline</h3>
                <ul className="text-gray-200 space-y-1">
                  <li>• Detection and containment within 1 hour</li>
                  <li>• Customer notification within 4 hours</li>
                  <li>• Full investigation within 24 hours</li>
                  <li>• Detailed incident report within 72 hours</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Reporting Security Issues</h3>
                <p className="text-gray-200 mb-4">
                  If you discover a potential security vulnerability, please report it to us 
                  immediately. We appreciate responsible disclosure and will work with you 
                  to address any legitimate security concerns.
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">Security Contact</p>
                  <p className="text-gray-200">security@admybrand.com</p>
                  <p className="text-gray-200">PGP Key: Available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Trust Center</h2>
            <p className="text-gray-200 mb-6">
              Visit our Trust Center for detailed security documentation, compliance reports, 
              and real-time system status updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors">
                View Security Documentation
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                System Status Page
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}