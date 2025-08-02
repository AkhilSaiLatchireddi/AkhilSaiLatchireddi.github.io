import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, Shield } from 'lucide-react';
import { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in cloud platforms, DevOps practices, and modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              {/* Certification Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {cert.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Issuing Authority */}
              <div className="mb-4">
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
                  {cert.issuingAuthority}
                </p>
                
                {/* Date Information */}
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span className={cert.expiryDate.includes('Expired') ? 'text-red-500' : 'text-green-500'}>
                        {cert.expiryDate}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                  Skills:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                {cert.credentialId && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium">ID:</span> {cert.credentialId}
                  </div>
                )}
                {cert.verificationUrl && (
                  <motion.a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-xs font-medium transition-colors duration-200"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
