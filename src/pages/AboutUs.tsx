import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We push the boundaries of AI technology to create solutions that transform businesses."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives to drive excellence."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code to customer service."
  },
  {
    icon: Heart,
    title: "Impact",
    description: "We're committed to creating technology that makes a positive difference in the world."
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Google AI researcher with 10+ years in machine learning and enterprise software."
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Microsoft engineer specializing in scalable AI infrastructure and distributed systems."
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "PhD in Computer Science from MIT, published researcher in natural language processing."
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "Former Tesla software architect with expertise in real-time AI applications."
  }
];

export default function AboutUs() {
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
          <h1 className="text-5xl font-bold text-white mb-6">About ADmyBRAND</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize AI technology and make it accessible to businesses of all sizes. 
            Our cutting-edge platform empowers organizations to harness the power of artificial intelligence 
            without the complexity.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-semibold text-white mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-200">
              <div>
                <p className="mb-4">
                  Founded in 2020 by a team of AI researchers and industry veterans, ADmyBRAND was born 
                  from a simple observation: while AI technology was advancing rapidly, most businesses 
                  couldn't access or implement these powerful tools effectively.
                </p>
                <p>
                  We set out to bridge this gap by creating an intuitive, powerful platform that makes 
                  AI implementation as simple as a few clicks, while maintaining the sophistication 
                  that enterprise customers demand.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Today, we serve over 10,000 businesses worldwide, from startups to Fortune 500 companies, 
                  helping them transform their operations with AI-powered solutions.
                </p>
                <p>
                  Our commitment to innovation, customer success, and ethical AI development continues 
                  to drive everything we do as we shape the future of business technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <value.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-200 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white text-center mb-1">{member.name}</h3>
                <p className="text-blue-300 text-sm text-center mb-3">{member.role}</p>
                <p className="text-gray-200 text-sm text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}