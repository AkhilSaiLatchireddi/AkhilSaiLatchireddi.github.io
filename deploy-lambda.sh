#!/bin/bash

# AWS Lambda Deployment Script for Portfolio Contact Handler
# This script helps deploy the contact form Lambda function

set -e

# Configuration
FUNCTION_NAME="portfolio-contact-handler"
RUNTIME="python3.9"
HANDLER="lambda_contact_handler.lambda_handler"
ROLE_NAME="portfolio-lambda-role"
DESCRIPTION="Contact form handler for portfolio website"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_aws_cli() {
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi
    
    if ! aws sts get-caller-identity &> /dev/null; then
        print_error "AWS CLI is not configured. Please run 'aws configure' first."
        exit 1
    fi
    
    print_status "AWS CLI is configured and ready."
}

check_environment_variables() {
    print_status "Checking environment variables..."
    
    if [[ -z "$GMAIL_EMAIL" ]]; then
        print_warning "GMAIL_EMAIL environment variable not set."
        read -p "Enter your Gmail email: " GMAIL_EMAIL
    fi
    
    if [[ -z "$GMAIL_APP_PASSWORD" ]]; then
        print_warning "GMAIL_APP_PASSWORD environment variable not set."
        read -s -p "Enter your Gmail app password: " GMAIL_APP_PASSWORD
        echo
    fi
    
    if [[ -z "$RECIPIENT_EMAIL" ]]; then
        print_warning "RECIPIENT_EMAIL environment variable not set."
        read -p "Enter recipient email: " RECIPIENT_EMAIL
    fi
    
    print_status "Environment variables configured."
}

create_iam_role() {
    print_status "Creating IAM role for Lambda function..."
    
    # Trust policy for Lambda
    TRUST_POLICY='{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Service": "lambda.amazonaws.com"
                },
                "Action": "sts:AssumeRole"
            }
        ]
    }'
    
    # Check if role exists
    if aws iam get-role --role-name "$ROLE_NAME" &> /dev/null; then
        print_status "IAM role '$ROLE_NAME' already exists."
    else
        # Create role
        aws iam create-role \
            --role-name "$ROLE_NAME" \
            --assume-role-policy-document "$TRUST_POLICY" \
            --description "Role for portfolio contact form Lambda function"
        
        # Attach basic execution policy
        aws iam attach-role-policy \
            --role-name "$ROLE_NAME" \
            --policy-arn "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
        
        print_status "IAM role '$ROLE_NAME' created successfully."
        
        # Wait for role to be available
        print_status "Waiting for IAM role to be available..."
        sleep 10
    fi
    
    # Get role ARN
    ROLE_ARN=$(aws iam get-role --role-name "$ROLE_NAME" --query 'Role.Arn' --output text)
    print_status "Role ARN: $ROLE_ARN"
}

create_deployment_package() {
    print_status "Creating deployment package..."
    
    # Create temporary directory
    mkdir -p /tmp/lambda-deployment
    
    # Copy Lambda function
    cp lambda_contact_handler.py /tmp/lambda-deployment/
    
    # Create ZIP package
    cd /tmp/lambda-deployment
    zip -r lambda-deployment.zip .
    
    # Move back to original directory
    cd - > /dev/null
    
    # Copy ZIP to current directory
    cp /tmp/lambda-deployment/lambda-deployment.zip .
    
    print_status "Deployment package created: lambda-deployment.zip"
}

deploy_lambda_function() {
    print_status "Deploying Lambda function..."
    
    # Check if function exists
    if aws lambda get-function --function-name "$FUNCTION_NAME" &> /dev/null; then
        print_status "Updating existing Lambda function..."
        
        # Update function code
        aws lambda update-function-code \
            --function-name "$FUNCTION_NAME" \
            --zip-file fileb://lambda-deployment.zip
        
        # Update environment variables
        aws lambda update-function-configuration \
            --function-name "$FUNCTION_NAME" \
            --environment "Variables={GMAIL_EMAIL=$GMAIL_EMAIL,GMAIL_APP_PASSWORD=$GMAIL_APP_PASSWORD,RECIPIENT_EMAIL=$RECIPIENT_EMAIL}"
        
    else
        print_status "Creating new Lambda function..."
        
        # Create function
        aws lambda create-function \
            --function-name "$FUNCTION_NAME" \
            --runtime "$RUNTIME" \
            --role "$ROLE_ARN" \
            --handler "$HANDLER" \
            --zip-file fileb://lambda-deployment.zip \
            --description "$DESCRIPTION" \
            --timeout 30 \
            --memory-size 128 \
            --environment "Variables={GMAIL_EMAIL=$GMAIL_EMAIL,GMAIL_APP_PASSWORD=$GMAIL_APP_PASSWORD,RECIPIENT_EMAIL=$RECIPIENT_EMAIL}"
    fi
    
    print_status "Lambda function deployed successfully!"
}

