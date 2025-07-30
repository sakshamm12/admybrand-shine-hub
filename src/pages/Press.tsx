import { motion } from "framer-motion";
import { Calendar, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const pressReleases = [
  {
    date: "2024-01-15",
    title: "ADmyBRAND Raises $50M Series B to Accelerate AI Platform Development",
    summary: "Funding will be used to expand research team and enhance enterprise AI capabilities.",
    link: "#"
  },
  {
    date: "2023-11-28",
    title: "ADmyBRAND Named to Fast Company's Most Innovative Companies List",
    summary: "Recognition for breakthrough achievements in democratizing AI technology for businesses.",
    link: "#"
  },
  {
    date: "2023-09-10",
    title: "ADmyBRAND Partners with Microsoft to Integrate AI Solutions",
    summary: "Strategic partnership brings advanced AI capabilities to Microsoft Azure marketplace.",
    link: "#"
  },
  {
    date: "2023-06-22",
    title: "ADmyBRAND Reaches 10,000 Active Business Customers Milestone",
    summary: "Platform growth demonstrates increasing enterprise adoption of AI automation tools.",
    link: "#"
  },
  {
    date: "2023-03-15",
    title: "ADmyBRAND Launches Enterprise AI Security Framework",
    summary: "New security features provide enhanced data protection for large-scale AI deployments.",
    link: "#"
  }
];

const mediaKit = [
  { name: "Company Logo (PNG)", size: "2.3 MB" },
  { name: "Company Logo (SVG)", size: "156 KB" },
  { name: "Brand Guidelines", size: "4.1 MB" },
  { name: "Executive Photos", size: "8.7 MB" },
  { name: "Product Screenshots", size: "12.4 MB" },
  { name: "Company Fact Sheet", size: "892 KB" }
];

const coverage = [
  {
    outlet: "TechCrunch",
    title: "How ADmyBRAND is Making AI Accessible to Small Businesses",
    date: "January 2024",
    link: "#"
  },
  {
    outlet: "Forbes",
    title: "The Future of Business Automation: An Interview with ADmyBRAND's CEO",
    date: "December 2023",
    link: "#"
  },
  {
    outlet: "VentureBeat",
    title: "ADmyBRAND's Platform Democratizes Enterprise AI",
    date: "November 2023",
    link: "#"
  },
  {
    outlet: "Wired",
    title: "How No-Code AI is Transforming Business Operations",
    date: "October 2023",
    link: "#"
  }
];

export default function Press() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Press & Media</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, announcements, and media coverage about ADmyBRAND. 
            Download our media kit and find everything you need for your story.
          </p>
        </motion.div>

        {/* Press Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Media Inquiries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Press Contact</h3>
                <p className="text-gray-200 mb-1">Sarah Johnson, Head of Communications</p>
                <p className="text-gray-200 mb-1">Email: press@admybrand.com</p>
                <p className="text-gray-200">Phone: +1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Business Inquiries</h3>
                <p className="text-gray-200 mb-1">Michael Chen, VP of Business Development</p>
                <p className="text-gray-200 mb-1">Email: partnerships@admybrand.com</p>
                <p className="text-gray-200">Phone: +1 (555) 123-4568</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Press Releases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-8">Recent Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(release.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{release.title}</h3>
                    <p className="text-gray-200">{release.summary}</p>
                  </div>
                  <div className="lg:ml-6">
                    <Button variant="outline" className="w-full lg:w-auto">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-8">Media Coverage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coverage.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-blue-300 font-medium">{article.outlet}</span>
                  <span className="text-gray-400 text-sm">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{article.title}</h3>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read Article
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Kit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-8">Media Kit</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-gray-200 mb-6">
              Download our comprehensive media kit containing logos, brand guidelines, executive photos, 
              and other assets for your coverage of ADmyBRAND.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {mediaKit.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.size}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Complete Media Kit
            </Button>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}