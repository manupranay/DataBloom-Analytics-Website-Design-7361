import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLinkedin, FiTwitter, FiGithub } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DB</span>
              </div>
              <span className="font-space font-bold text-xl text-text-light">
                DataBloom Analytics
              </span>
            </div>
            <p className="text-text-light/70 mb-6 max-w-md">
              We help forward-thinking businesses turn messy data into meaningful 
              decisions through human-first analytics and stunning dashboards.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@databloom.com"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5 text-text-light/70 hover:text-secondary" />
              </a>
              <a
                href="https://linkedin.com/company/databloom"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5 text-text-light/70 hover:text-secondary" />
              </a>
              <a
                href="https://twitter.com/databloom"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5 text-text-light/70 hover:text-secondary" />
              </a>
              <a
                href="https://github.com/databloom"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <SafeIcon icon={FiGithub} className="w-5 h-5 text-text-light/70 hover:text-secondary" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-space font-semibold text-text-light mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-light/70 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-light/70 hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-text-light/70 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-text-light/70 hover:text-secondary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-light/70 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-space font-semibold text-text-light mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-text-light/70">Data Strategy</span>
              </li>
              <li>
                <span className="text-text-light/70">Dashboard Design</span>
              </li>
              <li>
                <span className="text-text-light/70">Predictive Modeling</span>
              </li>
              <li>
                <span className="text-text-light/70">AI/ML Integration</span>
              </li>
              <li>
                <span className="text-text-light/70">Training & Onboarding</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-text-light/70">
            © {currentYear} DataBloom Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;