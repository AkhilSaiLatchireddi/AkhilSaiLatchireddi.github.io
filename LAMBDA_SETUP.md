# AWS Lambda Contact Form Setup Guide

This guide will help you deploy the contact form email handler to AWS Lambda.

## Prerequisites

1. AWS Account
2. Gmail account with App Password enabled
3. AWS CLI configured (optional, for easier deployment)

## Setup Steps

### 1. Enable Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification (enable if not already)
3. Go to Security → App passwords
4. Generate an app password for "Mail"
5. Save this password - you'll need it for the Lambda function

### 2. Create Lambda Function

1. Go to AWS Lambda Console
2. Click "Create function"
3. Choose "Author from scratch"
4. Function name: `portfolio-contact-handler`
5. Runtime: Python 3.9 or 3.10
6. Create function

### 3. Deploy Function Code

1. Copy the contents of `lambda_contact_handler.py`
2. Paste it into the Lambda function code editor
3. Deploy the function

### 4. Set Environment Variables

In your Lambda function configuration, add these environment variables:

- `GMAIL_EMAIL`: Your Gmail address (e.g., `your.email@gmail.com`)
- `GMAIL_APP_PASSWORD`: The app password you generated
- `RECIPIENT_EMAIL`: Email address where you want to receive contact form submissions

### 5. Create API Gateway (Optional)

If you want a custom API endpoint:

1. Go to API Gateway Console
2. Create a new REST API
3. Create a resource and POST method
4. Set integration type to Lambda Function
5. Select your Lambda function
6. Enable CORS
7. Deploy the API

### 6. Update Website Configuration

1. In `js/main.js`, update the `getApiEndpoint()` function:
   ```javascript
   function getApiEndpoint() {
       return 'https://your-lambda-function-url.amazonaws.com/prod/contact';
   }
   ```

2. Or set it as a GitHub secret and use in your deployment process.

### 7. Test the Setup

1. Deploy your website
2. Fill out the contact form
3. Check if you receive the email

## GitHub Secrets Setup

For automated deployment, set these GitHub secrets:

- `CONTACT_API_URL`: Your Lambda function URL
- `AWS_ACCESS_KEY_ID`: For deployment automation
- `AWS_SECRET_ACCESS_KEY`: For deployment automation

## Security Notes

- Never commit your Gmail credentials to the repository
- Use environment variables for all sensitive data
- Consider using AWS SES for production instead of Gmail SMTP
- Set up proper IAM roles for the Lambda function

## Alternative: Using AWS SES

For better deliverability and AWS integration, consider using AWS SES:

1. Verify your domain in AWS SES
2. Update the Lambda function to use SES instead of Gmail SMTP
3. Add SES permissions to your Lambda execution role

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure CORS is properly configured in API Gateway
2. **Gmail Authentication**: Ensure 2FA is enabled and you're using an app password
3. **Lambda Timeout**: Increase timeout if emails are slow to send
4. **Rate Limits**: Gmail has sending limits - consider AWS SES for high volume

### Testing Locally:

You can test the Lambda function locally by running:

```bash
python lambda_contact_handler.py
```

Make sure to set the environment variables in your local environment first.

## Production Considerations

1. **Monitoring**: Set up CloudWatch alerts for errors
2. **Logging**: Use CloudWatch Logs to monitor function execution
3. **Rate Limiting**: Implement rate limiting to prevent abuse
4. **Validation**: Add server-side validation for form inputs
5. **Spam Protection**: Consider adding CAPTCHA or honeypot fields

## Cost Optimization

- Lambda free tier includes 1M requests/month
- Gmail SMTP is free for reasonable volumes
- Monitor CloudWatch logs and costs

## Support

If you encounter issues:
1. Check CloudWatch Logs for errors
2. Verify environment variables are set correctly
3. Test with a simple email client first
4. Ensure your Gmail account hasn't hit rate limits
