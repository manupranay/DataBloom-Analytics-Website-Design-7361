import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiBarChart3, FiBrain, FiArrowRight, FiStar } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiSearch,
      title: 'Understand Your Data',
      description: 'We dive deep into your data landscape to uncover hidden patterns and insights.',
    },
    {
      icon: FiBarChart3,
      title: 'Visualize Performance',
      description: 'Transform complex data into beautiful, actionable dashboards that drive decisions.',
    },
    {
      icon: FiBrain,
      title: 'Predict What\'s Next',
      description: 'Leverage AI and machine learning to forecast trends and optimize outcomes.',
    },
  ];

  const steps = [
    { number: '01', title: 'Diagnose', description: 'Assess your current data infrastructure' },
    { number: '02', title: 'Structure', description: 'Organize and clean your data sources' },
    { number: '03', title: 'Visualize', description: 'Create stunning dashboards and reports' },
    { number: '04', title: 'Empower', description: 'Train your team to make data-driven decisions' },
  ];

  const testimonials = [
    {
      quote: "DataBloom transformed our chaotic data into clear, actionable insights. Our decision-making speed improved by 300%.",
      author: "Sarah Chen",
      role: "VP of Operations, TechFlow",
    },
    {
      quote: "The dashboards they created are not just beautiful—they're game-changing. We finally understand our customers.",
      author: "Marcus Rodriguez",
      role: "CEO, GrowthLabs",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
              Unlock Insights.{' '}
              <span className="text-gradient">Fuel Growth.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-text-light/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help forward-thinking businesses turn messy data into meaningful 
              decisions through human-first analytics and stunning dashboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 glow-hover"
              >
                Let's Talk
              </Link>
              <Link
                to="/case-studies"
                className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-text-light/60 mb-8">Trusted by data-driven teams at:</p>
            <div className="flex justify-center items-center space-x-8 opacity-50">
              <div className="w-24 h-12 bg-text-light/20 rounded flex items-center justify-center">
                <span className="font-bold text-text-light/60">LOGO</span>
              </div>
              <div className="w-24 h-12 bg-text-light/20 rounded flex items-center justify-center">
                <span className="font-bold text-text-light/60">LOGO</span>
              </div>
              <div className="w-24 h-12 bg-text-light/20 rounded flex items-center justify-center">
                <span className="font-bold text-text-light/60">LOGO</span>
              </div>
              <div className="w-24 h-12 bg-text-light/20 rounded flex items-center justify-center">
                <span className="font-bold text-text-light/60">LOGO</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              What We Do
            </h2>
            <p className="text-xl text-text-light/70 max-w-2xl mx-auto">
              We transform your data chaos into clarity with three core capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glassmorphism rounded-xl p-8 hover:bg-muted/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-space font-semibold text-xl mb-4 text-text-light">
                  {feature.title}
                </h3>
                <p className="text-text-light/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              How We Work
            </h2>
            <p className="text-xl text-text-light/70 max-w-2xl mx-auto">
              Our proven 4-step process ensures your data transformation success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-space font-bold text-white text-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-space font-semibold text-xl mb-2 text-text-light">
                  {step.title}
                </h3>
                <p className="text-text-light/70 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glassmorphism rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiBarChart3} className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-text-light/70">Interactive Dashboard Preview</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-space font-bold text-3xl sm:text-4xl mb-6">
                Reducing SaaS Churn by{' '}
                <span className="text-gradient">27%</span>
              </h2>
              <p className="text-text-light/70 mb-6 text-lg leading-relaxed">
                How we helped a growing SaaS company identify at-risk customers 
                and implement targeted retention strategies through predictive analytics.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-text-light/70">27% reduction in customer churn</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-text-light/70">$2.3M in retained revenue</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-text-light/70">85% prediction accuracy</span>
                </li>
              </ul>
              <Link
                to="/case-studies"
                className="inline-flex items-center text-secondary hover:text-secondary/80 font-semibold transition-colors"
              >
                Read Full Story
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glassmorphism rounded-xl p-8"
              >
                <p className="text-text-light/80 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-text-light">{testimonial.author}</p>
                  <p className="text-text-light/60">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-6 text-white">
              Ready to turn your data into growth?
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your data landscape and drive measurable results.
            </p>
            <Link
              to="/contact"
              className="bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center"
            >
              Schedule a Call
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;