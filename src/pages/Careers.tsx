import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Competitive salary and equity packages",
  "Comprehensive health, dental, and vision insurance",
  "Unlimited PTO and flexible working hours",
  "Annual learning and development stipend",
  "State-of-the-art equipment and home office setup",
  "Quarterly team retreats and company events"
];

const openings = [
  {
    title: "Senior AI Research Scientist",
    department: "Research",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead research initiatives in machine learning and natural language processing to develop next-generation AI solutions."
  },
  {
    title: "Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our AI platform using React, Node.js, and cloud technologies. Experience with AI/ML systems preferred."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description: "Design intuitive user experiences for complex AI tools. Help make cutting-edge technology accessible to all users."
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX",
    type: "Full-time",
    description: "Scale our AI infrastructure to serve millions of users. Work with Kubernetes, AWS, and machine learning pipelines."
  },
  {
    title: "Sales Development Representative",
    department: "Sales",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Drive growth by identifying and qualifying leads for our enterprise AI solutions. Great opportunity for career advancement."
  },
  {
    title: "Technical Writer",
    department: "Content",
    location: "Remote",
    type: "Contract",
    description: "Create clear, comprehensive documentation for our AI platform and APIs. Background in software development preferred."
  }
];

export default function Careers() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Help us shape the future of AI technology. We're looking for passionate, talented individuals 
            who want to make a meaningful impact on how businesses use artificial intelligence.
          </p>
        </motion.div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation at Scale</h3>
                <p className="text-gray-200 mb-6">
                  Work on cutting-edge AI technology that impacts millions of users worldwide. 
                  Your code and research will directly influence the future of business automation.
                </p>
                <h3 className="text-xl font-semibold text-white mb-4">Growth & Learning</h3>
                <p className="text-gray-200">
                  We invest heavily in our team's development. From conference attendance to online 
                  courses, we support your journey to become an industry leader.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-200 mb-6">
                  We believe great work happens when you're well-rested and motivated. Flexible 
                  schedules, remote work options, and unlimited PTO help you do your best work.
                </p>
                <h3 className="text-xl font-semibold text-white mb-4">Diverse & Inclusive</h3>
                <p className="text-gray-200">
                  Our team comes from diverse backgrounds and experiences. We foster an environment 
                  where everyone can contribute their unique perspectives and talents.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <p className="text-gray-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Openings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-gray-200">{job.description}</p>
                  </div>
                  <div className="lg:ml-6">
                    <Button className="w-full lg:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Don't See the Right Role?</h2>
            <p className="text-gray-200 mb-6">
              We're always looking for exceptional talent. Send us your resume and tell us how 
              you'd like to contribute to the future of AI.
            </p>
            <Button size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}