import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiCheck } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-16">
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
              Let's Talk <span className="text-gradient">Data</span>
            </h1>
            <p className="text-xl text-text-light/70 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your data into your competitive advantage? 
              We'd love to hear about your challenges and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism rounded-xl p-8"
            >
              <h2 className="font-space font-bold text-3xl mb-6 text-text-light">
                Send us a message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-space font-semibold text-xl mb-2 text-text-light">
                    Message Sent!
                  </h3>
                  <p className="text-text-light/70">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-text-light/80 mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted/50 border border-muted rounded-lg px-4 py-3 text-text-light placeholder-text-light/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-text-light/80 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted/50 border border-muted rounded-lg px-4 py-3 text-text-light placeholder-text-light/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-text-light/80 mb-2 font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-muted rounded-lg px-4 py-3 text-text-light placeholder-text-light/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-text-light/80 mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-muted/50 border border-muted rounded-lg px-4 py-3 text-text-light placeholder-text-light/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your data challenges and goals..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/80 text-white py-3 rounded-lg font-semibold transition-all duration-200 glow-hover"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-space font-bold text-3xl mb-6 text-text-light">
                  Get in touch
                </h2>
                <p className="text-text-light/70 text-lg leading-relaxed mb-8">
                  We're here to help you unlock the full potential of your data. 
                  Whether you're just starting your analytics journey or looking to 
                  optimize existing systems, we'd love to chat.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-text-light">Email</p>
                    <p className="text-text-light/70">hello@databloom.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-text-light">Phone</p>
                    <p className="text-text-light/70">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-text-light">Office</p>
                    <p className="text-text-light/70">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-muted">
                <h3 className="font-space font-semibold text-xl mb-4 text-text-light">
                  Follow us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/databloom"
                    className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                  >
                    <SafeIcon icon={FiLinkedin} className="w-6 h-6 text-text-light/70 hover:text-secondary" />
                  </a>
                  <a
                    href="https://twitter.com/databloom"
                    className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                  >
                    <SafeIcon icon={FiTwitter} className="w-6 h-6 text-text-light/70 hover:text-secondary" />
                  </a>
                </div>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h3 className="font-space font-semibold text-xl mb-3 text-text-light">
                  Response Time
                </h3>
                <p className="text-text-light/70 mb-2">
                  We typically respond within 24 hours during business days.
                </p>
                <p className="text-text-light/70">
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-text-light/70">
              Quick answers to help you get started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism rounded-xl p-6"
            >
              <h3 className="font-space font-semibold text-lg mb-3 text-text-light">
                How do we get started?
              </h3>
              <p className="text-text-light/70 text-sm">
                Simply reach out through this form or email us. We'll schedule a 
                discovery call to understand your needs and propose a solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glassmorphism rounded-xl p-6"
            >
              <h3 className="font-space font-semibold text-lg mb-3 text-text-light">
                What's the typical timeline?
              </h3>
              <p className="text-text-light/70 text-sm">
                Most projects take 4-12 weeks depending on complexity. We'll provide 
                a detailed timeline after understanding your requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glassmorphism rounded-xl p-6"
            >
              <h3 className="font-space font-semibold text-lg mb-3 text-text-light">
                Do you offer ongoing support?
              </h3>
              <p className="text-text-light/70 text-sm">
                Yes, we offer various support packages including maintenance, 
                training, and optimization services to ensure long-term success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glassmorphism rounded-xl p-6"
            >
              <h3 className="font-space font-semibold text-lg mb-3 text-text-light">
                What industries do you serve?
              </h3>
              <p className="text-text-light/70 text-sm">
                We work with businesses across all industries including SaaS, 
                e-commerce, healthcare, finance, and more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;