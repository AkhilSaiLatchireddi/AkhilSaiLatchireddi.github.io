import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader, ExternalLink } from 'lucide-react';
import { createGitHubIssue, validateContactForm } from '../utils/github';
import { ContactFormData } from '../types';
import { PERSONAL_CONFIG } from '../config/personal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateContactForm(formData);
    if (errors.length > 0) {
      setSubmitStatus({
        type: 'error',
        message: errors.join(', '),
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await createGitHubIssue(formData);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: PERSONAL_CONFIG.contact.email,
      href: `mailto:${PERSONAL_CONFIG.contact.email}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: PERSONAL_CONFIG.contact.phone,
      href: `tel:${PERSONAL_CONFIG.contact.phone.replace(/\D/g, '')}`,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: PERSONAL_CONFIG.contact.location,
      href: '#',
    },
  ];

  const socialLinksLocal = [
    {
      icon: Github,
      name: 'GitHub',
      href: PERSONAL_CONFIG.social.github,
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: PERSONAL_CONFIG.social.linkedin,
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: PERSONAL_CONFIG.social.twitter,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities, collaborations, and exciting projects.
              Feel free to reach out if you'd like to work together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Send me a message
                </h2>
                
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Github className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>GitHub Issues Integration:</strong> This form will create a GitHub issue in my portfolio repository with your message pre-filled, allowing for transparent communication and better tracking of our conversation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center p-4 rounded-lg ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                          : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                      }`}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle size={20} className="mr-2" />
                      ) : (
                        <AlertCircle size={20} className="mr-2" />
                      )}
                      <span className="text-sm">{submitStatus.message}</span>
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Github size={20} className="mr-2" />
                        Create GitHub Issue
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.a
                        key={info.title}
                        href={info.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinksLocal.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200"
                        aria-label={social.name}
                      >
                        <IconComponent size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Let's work together!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I'm currently available for freelance work and always interested
                  in discussing new opportunities.
                </p>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">{PERSONAL_CONFIG.professional.availability}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
