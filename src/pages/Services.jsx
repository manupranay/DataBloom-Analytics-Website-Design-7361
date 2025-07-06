import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiBarChart3, FiBrain, FiCpu, FiUsers, FiPlus, FiMinus, FiArrowRight } = FiIcons;

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: FiTarget,
      title: 'Data Strategy',
      description: 'Comprehensive data strategy development aligned with your business objectives.',
      features: ['Data audit & assessment', 'Roadmap development', 'KPI definition', 'Governance framework'],
      price: 'Starting at $15k',
    },
    {
      icon: FiBarChart3,
      title: 'Dashboard Design',
      description: 'Beautiful, intuitive dashboards that make complex data accessible to everyone.',
      features: ['Custom dashboard design', 'Interactive visualizations', 'Mobile optimization', 'Real-time updates'],
      price: 'Starting at $8k',
    },
    {
      icon: FiBrain,
      title: 'Predictive Modeling',
      description: 'Advanced analytics and machine learning to forecast trends and outcomes.',
      features: ['Predictive algorithms', 'Churn prediction', 'Demand forecasting', 'Risk assessment'],
      price: 'Starting at $25k',
    },
    {
      icon: FiCpu,
      title: 'AI/ML Integration',
      description: 'Seamless integration of artificial intelligence into your existing workflows.',
      features: ['Custom AI solutions', 'Model deployment', 'API development', 'Performance monitoring'],
      price: 'Starting at $35k',
    },
    {
      icon: FiUsers,
      title: 'Training & Onboarding',
      description: 'Comprehensive training programs to empower your team with data literacy.',
      features: ['Team workshops', 'Best practices training', 'Ongoing support', 'Documentation'],
      price: 'Starting at $5k',
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. Dashboard projects typically take 4-6 weeks, while comprehensive data strategy initiatives can take 3-6 months. We always provide detailed timelines during the discovery phase.',
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our solutions are scalable and can be tailored to fit your budget and requirements.',
    },
    {
      question: 'What tools and technologies do you use?',
      answer: 'We use industry-leading tools including Tableau, Power BI, Python, R, SQL, and cloud platforms like AWS and Azure. We select the best tools based on your specific needs and existing infrastructure.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various support packages including maintenance, updates, and optimization services. We believe in building long-term partnerships with our clients.',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'We specialize in working with existing data infrastructure and can integrate with most popular systems including CRMs, ERPs, databases, and cloud platforms.',
    },
  ];

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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-text-light/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive data analytics services designed to transform your business 
              through intelligent insights and beautiful visualizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-8 hover:bg-muted/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-space font-semibold text-xl mb-4 text-text-light">
                  {service.title}
                </h3>
                <p className="text-text-light/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-text-light/60 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-muted/50 pt-6">
                  <p className="text-secondary font-semibold mb-4">{service.price}</p>
                  <Link
                    to="/contact"
                    className="w-full bg-secondary/20 hover:bg-secondary text-secondary hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              Our Process
            </h2>
            <p className="text-xl text-text-light/70 max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business goals and data landscape' },
              { step: '02', title: 'Strategy', desc: 'Develop a comprehensive plan tailored to your needs' },
              { step: '03', title: 'Implementation', desc: 'Execute the solution with precision and care' },
              { step: '04', title: 'Optimization', desc: 'Continuously improve and refine for maximum impact' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-space font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-space font-semibold text-xl mb-2 text-text-light">
                  {item.title}
                </h3>
                <p className="text-text-light/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-light/70">
              Everything you need to know about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <span className="font-space font-semibold text-text-light">
                    {faq.question}
                  </span>
                  <SafeIcon
                    icon={openFaq === index ? FiMinus : FiPlus}
                    className="w-5 h-5 text-secondary"
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-text-light/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your data challenges and create a solution that drives real results.
            </p>
            <Link
              to="/contact"
              className="bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center"
            >
              Start Your Project
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;