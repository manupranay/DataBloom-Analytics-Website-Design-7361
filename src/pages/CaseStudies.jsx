import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiShoppingCart, FiHeart, FiFilter, FiX, FiArrowRight } = FiIcons;

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  const filters = ['All', 'SaaS', 'E-commerce', 'Healthcare', 'Finance'];

  const caseStudies = [
    {
      id: 1,
      title: 'Reducing SaaS Churn by 27%',
      industry: 'SaaS',
      icon: FiTrendingUp,
      summary: 'Predictive analytics helped identify at-risk customers and implement targeted retention strategies.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      metrics: ['27% reduction in churn', '$2.3M retained revenue', '85% prediction accuracy'],
      challenge: 'TechFlow, a growing SaaS company, was experiencing high customer churn rates of 15% monthly, significantly impacting their growth trajectory and revenue predictability.',
      solution: 'We implemented a comprehensive predictive analytics system that analyzed user behavior patterns, engagement metrics, and support interactions to identify customers at risk of churning. The system provided early warning signals and automated personalized retention campaigns.',
      results: 'Within 6 months, TechFlow reduced their churn rate from 15% to 11%, resulting in $2.3M in retained annual revenue. The predictive model achieved 85% accuracy in identifying at-risk customers 30 days before churn.',
      testimonial: {
        quote: "DataBloom's predictive analytics transformed our customer retention strategy. We can now proactively address customer concerns before they decide to leave.",
        author: "Sarah Johnson, CEO of TechFlow"
      }
    },
    {
      id: 2,
      title: 'Boosting E-commerce Revenue by 35%',
      industry: 'E-commerce',
      icon: FiShoppingCart,
      summary: 'Advanced recommendation engine and customer segmentation drove significant revenue growth.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      metrics: ['35% revenue increase', '45% higher conversion', '2.8x average order value'],
      challenge: 'RetailMax was struggling with low conversion rates and needed to better understand customer behavior to optimize their product recommendations and marketing efforts.',
      solution: 'We developed a sophisticated recommendation engine using collaborative filtering and machine learning algorithms. Combined with detailed customer segmentation analysis, we created personalized shopping experiences and targeted marketing campaigns.',
      results: 'RetailMax saw a 35% increase in overall revenue, with conversion rates improving by 45%. The average order value increased by 2.8x through better product recommendations and cross-selling strategies.',
      testimonial: {
        quote: "The recommendation system DataBloom built for us is like having a personal shopping assistant for every customer. Our revenue has never been higher.",
        author: "Michael Chen, VP of Marketing at RetailMax"
      }
    },
    {
      id: 3,
      title: 'Optimizing Patient Care Efficiency',
      industry: 'Healthcare',
      icon: FiHeart,
      summary: 'Data-driven insights improved patient outcomes and reduced operational costs.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      metrics: ['40% faster diagnosis', '25% cost reduction', '95% patient satisfaction'],
      challenge: 'HealthCare Plus needed to optimize their patient flow and resource allocation while maintaining high-quality care standards.',
      solution: 'We implemented a comprehensive analytics dashboard that tracked patient flow, resource utilization, and clinical outcomes. Machine learning models predicted patient needs and optimized staff scheduling.',
      results: 'The hospital reduced average diagnosis time by 40%, cut operational costs by 25%, and achieved 95% patient satisfaction scores through improved care coordination.',
      testimonial: {
        quote: "DataBloom's analytics platform has revolutionized how we deliver patient care. We can now make data-driven decisions that improve both outcomes and efficiency.",
        author: "Dr. Lisa Rodriguez, Chief Medical Officer"
      }
    },
    {
      id: 4,
      title: 'Fraud Detection System',
      industry: 'Finance',
      icon: FiTrendingUp,
      summary: 'Real-time fraud detection reduced losses by 60% while improving customer experience.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      metrics: ['60% fraud reduction', '0.1% false positive rate', '2s detection time'],
      challenge: 'SecureBank was facing increasing fraud attempts and needed a sophisticated system to detect fraudulent transactions in real-time without impacting legitimate customers.',
      solution: 'We developed an AI-powered fraud detection system using ensemble machine learning models that analyze transaction patterns, user behavior, and risk factors in real-time.',
      results: 'The system reduced fraud losses by 60% while maintaining a false positive rate of only 0.1%. Detection time was reduced to under 2 seconds, significantly improving customer experience.',
      testimonial: {
        quote: "The fraud detection system has been a game-changer for us. We're catching more fraud while our customers enjoy smoother transactions.",
        author: "James Wilson, Head of Risk Management"
      }
    },
  ];

  const filteredCases = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-space font-bold text-5xl sm:text-6xl mb-6">
              Case <span className="text-gradient">Studies</span>
            </h1>
            <p className="text-xl text-text-light/70 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses. See how we've helped companies 
              transform their data into competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-secondary text-white'
                    : 'bg-muted/50 text-text-light hover:bg-muted'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden hover:bg-muted/30 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCase(study)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                      {study.industry}
                    </span>
                    <SafeIcon icon={study.icon} className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-space font-semibold text-xl mb-3 text-text-light">
                    {study.title}
                  </h3>
                  <p className="text-text-light/70 mb-4 leading-relaxed">
                    {study.summary}
                  </p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-text-light/60">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-secondary font-medium">
                    Read Full Story
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCase && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-primary rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors z-10"
              >
                <SafeIcon icon={FiX} className="w-6 h-6 text-text-light" />
              </button>
              
              <div className="h-64 overflow-hidden">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                    {selectedCase.industry}
                  </span>
                  <SafeIcon icon={selectedCase.icon} className="w-8 h-8 text-secondary" />
                </div>
                
                <h2 className="font-space font-bold text-3xl mb-4 text-text-light">
                  {selectedCase.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {selectedCase.metrics.map((metric, idx) => (
                    <div key={idx} className="glassmorphism rounded-lg p-4 text-center">
                      <p className="text-secondary font-semibold">{metric}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-space font-semibold text-xl mb-3 text-text-light">
                      The Challenge
                    </h3>
                    <p className="text-text-light/70 leading-relaxed">
                      {selectedCase.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-space font-semibold text-xl mb-3 text-text-light">
                      Our Solution
                    </h3>
                    <p className="text-text-light/70 leading-relaxed">
                      {selectedCase.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-space font-semibold text-xl mb-3 text-text-light">
                      Results
                    </h3>
                    <p className="text-text-light/70 leading-relaxed">
                      {selectedCase.results}
                    </p>
                  </div>
                  
                  <div className="glassmorphism rounded-lg p-6">
                    <p className="text-text-light/80 italic mb-4">
                      "{selectedCase.testimonial.quote}"
                    </p>
                    <p className="text-secondary font-medium">
                      — {selectedCase.testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-6 text-white">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with your data.
            </p>
            <button className="bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center">
              Start Your Transformation
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;