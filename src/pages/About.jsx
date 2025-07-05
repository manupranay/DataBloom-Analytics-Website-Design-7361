import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiUsers, FiTrendingUp, FiHeart, FiEye, FiZap } = FiIcons;

const About = () => {
  const timeline = [
    { year: '2019', event: 'DataBloom Analytics founded with a vision to democratize data insights' },
    { year: '2020', event: 'Launched our first AI-powered analytics platform' },
    { year: '2021', event: 'Expanded team to 25+ data scientists and engineers' },
    { year: '2022', event: 'Reached 100+ successful client transformations' },
    { year: '2023', event: 'Introduced predictive modeling services' },
    { year: '2024', event: 'Leading the industry in human-first analytics' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former data scientist at Google with 10+ years in analytics.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Microsoft engineer specializing in machine learning infrastructure.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      bio: 'Award-winning designer focused on making data beautiful and accessible.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'David Kim',
      role: 'Lead Data Scientist',
      bio: 'PhD in Statistics with expertise in predictive modeling and AI.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
  ];

  const values = [
    {
      icon: FiEye,
      title: 'Clarity',
      description: 'We believe complex data should tell simple, clear stories that anyone can understand.',
    },
    {
      icon: FiHeart,
      title: 'Human-First Analytics',
      description: 'Technology serves people, not the other way around. We design for humans first.',
    },
    {
      icon: FiZap,
      title: 'Design-Driven Thinking',
      description: 'Beautiful, intuitive design isn\'t just nice to have—it\'s essential for adoption.',
    },
  ];

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
              About <span className="text-gradient">DataBloom</span>
            </h1>
            <p className="text-xl text-text-light/70 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make data analytics accessible, beautiful, and actionable 
              for every business, regardless of size or technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-space font-bold text-3xl sm:text-4xl mb-6">
                Our Story
              </h2>
              <p className="text-text-light/70 mb-6 text-lg leading-relaxed">
                DataBloom was born from a simple observation: most businesses were drowning in data 
                but starving for insights. Traditional analytics tools were either too complex for 
                everyday users or too simplistic for meaningful analysis.
              </p>
              <p className="text-text-light/70 mb-6 text-lg leading-relaxed">
                Our founders, Sarah and Marcus, experienced this firsthand while working at tech giants. 
                They saw brilliant teams struggling with clunky dashboards and unintuitive interfaces, 
                making critical decisions based on gut feelings rather than data.
              </p>
              <p className="text-text-light/70 text-lg leading-relaxed">
                So they set out to build something different—analytics that puts humans first, 
                design that makes data delightful, and insights that drive real business impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-space font-bold text-secondary">{item.year}</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-text-light/70">{item.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-light/70 max-w-2xl mx-auto">
              The brilliant minds behind DataBloom's human-first approach to analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-6 text-center hover:bg-muted/30 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-space font-semibold text-xl mb-2 text-text-light">
                  {member.name}
                </h3>
                <p className="text-secondary mb-3 font-medium">{member.role}</p>
                <p className="text-text-light/70 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-space font-bold text-4xl sm:text-5xl mb-4">
              Our Values
            </h2>
            <p className="text-xl text-text-light/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glassmorphism rounded-xl p-8 text-center hover:bg-muted/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-space font-semibold text-xl mb-4 text-text-light">
                  {value.title}
                </h3>
                <p className="text-text-light/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-space font-bold text-gradient mb-2">150+</div>
              <p className="text-text-light/70">Successful Projects</p>
            </div>
            <div>
              <div className="text-4xl font-space font-bold text-gradient mb-2">$50M+</div>
              <p className="text-text-light/70">Value Generated</p>
            </div>
            <div>
              <div className="text-4xl font-space font-bold text-gradient mb-2">98%</div>
              <p className="text-text-light/70">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;