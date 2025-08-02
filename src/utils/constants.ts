import { Project, Skill, SocialLink } from '../types';
import { Github, Linkedin, Mail, Twitter, MapPin, Phone } from 'lucide-react';
import { PERSONAL_CONFIG } from '../config/personal';

export const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    imageUrl: '/assets/project1.jpg',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.netlify.app',
    featured: true,
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    imageUrl: '/assets/project2.jpg',
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://task-manager-demo.netlify.app',
    featured: true,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.',
    technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
    imageUrl: '/assets/project3.jpg',
    githubUrl: 'https://github.com/username/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.netlify.app',
    featured: false,
  },
];

export const skills: Skill[] = [
  // Cloud & DevOps
  { name: 'AWS', level: 95, category: 'cloud' },
  { name: 'Docker', level: 90, category: 'cloud' },
  { name: 'Kubernetes', level: 85, category: 'cloud' },
  { name: 'Terraform', level: 88, category: 'cloud' },
  { name: 'Jenkins', level: 85, category: 'cloud' },
  { name: 'GitLab CI/CD', level: 80, category: 'cloud' },
  
  // Monitoring & Security
  { name: 'Prometheus', level: 82, category: 'monitoring' },
  { name: 'Grafana', level: 80, category: 'monitoring' },
  { name: 'ELK Stack', level: 75, category: 'monitoring' },
  { name: 'Datadog', level: 70, category: 'monitoring' },
  
  // Scripting & Automation
  { name: 'Python', level: 90, category: 'languages' },
  { name: 'Bash', level: 95, category: 'languages' },
  { name: 'PowerShell', level: 75, category: 'languages' },
  { name: 'Go', level: 70, category: 'languages' },
  
  // Tools & Platforms
  { name: 'Git', level: 95, category: 'tools' },
  { name: 'Linux', level: 92, category: 'tools' },
  { name: 'Ansible', level: 85, category: 'tools' },
  { name: 'Helm', level: 80, category: 'tools' },
  { name: 'ArgoCD', level: 75, category: 'tools' },
  
  // Frontend (for full-stack understanding)
  { name: 'React', level: 75, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 70, category: 'frontend' },
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
