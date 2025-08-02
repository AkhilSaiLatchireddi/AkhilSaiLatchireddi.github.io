import { Project, Skill, SocialLink } from '../types';
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from 'lucide-react';
import { PERSONAL_CONFIG } from '../config/personal';

export const projects: Project[] = [
  {
    id: 'photo-vault',
    title: 'Photo Vault',
    description: 'Full-stack photo management application with React, Node.js, and MongoDB. Features include user authentication, image uploads, and admin dashboard.',
    technologies: ['React', 'Node.js', 'Python', 'Express', 'AWS S3', 'Machine Learning', 'AI', 'Github Actions', 'Terraform'],
    imageUrl: '/assets/project1.jpg',
    githubUrl: 'https://github.com/AkhilSaiLatchireddi/photo-vault',
    liveUrl: 'https://github.com/AkhilSaiLatchireddi/photo-vault',
    featured: true,
  },
  {
    id: 'gold-price-tracker',
    title: 'Gold Price Tracker',
    description: 'A real-time gold price tracking application with historical data visualization.',
    technologies: ['Python', 'TypeScript', 'Node.js', 'Machine Learning', 'AI', 'Github Actions', 'Terraform'],
    imageUrl: '/assets/project2.jpg',
    githubUrl: 'https://github.com/AkhilSaiLatchireddi/gold-prices-tracker',
    liveUrl: 'https://github.com/AkhilSaiLatchireddi/gold-prices-tracker',
    featured: true,
  },
];

export const skills: Skill[] = [
  // Cloud Platforms & Services
  { name: 'Amazon Web Services (AWS)', level: 90, category: 'Cloud' },
  { name: 'Microsoft Azure', level: 70, category: 'Cloud' },
  { name: 'Google Cloud Platform (GCP)', level: 60, category: 'Cloud' },
  { name: 'Oracle Cloud Infrastructure (OCI)', level: 40, category: 'Cloud' },
  // Container Orchestration
  { name: 'Kubernetes', level: 90, category: 'Container Orchestration' },
  { name: 'EKS', level: 90, category: 'Container Orchestration' },
  { name: 'GKE', level: 60, category: 'Container Orchestration' },
  { name: 'Docker', level: 95, category: 'Container Orchestration' },
  { name: 'ECS', level: 95, category: 'Container Orchestration' },
  // Infrastructure as Code
  { name: 'Terraform', level: 100, category: 'Infrastructure as Code' },
  { name: 'CloudFormation', level: 100, category: 'Infrastructure as Code' },
  { name: 'Helm', level: 70, category: 'Infrastructure as Code Tools' },
  { name: 'Kustomize', level: 70, category: 'Infrastructure as Code Tools' },
  { name: 'Packer', level: 60, category: 'Infrastructure as Code Tools' },
  { name: 'Serverless Framework', level: 80, category: 'Infrastructure as Code' },
  { name: 'AWS CDK', level: 80, category: 'Infrastructure as Code' },
  { name: 'Boto3', level: 85, category: 'Infrastructure as Code' },
  // Development & CI/CD Tools
  { name: 'Jenkins', level: 80, category: 'CI Tools' },
  { name: 'GitLab CI', level: 70, category: 'CI Tools' },
  { name: 'GitHub Actions', level: 90, category: 'CI Tools' },
  { name: 'AWS Developer Tools', level: 90, category: 'CI Tools' },
  // Programming & Scripting
  { name: 'Python', level: 70, category: 'languages' },
  { name: 'Shell/Bash Scripting', level: 85, category: 'languages' },
  { name: 'Node.js', level: 70, category: 'languages' },
  { name: 'Groovy (Jenkins)', level: 70, category: 'languages' },
  // Collaboration & Documentation
  { name: 'Jira', level: 90, category: 'collaboration' },
  { name: 'Confluence', level: 90, category: 'collaboration' },
  { name: 'ServiceNow', level: 60, category: 'collaboration' },
  { name: 'Slack', level: 90, category: 'collaboration' },
  { name: 'Microsoft Teams', level: 100, category: 'collaboration' },
  { name: 'Discord', level: 70, category: 'collaboration' },
  // Security & Code Quality
  { name: 'AquaSec', level: 70, category: 'security' },
  { name: 'Checkmarx', level: 70, category: 'security' },
  { name: 'HashiCorp Vault', level: 90, category: 'security' },
  { name: 'KMS', level: 85, category: 'security' },
  { name: 'WAF', level: 85, category: 'security' },
  { name: 'SonarQube', level: 70, category: 'security' },
  // Monitoring & Logging
  { name: 'New Relic', level: 80, category: 'monitoring' },
  { name: 'Logz.io', level: 80, category: 'monitoring' },
  { name: 'Cribl', level: 85, category: 'monitoring' },
  { name: 'CloudWatch', level: 95, category: 'monitoring' },
  { name: 'Log Analytics', level: 60, category: 'monitoring' },
  { name: 'PagerDuty', level: 80, category: 'monitoring' },
  { name: 'Grafana', level: 60, category: 'monitoring' },
  { name: 'Prometheus', level: 70, category: 'monitoring' },
  // Source Code Management
  { name: 'GitLab', level: 95, category: 'scm' },
  { name: 'Bitbucket', level: 80, category: 'scm' },
  { name: 'GitHub', level: 95, category: 'scm' },
  // AWS/Cloud Services
  { name: 'AWS Core Services', level: 95, category: 'aws-services' },
  { name: 'Serverless', level: 92, category: 'aws-services' },
  { name: 'API Gateway', level: 90, category: 'aws-services' },
  { name: 'DynamoDB', level: 90, category: 'aws-services' },
  // Additional Tools
  { name: 'Kong', level: 60, category: 'tools' },
  { name: 'Cloud Custodian', level: 70, category: 'tools' },
  { name: 'QuickSight', level: 60, category: 'tools' },
];

// Dynamic social links from config
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: PERSONAL_CONFIG.social.github,
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: PERSONAL_CONFIG.social.linkedin,
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: PERSONAL_CONFIG.social.twitter,
    icon: Twitter,
  },
  {
    name: 'Email',
    href: `mailto:${PERSONAL_CONFIG.contact.email}`,
    icon: Mail,
  },
];

// Dynamic contact information
export const contactInfo = [
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

export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];
