import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

export interface Skill {
  name: string;
  level: number;
  category: 'cloud' | 'devops' | 'monitoring' | 'languages' | 'tools' | 'frontend';
}

export interface Certification {
  name: string;
  issuingAuthority: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
}
