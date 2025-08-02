# AWS Lambda Function for Contact Form Email Handler
# Deploy this to AWS Lambda and update the API endpoint in main.js

import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def lambda_handler(event, context):
    """
    AWS Lambda function to handle contact form submissions
    Sends emails using Gmail SMTP via environment variables
    """
    
    # CORS headers
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,Accept',
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
        'Content-Type': 'application/json'
    }
    
    # Handle preflight OPTIONS request
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({'message': 'CORS preflight'})
        }
    
    try:
        # Parse request body
        if 'body' in event:
            if isinstance(event['body'], str):
                body = json.loads(event['body'])
            else:
                body = event['body']
        else:
            raise ValueError("Request body is missing")
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not body.get(field) or not body[field].strip():
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({
                        'success': False,
                        'message': f'Missing required field: {field}'
                    })
                }
        
        # Get environment variables (set these in AWS Lambda configuration)
        GMAIL_EMAIL = os.environ.get('GMAIL_EMAIL')
        GMAIL_APP_PASSWORD = os.environ.get('GMAIL_APP_PASSWORD')  # Use App Password, not regular password
        RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL')
        
        if not all([GMAIL_EMAIL, GMAIL_APP_PASSWORD, RECIPIENT_EMAIL]):
            return {
                'statusCode': 500,
                'headers': headers,
                'body': json.dumps({
                    'success': False,
                    'message': 'Server configuration error'
                })
            }
        
        # Send email
        success = send_email(
            gmail_email=GMAIL_EMAIL,
            gmail_password=GMAIL_APP_PASSWORD,
            recipient_email=RECIPIENT_EMAIL,
            form_data=body
        )
        
        if success:
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'success': True,
                    'message': 'Email sent successfully'
                })
            }
        else:
            return {
                'statusCode': 500,
                'headers': headers,
                'body': json.dumps({
                    'success': False,
                    'message': 'Failed to send email'
                })
            }
            
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({
                'success': False,
                'message': 'Invalid JSON in request body'
            })
        }
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({
                'success': False,
                'message': 'Internal server error'
            })
        }

def send_email(gmail_email, gmail_password, recipient_email, form_data):
    """
    Send email using Gmail SMTP
    """
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = gmail_email
        msg['To'] = recipient_email
        msg['Subject'] = f"Portfolio Contact: {form_data['subject']}"
        
        # Create email body
        email_body = f"""
New contact form submission from your portfolio website:

From: {form_data['name']}
Email: {form_data['email']}
Subject: {form_data['subject']}

Message:
{form_data['message']}

---
Sent at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}
From Portfolio Contact Form
        """
        
        # Create HTML version
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
                    New Portfolio Contact
                </h2>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> {form_data['name']}</p>
                    <p><strong>Email:</strong> <a href="mailto:{form_data['email']}">{form_data['email']}</a></p>
                    <p><strong>Subject:</strong> {form_data['subject']}</p>
                </div>
                
                <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                    <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
                    <p style="white-space: pre-wrap;">{form_data['message']}</p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
                    <p>Sent at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
                    <p>From: Portfolio Contact Form</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Attach both plain text and HTML versions
        msg.attach(MIMEText(email_body, 'plain'))
        msg.attach(MIMEText(html_body, 'html'))
        
        # Connect to Gmail SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(gmail_email, gmail_password)
        
        # Send email
        text = msg.as_string()
        server.sendmail(gmail_email, recipient_email, text)
        server.quit()
        
        return True
        
    except Exception as e:
        print(f"Email sending error: {str(e)}")
        return False

# For local testing
if __name__ == "__main__":
    # Test event
    test_event = {
        'httpMethod': 'POST',
        'body': json.dumps({
            'name': 'Test User',
            'email': 'test@example.com',
            'subject': 'Test Subject',
            'message': 'This is a test message from the contact form.'
        })
    }
    
    result = lambda_handler(test_event, None)
    print(json.dumps(result, indent=2))
