import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Globe, Award, Clock } from "lucide-react";

const keyMetrics = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Businesses",
    growth: "+15% this month"
  },
  {
    icon: Zap,
    value: "2.5M+",
    label: "AI Workflows Processed",
    growth: "+32% this quarter"
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries Served",
    growth: "+8 new this month"
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime Achieved",
    growth: "Last 12 months"
  }
];

const usageStats = [
  { category: "Small Business", percentage: 45, count: "4,500" },
  { category: "Enterprise", percentage: 30, count: "3,000" },
  { category: "Mid-Market", percentage: 20, count: "2,000" },
  { category: "Startup", percentage: 5, count: "500" }
];

const performanceMetrics = [
  {
    metric: "Average Response Time",
    value: "< 200ms",
    description: "API response time across all endpoints"
  },
  {
    metric: "Data Processing Speed",
    value: "1M+ records/sec",
    description: "Peak data processing capability"
  },
  {
    metric: "Model Accuracy",
    value: "94.5%",
    description: "Average accuracy across all AI models"
  },
  {
    metric: "Customer Satisfaction",
    value: "4.8/5",
    description: "Based on 2,500+ customer reviews"
  },
  {
    metric: "Time to Value",
    value: "< 24 hours",
    description: "Average time from signup to first successful workflow"
  },
  {
    metric: "Cost Reduction",
    value: "67%",
    description: "Average operational cost reduction for customers"
  }
];

const growthData = [
  { month: "Jan", businesses: 8200, workflows: 1800000 },
  { month: "Feb", businesses: 8500, workflows: 1950000 },
  { month: "Mar", businesses: 8900, workflows: 2100000 },
  { month: "Apr", businesses: 9200, workflows: 2200000 },
  { month: "May", businesses: 9600, workflows: 2350000 },
  { month: "Jun", businesses: 10000, workflows: 2500000 }
];

const industryBreakdown = [
  { industry: "Technology", percentage: 25 },
  { industry: "E-commerce", percentage: 20 },
  { industry: "Healthcare", percentage: 15 },
  { industry: "Finance", percentage: 12 },
  { industry: "Education", percentage: 10 },
  { industry: "Manufacturing", percentage: 8 },
  { industry: "Other", percentage: 10 }
];

export default function Stats() {
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
          <h1 className="text-5xl font-bold text-white mb-6">Platform Statistics</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Real-time insights into ADmyBRAND's growth, performance, and impact across 
            the global AI automation landscape.
          </p>
          <p className="text-sm text-gray-300 mt-4">Data updated in real-time • Last updated: {new Date().toLocaleString()}</p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Key Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <metric.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-200 mb-2">{metric.label}</div>
                <div className="text-green-400 text-sm">{metric.growth}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Customer Breakdown</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">By Company Size</h3>
                <div className="space-y-4">
                  {usageStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center flex-1">
                        <span className="text-white w-24">{stat.category}</span>
                        <div className="flex-1 mx-4 bg-white/20 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${stat.percentage}%` }}
                          />
                        </div>
                        <span className="text-gray-200 w-16 text-right">{stat.percentage}%</span>
                      </div>
                      <span className="text-blue-300 ml-4">{stat.count}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">By Industry</h3>
                <div className="space-y-3">
                  {industryBreakdown.map((industry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-white">{industry.industry}</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-white/20 rounded-full h-2 mr-3">
                          <div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${industry.percentage * 4}%` }}
                          />
                        </div>
                        <span className="text-gray-200 w-10 text-right">{industry.percentage}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Performance Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-2xl font-bold text-blue-300 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{metric.metric}</div>
                <div className="text-gray-200 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">Growth Trend</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Active Businesses</h3>
                <div className="space-y-3">
                  {growthData.map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="text-white w-12">{data.month}</span>
                      <div className="flex-1 mx-4 bg-white/20 rounded-full h-6 relative">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                          style={{ width: `${(data.businesses / 10000) * 100}%` }}
                        >
                          <span className="text-white text-xs font-medium">{data.businesses.toLocaleString()}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Workflows Processed</h3>
                <div className="space-y-3">
                  {growthData.map((data, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="text-white w-12">{data.month}</span>
                      <div className="flex-1 mx-4 bg-white/20 rounded-full h-6 relative">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-6 rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                          style={{ width: `${(data.workflows / 2500000) * 100}%` }}
                        >
                          <span className="text-white text-xs font-medium">{(data.workflows / 1000000).toFixed(1)}M</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-white mb-4">Global Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-300 mb-2">847M+</div>
                <p className="text-gray-200">Hours Saved Through Automation</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">$2.3B+</div>
                <p className="text-gray-200">Total Cost Savings for Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">156K+</div>
                <p className="text-gray-200">Jobs Created Through AI Efficiency</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}