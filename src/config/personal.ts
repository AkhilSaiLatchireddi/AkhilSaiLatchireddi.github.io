// Personal Configuration - Update all your information here
export const PERSONAL_CONFIG = {
  // Basic Information
  name: 'Akhil Sai Latchireddi',
  firstName: 'Akhil Sai Latchireddi',
  title: 'Senior DevOps Engineer II at SurveyMonkey',
  tagline: 'Senior DevOps Engineer with 8+ years of experience specializing in cloud platforms (AWS, GCP, Azure) and CI/CD automation. Expert in designing scalable architectures and implementing efficient deployment workflows with a focus on security and cost optimization.',
  profileImage: '/assets/AkhilDP2.jpeg', // Your profile photo

  // Contact Information
  contact: {
    email: 'latchireddiakhilsai@gmail.com',
    phone: '*******',
    location: 'Bengaluru, India',
  },
  
  // Social Media Links
  social: {
    github: 'https://github.com/AkhilSaiLatchireddi',
    linkedin: 'https://linkedin.com/in/akhilsailatchireddi',
    twitter: 'https://x.com/akhil_sai_l',
    instagram: '', // Optional
    youtube: '', // Optional
    website: 'https://akhilsailatchireddi.github.io',
  },
  
  // Professional Information
  professional: {
    yearsOfExperience: 8,
    currentRole: 'Senior DevOps Engineer',
    currentCompany: 'SurveyMonkey',
    resumeUrl: '/assets/Akhil-Resume-Q1-2025.pdf', // Your actual resume
    availability: 'Available for projects',
    isAvailableForWork: true,
  },
  
  // About Section
  about: {
    shortBio: "Passionate Senior DevOps Engineer with 8+ years of expertise in multi-cloud platforms (AWS, GCP, Azure, OCI) and CI/CD automation. Passionate about designing scalable architectures and implementing secure, efficient deployment workflows.",
    fullBio: [
      "Experienced DevOps Engineer with 8+ years of robust background in managing and deploying applications across multiple cloud platforms including AWS, GCP, Azure, and OCI. Proficient in wide range of DevOps tools for CI/CD, monitoring, security, and cost optimization.",
      "Proven ability to design and implement complex architectures, automate deployment workflows, and support development teams in achieving efficient and secure deployments. Holding multiple Professional Certifications in Cloud & DevOps, and utilizing Agile methodologies to drive successful project outcomes.",
      "When not architecting cloud solutions, I focus on enhancing security practices, optimizing costs, and mentoring teams in DevOps best practices. Always seeking opportunities to leverage cutting-edge technologies in dynamic environments."
    ],
    interests: [
      {
        title: 'Open Source',
        description: 'Contributing to and leveraging open source projects to enhance DevOps practices and community collaboration.',
        icon: '🌐',
      },
      {
        title: 'full-stack Development',
        description: 'Building full-stack applications with modern web technologies to enhance user experiences and streamline workflows.',
        icon: '🤖',
      },
      {
        title: 'AI & Machine Learning',
        description: 'Building AI/ML models and integrating them into CI/CD pipelines to enhance automation and predictive capabilities.',
        icon: '🤖',
      },
      {
        title: 'Monitoring & Observability',
        description: 'Implementing comprehensive monitoring solutions to ensure system reliability and performance.',
        icon: '📊',
      },
    ],
  },
  
  // SEO and Meta Information
  seo: {
    siteName: 'Akhil Sai Latchireddi - Portfolio',
    siteDescription: 'Senior DevOps Engineer specializing in cloud infrastructure, CI/CD, and modern web technologies. Available for freelance projects and full-time opportunities.',
    keywords: ['Senior DevOps Engineer', 'DevOps', 'Cloud Infrastructure', 'CI/CD', 'AWS', 'Docker', 'Kubernetes', 'Software Engineer'],
    author: 'Akhil Sai Latchireddi',
    image: '/assets/AkhilDP2.jpeg', // Your actual profile image
  },
  
  // Experience Timeline
  experience: [
    {
      year: '2025-Present',
      title: 'Senior DevOps Engineer',
      company: 'SurveyMonkey',
      description: 'Leading DevOps initiatives, and implementing CI/CD pipelines with Github Actions for various projects.',
      type: 'work', // 'work' or 'education'
    },
    {
      year: '2022-2025',
      title: 'Lead DevOps Engineer (Enterprise DevOps & Cloud Engineering)',
      company: '7-Eleven',
      description: 'Led end-to-end DevOps initiatives including managing Jenkins pipelines for multiple technologies (Java, Node.js, Python, .NET, Go, Angular) using various build tools. Implemented security scanning with AquaSec, Checkmarx, and SonarQube. Architected cloud infrastructure across AWS, GCP, and Azure, including Kong Aurora Global DB implementation and Kubernetes upgrades. Established robust monitoring with Cribl and Logz.io, and implemented cost optimization through AWS Service Control Policies and CUDOS dashboards. Designed cross-cloud network architecture with TGWs, BGWs, and Palo Alto firewalls.',
      type: 'work',
    },
    {
      year: '2022',
      title: 'Senior Platform Engineer',
      company: 'Quantiphi',
      description: 'Implemented CI/CD pipelines with GitLab and CodeDeploy, enhanced security with WAF and GuardDuty. Set up Sumo Logic monitoring for ECS and Glue applications, and utilized Amazon Macie for sensitive data discovery. Developed automation for Glue job monitoring and AWS resource auto-tagging. Established disaster recovery solutions and deployed microservices using ECS, Lambda, Glue, Step Functions, and Aurora Serverless Global Databases.',
      type: 'work',
    },
    {
      year: '2021-2022',
      title: 'Senior Cloud Developer',
      company: 'Tata Consultancy Services',
      description: 'Led cloud migration for 67 AWS accounts and implemented AWS Organizations, Control Tower, and SSO. Enhanced security through custom SCPs and established Service Catalog products using CloudFormation. Developed and maintained cross-cloud infrastructure using Terraform modules for AWS and GCP, including version control and upgrades. Automated ECS and EKS cluster ASG updates using SSM and Lambda.',
      type: 'work',
    },
    {
      year: '2018-2021',
      title: 'Cloud Developer',
      company: 'Wipro Technologies',
      description: 'Implemented Agile methodologies in Azure DevOps for cloud migration projects. Developed cloud strategies using AWS Well-Architected Framework and 6R migration approach. Transformed monolithic applications to service-oriented and serverless architectures. Drove cost optimization, capacity planning, and security improvements using AWS Trusted Advisor. Implemented infrastructure as code using CloudFormation.',
      type: 'work',
    },
    {
      year: '2014-2018',
      title: 'Bachelor of Technology',
      company: 'Jawaharlal Nehru Technological University',
      description: 'Completed Bachelor of Technology',
      type: 'education',
    },
  ],
  
  // Certifications
  certifications: [
    {
      name: 'Cloud Technical Series AI Deep Dive',
      issuingAuthority: 'Google Cloud Asia Pacific',
      issueDate: 'Feb 2025',
      credentialId: '133128803',
      skills: ['Artificial Intelligence (AI)', 'Google Cloud Platform (GCP)'],
      description: 'Advanced certification focusing on AI technologies and deep dive into Google Cloud AI services.',
    },
    {
      name: 'LFS169: Introduction to GitOps',
      issuingAuthority: 'The Linux Foundation',
      issueDate: 'Feb 2025',
      credentialId: 'LF-t83kckupwo',
      skills: ['GitOps', 'ArgoCD', 'Flux', 'Kubernetes'],
      description: 'Comprehensive introduction to GitOps principles, tools, and best practices for Kubernetes deployments.',
    },
    {
      name: 'Microsoft AI Genius Certified',
      issuingAuthority: 'Microsoft',
      issueDate: 'Feb 2025',
      skills: ['Artificial Intelligence (AI)', 'Retrieval-Augmented Generation (RAG)', 'Azure AI Studio'],
      description: 'Advanced certification demonstrating expertise in Microsoft AI technologies and Azure AI Studio.',
    },
    {
      name: 'Linux Foundation Research Forum Member 2024',
      issuingAuthority: 'The Linux Foundation',
      issueDate: 'Jan 2025',
      skills: ['Open Source', 'Linux', 'Research', 'Community Engagement'],
      description: 'Recognition as a member of the Linux Foundation Research Forum for contributions to open source research.',
    },
    {
      name: 'Build Infrastructure with Terraform on Google Cloud Skill Badge',
      issuingAuthority: 'Google',
      issueDate: 'Jul 2024',
      expiryDate: 'Jul 2034',
      skills: ['Terraform', 'Infrastructure as Code (IaC)', 'Cloud Computing', 'HashiCorp'],
      description: 'Hands-on certification demonstrating proficiency in building infrastructure with Terraform on Google Cloud.',
    },
    {
      name: 'Optimize Costs for Google Kubernetes Engine Skill Badge',
      issuingAuthority: 'Google',
      issueDate: 'Jul 2024',
      expiryDate: 'Jul 2034',
      skills: ['Kubernetes', 'Cost Optimization', 'Google Kubernetes Engine'],
      description: 'Certification focused on cost optimization strategies for Google Kubernetes Engine deployments.',
    },
    {
      name: 'CKA: Certified Kubernetes Administrator',
      issuingAuthority: 'The Linux Foundation',
      issueDate: 'Mar 2023',
      expiryDate: 'Mar 2026',
      credentialId: 'LF-6569zxuel0',
      skills: ['Amazon EKS', 'Docker Products', 'Kubernetes', 'Helm Charts', 'DevOps', 'Cloud Computing'],
      description: 'Industry-standard certification validating skills in Kubernetes cluster administration and management.',
    },
    {
      name: 'AWS Certified DevOps Engineer – Professional',
      issuingAuthority: 'Amazon Web Services (AWS)',
      issueDate: 'Mar 2021',
      expiryDate: 'Mar 2024 (Expired)',
      credentialId: 'RZL1F7JJ2F1QQ192',
      skills: ['Amazon EKS', 'Python', 'GitLab', 'Agile Methodologies', 'AWS', 'AWS CDK', 'Jenkins', 'Docker', 'CloudFormation', 'Kubernetes', 'Helm Charts', 'Solution Architecture', 'DevOps', 'Terraform', 'Cloud Computing', 'AWS Lambda'],
      description: 'Professional-level certification demonstrating expertise in provisioning, operating, and managing distributed application systems on AWS.',
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuingAuthority: 'HashiCorp',
      issueDate: 'Nov 2021',
      expiryDate: 'Nov 2023 (Expired)',
      skills: ['CDKTF', 'DevOps', 'Terraform', 'Cloud Computing'],
      description: 'Certification demonstrating proficiency in Infrastructure as Code using Terraform.',
    },
    {
      name: 'Amazon Web Services Solutions Architect Associate',
      issuingAuthority: 'Amazon Web Services (AWS)',
      issueDate: 'Jan 2020',
      expiryDate: 'Jan 2023 (Expired)',
      credentialId: 'SDSN2BQ2P2E4Q3K5',
      skills: ['Python', 'Agile Methodologies', 'AWS', 'Docker', 'CloudFormation', 'AWS Cloud Migration', 'Solution Architecture', 'Cloud Computing', 'AWS Lambda'],
      description: 'Associate-level certification validating skills in designing distributed systems on AWS.',
    },
    {
      name: 'Amazon Web Services Cloud Practitioner',
      issuingAuthority: 'Amazon Web Services (AWS)',
      issueDate: 'Dec 2019',
      expiryDate: 'Dec 2022 (Expired)',
      credentialId: 'NZK9S41CHMR4QYW7',
      skills: ['AWS', 'Cloud Computing', 'AWS Lambda'],
      description: 'Foundational certification demonstrating overall understanding of AWS Cloud.',
    },
    {
      name: 'Programming, Data Structures and Algorithms using Python',
      issuingAuthority: 'NPTEL',
      issueDate: 'Jan 2016',
      expiryDate: 'Jan 2024 (Expired)',
      credentialId: 'NPTEL17CS1026780012FN',
      skills: ['Python', 'Data Structures', 'Algorithms', 'AWS Lambda'],
      description: 'Comprehensive course certification covering programming fundamentals, data structures, and algorithms using Python.',
    },
    {
      name: 'Strength of Materials',
      issuingAuthority: 'NPTEL',
      issueDate: 'Jul 2017',
      expiryDate: 'Jul 2018 (Expired)',
      credentialId: 'NPTEL17CE22S1820151',
      skills: ['Engineering Mechanics', 'Structural Analysis'],
      description: 'Academic certification in strength of materials and structural engineering principles.',
    },
  ],
  
  // Featured Projects (you can add more projects here)
  featuredProjects: [
    'photo-vault', // These IDs should match your projects in projects array
    'gold-price-tracker',
  ],
};