create_function_url() {
    print_status "Creating Function URL..."
    
    # Check if Function URL already exists
    if aws lambda get-function-url-config --function-name "$FUNCTION_NAME" &> /dev/null; then
        FUNCTION_URL=$(aws lambda get-function-url-config --function-name "$FUNCTION_NAME" --query 'FunctionUrl' --output text)
        print_status "Function URL already exists: $FUNCTION_URL"
    else
        # Create Function URL
        FUNCTION_URL=$(aws lambda create-function-url-config \
            --function-name "$FUNCTION_NAME" \
            --auth-type NONE \
            --cors '{
                "AllowOrigins": ["*"],
                "AllowMethods": ["POST", "OPTIONS"],
                "AllowHeaders": ["Content-Type", "Accept"]
            }' \
            --query 'FunctionUrl' --output text)
        
        print_status "Function URL created: $FUNCTION_URL"
    fi
    
    echo
    print_status "🎉 Deployment completed successfully!"
    echo
    print_status "Next steps:"
    echo "1. Update the API endpoint in js/main.js:"
    echo "   function getApiEndpoint() {"
    echo "       return '$FUNCTION_URL';"
    echo "   }"
    echo
    echo "2. Test the contact form on your website"
    echo "3. Monitor CloudWatch logs for any issues"
}

cleanup() {
    print_status "Cleaning up temporary files..."
    rm -f lambda-deployment.zip
    rm -rf /tmp/lambda-deployment
}

# Main execution
main() {
    print_status "Starting Lambda deployment for portfolio contact form..."
    echo
    
    # Check prerequisites
    check_aws_cli
    check_environment_variables
    
    # Deploy
    create_iam_role
    create_deployment_package
    deploy_lambda_function
    create_function_url
    
    # Cleanup
    cleanup
    
    print_status "Deployment script completed!"
}

# Help function
show_help() {
    echo "Portfolio Contact Form Lambda Deployment Script"
    echo
    echo "Usage: $0 [OPTIONS]"
    echo
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -d, --delete   Delete the Lambda function and IAM role"
    echo
    echo "Environment Variables:"
    echo "  GMAIL_EMAIL           Your Gmail email address"
    echo "  GMAIL_APP_PASSWORD    Your Gmail app password (16 characters)"
    echo "  RECIPIENT_EMAIL       Email where you want to receive messages"
    echo
    echo "Prerequisites:"
    echo "  - AWS CLI installed and configured"
    echo "  - Sufficient permissions to create Lambda functions and IAM roles"
    echo "  - Gmail account with app password enabled"
}

delete_resources() {
    print_status "Deleting Lambda function and IAM role..."
    
    # Delete Function URL
    if aws lambda get-function-url-config --function-name "$FUNCTION_NAME" &> /dev/null; then
        aws lambda delete-function-url-config --function-name "$FUNCTION_NAME"
        print_status "Function URL deleted."
    fi
    
    # Delete Lambda function
    if aws lambda get-function --function-name "$FUNCTION_NAME" &> /dev/null; then
        aws lambda delete-function --function-name "$FUNCTION_NAME"
        print_status "Lambda function deleted."
    fi
    
    # Detach policies and delete IAM role
    if aws iam get-role --role-name "$ROLE_NAME" &> /dev/null; then
        aws iam detach-role-policy --role-name "$ROLE_NAME" --policy-arn "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
        aws iam delete-role --role-name "$ROLE_NAME"
        print_status "IAM role deleted."
    fi
    
    print_status "All resources deleted successfully!"
}

# Parse command line arguments
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    -d|--delete)
        delete_resources
        exit 0
        ;;
    "")
        main
        ;;
    *)
        print_error "Unknown option: $1"
        show_help
        exit 1
        ;;
esac
