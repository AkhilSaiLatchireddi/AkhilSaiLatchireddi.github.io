# Configuration Guide

This portfolio uses a centralized configuration system that allows you to update all your personal information, contact details, and content from a single file.

## 📍 Main Configuration File

**File Location:** `src/config/personal.ts`

This file contains ALL your personal information that appears throughout the portfolio. You only need to edit this one file to update your entire website!

## 🎯 What You Can Update

### 1. Basic Information
```typescript
name: 'Your Full Name',
firstName: 'Your First Name',
title: 'Your Professional Title',
tagline: 'Your professional tagline or description',
```

### 2. Contact Information
```typescript
contact: {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
},
```

### 3. Social Media Links
```typescript
social: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  instagram: '', // Optional - leave empty if you don't want to show
  youtube: '', // Optional - leave empty if you don't want to show
  website: 'https://yourwebsite.com',
},
```

### 4. Professional Information
```typescript
professional: {
  yearsOfExperience: 3,
  currentRole: 'Your Current Job Title',
  currentCompany: 'Your Current Company',
  specializations: ['Skill 1', 'Skill 2', 'Skill 3'],
  bio: 'Your professional bio - this appears on the About page',
},
```

### 5. Personal Interests
Update your interests that appear on the About page:
```typescript
about: {
  interests: [
    {
      title: 'Interest Title',
      description: 'Description of your interest',
      icon: '🌟', // Emoji icon
    },
    // Add more interests...
  ],
},
```

### 6. Experience Timeline
Update your work and education history:
```typescript
experience: [
  {
    year: '2024',
    title: 'Your Job Title',
    company: 'Company Name',
    description: 'What you did in this role',
    type: 'work', // 'work' or 'education'
  },
  // Add more experiences...
],
```

### 7. SEO & Metadata
```typescript
seo: {
  title: 'Your Name - Portfolio',
  description: 'Brief description for search engines',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  ogImage: '/path/to/your/image.jpg',
},
```

## 📁 Other Files You Might Want to Update

### Projects (`src/utils/constants.ts`)
To add or modify your projects:
1. Open `src/utils/constants.ts`
2. Edit the `projects` array
3. Add your project images to the `public/assets/` folder

### Skills (`src/utils/constants.ts`)
To update your skills and their proficiency levels:
1. Open `src/utils/constants.ts`
2. Edit the `skills` array
3. Adjust the `level` (0-100) for each skill

## 🚀 Deployment Instructions

### 1. GitHub Pages Deployment

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Update personal information"
   git push origin main
   ```

2. **Set up GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Select "GitHub Actions" as the source
   - The deployment will start automatically

3. **Set up environment variables (for contact form):**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Click on "Secrets and variables" → "Actions"
   - Add a new secret named `REACT_APP_LAMBDA_ENDPOINT`
   - Set the value to your AWS Lambda endpoint URL

### 2. AWS Lambda Setup (for Contact Form)

If you want the contact form to work, you need to set up an AWS Lambda function:

1. **Create a Lambda function** with the following code:
   ```javascript
   const nodemailer = require('nodemailer');
   
   exports.handler = async (event) => {
     // Your Lambda function code here
     // See your existing Lambda setup
   };
   ```

2. **Get the Lambda endpoint URL** and add it to GitHub Secrets as `REACT_APP_LAMBDA_ENDPOINT`

### 3. Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the `website` URL in `personal.ts`

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Quick Update Checklist

When updating your portfolio:

- [ ] Update personal information in `src/config/personal.ts`
- [ ] Replace profile image: `public/assets/AkhilDP2.jpeg`
- [ ] Update projects in `src/utils/constants.ts`
- [ ] Add project images to `public/assets/`
- [ ] Update skills and their levels in `src/utils/constants.ts`
- [ ] Test locally with `npm start`
- [ ] Commit and push changes to trigger deployment

## 🐛 Troubleshooting

**Build fails?**
- Check for syntax errors in `personal.ts`
- Make sure all required fields are filled
- Verify image paths exist

**Contact form not working?**
- Check if `REACT_APP_LAMBDA_ENDPOINT` is set in GitHub Secrets
- Verify your Lambda function is working
- Check browser console for errors

**Deployment fails?**
- Check GitHub Actions logs
- Verify Node.js version compatibility
- Make sure all dependencies are properly installed

## 📞 Need Help?

If you run into issues:
1. Check the browser console for errors
2. Review GitHub Actions logs for deployment issues
3. Make sure all file paths are correct
4. Verify all required fields in `personal.ts` are filled

---

**Remember:** After making changes to `src/config/personal.ts`, the entire website will automatically update with your new information!
