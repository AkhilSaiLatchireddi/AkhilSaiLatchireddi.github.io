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
  { name: 'Amazon Web Services (AWS)', level: 90, category: 'cloud' },
  { name: 'Microsoft Azure', level: 70, category: 'cloud' },
  { name: 'Google Cloud Platform (GCP)', level: 60, category: 'cloud' },
  { name: 'Oracle Cloud Infrastructure (OCI)', level: 40, category: 'cloud' },
  { name: 'AWS Core Services', level: 95, category: 'cloud' },
  { name: 'Serverless', level: 92, category: 'cloud' },
  { name: 'API Gateway', level: 90, category: 'cloud' },
  { name: 'DynamoDB', level: 90, category: 'cloud' },
  
  // DevOps & Infrastructure
  { name: 'Kubernetes', level: 90, category: 'devops' },
  { name: 'EKS', level: 90, category: 'devops' },
  { name: 'GKE', level: 60, category: 'devops' },
  { name: 'Docker', level: 95, category: 'devops' },
  { name: 'ECS', level: 95, category: 'devops' },
  { name: 'Terraform', level: 100, category: 'devops' },
  { name: 'CloudFormation', level: 100, category: 'devops' },
  { name: 'Helm', level: 70, category: 'devops' },
  { name: 'Kustomize', level: 70, category: 'devops' },
  { name: 'Packer', level: 60, category: 'devops' },
  { name: 'Serverless Framework', level: 80, category: 'devops' },
  { name: 'AWS CDK', level: 80, category: 'devops' },
  { name: 'Boto3', level: 85, category: 'devops' },
  { name: 'Jenkins', level: 80, category: 'devops' },
  { name: 'GitLab CI', level: 70, category: 'devops' },
  { name: 'GitHub Actions', level: 90, category: 'devops' },
  { name: 'AWS Developer Tools', level: 90, category: 'devops' },
  { name: 'ArgoCD', level: 70, category: 'devops' },
  
  // Monitoring & Security
  { name: 'New Relic', level: 80, category: 'monitoring' },
  { name: 'Logz.io', level: 80, category: 'monitoring' },
  { name: 'Cribl', level: 85, category: 'monitoring' },
  { name: 'CloudWatch', level: 95, category: 'monitoring' },
  { name: 'Log Analytics', level: 60, category: 'monitoring' },
  { name: 'PagerDuty', level: 80, category: 'monitoring' },
  { name: 'Grafana', level: 60, category: 'monitoring' },
  { name: 'Prometheus', level: 70, category: 'monitoring' },
  { name: 'AquaSec', level: 70, category: 'monitoring' },
  { name: 'Checkmarx', level: 70, category: 'monitoring' },
  { name: 'HashiCorp Vault', level: 90, category: 'monitoring' },
  { name: 'KMS', level: 85, category: 'monitoring' },
  { name: 'WAF', level: 85, category: 'monitoring' },
  { name: 'SonarQube', level: 70, category: 'monitoring' },
  
  // Programming & Scripting
  { name: 'Python', level: 70, category: 'languages' },
  { name: 'Shell/Bash Scripting', level: 85, category: 'languages' },
  { name: 'Node.js', level: 70, category: 'languages' },
  { name: 'Groovy (Jenkins)', level: 70, category: 'languages' },
  
  // Tools & Platforms
  { name: 'GitLab', level: 95, category: 'tools' },
  { name: 'Bitbucket', level: 80, category: 'tools' },
  { name: 'GitHub', level: 95, category: 'tools' },
  { name: 'Jira', level: 90, category: 'tools' },
  { name: 'Confluence', level: 90, category: 'tools' },
  { name: 'ServiceNow', level: 60, category: 'tools' },
  { name: 'Slack', level: 90, category: 'tools' },
  { name: 'Microsoft Teams', level: 100, category: 'tools' },
  { name: 'Discord', level: 70, category: 'tools' },
  { name: 'Kong', level: 60, category: 'tools' },
  { name: 'Cloud Custodian', level: 70, category: 'tools' },
  { name: 'QuickSight', level: 60, category: 'tools' },
  
  // Frontend (for full-stack understanding)
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 70, category: 'frontend' },
  { name: 'HTML5', level: 85, category: 'frontend' },
  { name: 'CSS3', level: 80, category: 'frontend' },
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
