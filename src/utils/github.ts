import { ContactFormData } from '../types';

// GitHub Issues Integration
export const createGitHubIssue = async (formData: ContactFormData): Promise<{ success: boolean; message: string; issueUrl?: string }> => {
  try {
    const repoOwner = 'AkhilSaiLatchireddi';
    const repoName = 'akhil-contact-issues-repo';
    
    // Format the issue body
    const issueBody = `
## Contact Request

**From:** ${formData.name}  
**Email:** ${formData.email}

### Subject
${formData.subject}

### Message
${formData.message}

---
*This issue was automatically created from the portfolio contact form on ${new Date().toLocaleString()}.*
    `.trim();

    // Create the issue data
    const issueData = {
      title: `Contact: ${formData.subject}`,
      body: issueBody,
      labels: ['contact', 'portfolio']
    };

    // Try to create the issue using GitHub API
    // Note: This requires a GitHub token, but for public repos we can use the web interface fallback
    try {
      // First attempt: Try to use GitHub API if token is available (optional)
      const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/issues`;
      
      // For security, we'll use the web interface method for now
      // In a production environment, you'd want to use a serverless function with a GitHub token
      throw new Error('Using web interface fallback');
      
    } catch (apiError) {
      // Fallback: Use GitHub's web interface with pre-filled data
      const params = new URLSearchParams({
        title: issueData.title,
        body: issueData.body,
        labels: issueData.labels.join(',')
      });

      const githubIssueUrl = `https://github.com/${repoOwner}/${repoName}/issues/new?${params.toString()}`;
      
      // Open the GitHub issue creation page in a new tab
      window.open(githubIssueUrl, '_blank');
      
      return {
        success: true,
        message: 'Redirecting to GitHub to create your issue. This helps me track and respond to your message efficiently! The form data has been pre-filled for you.',
        issueUrl: githubIssueUrl
      };
    }
  } catch (error) {
    console.error('Error creating GitHub issue:', error);
    
    // Ultimate fallback: Direct email link
    const emailSubject = encodeURIComponent(`Contact: ${formData.subject}`);
    const emailBody = encodeURIComponent(`Hi Akhil,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const emailUrl = `mailto:latchireddiakhilsai@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    window.open(emailUrl, '_blank');
    
    return {
      success: true,
      message: 'GitHub issue creation failed. Opening your default email client as a fallback. You can also reach me directly at latchireddiakhilsai@gmail.com'
    };
  }
};

// Alternative function for direct GitHub API usage (for future implementation)
export const createGitHubIssueWithAPI = async (formData: ContactFormData, token?: string): Promise<{ success: boolean; message: string; issueUrl?: string }> => {
  if (!token) {
    return createGitHubIssue(formData); // Fallback to web interface
  }

  try {
    const repoOwner = 'AkhilSaiLatchireddi';
    const repoName = 'AkhilSaiLatchireddi.github.io';
    
    const issueBody = `
## Contact Request

**From:** ${formData.name}  
**Email:** ${formData.email}

### Subject
${formData.subject}

### Message
${formData.message}

---
*This issue was automatically created from the portfolio contact form on ${new Date().toLocaleString()}.*
    `.trim();

    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        title: `Contact: ${formData.subject}`,
        body: issueBody,
        labels: ['contact', 'portfolio']
      })
    });

    if (response.ok) {
      const issue = await response.json();
      return {
        success: true,
        message: `GitHub issue created successfully! You can track our conversation at: ${issue.html_url}`,
        issueUrl: issue.html_url
      };
    } else {
      throw new Error(`GitHub API error: ${response.status}`);
    }
  } catch (error) {
    console.error('GitHub API error:', error);
    return createGitHubIssue(formData); // Fallback to web interface
  }
};

// Form validation
export const validateContactForm = (formData: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.subject.trim()) {
    errors.push('Subject is required');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  } else if (formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};
