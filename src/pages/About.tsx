import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Database, Globe, Wrench, Cloud, Activity } from 'lucide-react';
import { skills } from '../utils/constants';
import { PERSONAL_CONFIG } from '../config/personal';

const About: React.FC = () => {
  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  const skillCategories = [
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: getSkillsByCategory('cloud'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Monitoring',
      icon: Activity,
      skills: getSkillsByCategory('monitoring'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: getSkillsByCategory('tools'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Languages',
      icon: Code,
      skills: getSkillsByCategory('languages'),
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: getSkillsByCategory('frontend'),
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {PERSONAL_CONFIG.about.fullBio[0]}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {PERSONAL_CONFIG.about.fullBio[1]}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {PERSONAL_CONFIG.about.fullBio[2]}
              </p>
              <motion.a
                href={PERSONAL_CONFIG.professional.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={PERSONAL_CONFIG.profileImage}
                  alt={PERSONAL_CONFIG.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                <Code className="w-full h-full text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's a comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                            className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in technology and continuous learning
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
            
            {PERSONAL_CONFIG.experience.map((item, index) => {
              const side = index % 2 === 0 ? 'left' : 'right';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    side === 'left' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <div className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                        {item.company}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Beyond Coding
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              When I'm not immersed in code, here's what keeps me motivated and inspired
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PERSONAL_CONFIG.about.interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
