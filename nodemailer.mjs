// export const handler = async (event) => {
//   // TODO implement
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify('Hello from Lambda!'),
//   };
//   return response;
// };


// Copyright 2025, All Rights Reserved
//
// This AWS Lambda function sends an email using the Nodemailer library,
// configured to use Gmail's SMTP server. It's designed to be triggered
// by an event (like an API Gateway request) and expects email details
// in the event payload.
//
// For security, it's highly recommended to store your Gmail App Password
// in AWS Secrets Manager rather than hardcoding it.

// Import the Nodemailer library
import nodemailer from 'nodemailer';

// --- IMPORTANT: Securely store your credentials ---
// It's best practice to store your email and App Password in AWS Secrets Manager
// or as environment variables, not directly in the code.
const SENDER_EMAIL = process.env.GMAIL_ADDRESS; // Your Gmail address
const SENDER_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD; // Your 16-digit App Password
const TO_EMAIL = process.env.GMAIL_ADDRESS; // Your Gmail address

// Create a reusable transporter object using the default SMTP transport for Gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail's SMTP server
    // service: 'gmail',       // Use Gmail's SMTP server
    port: 465,              // Port for SSL
    secure: true,           // Use SSL
    auth: {
        user: SENDER_EMAIL,
        pass: SENDER_APP_PASSWORD
    }
});

/**
 * AWS Lambda handler function.
 *
 * @param {object} event The event object passed to the Lambda function.
 * Expected to contain `to`, `subject`, and `body`.
 * @returns {Promise<object>} The response object with statusCode and body.
 */
export async function handler(event) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // --- Input Validation ---
    // Ensure the necessary parameters are present in the event body.
    // For API Gateway, the event body is a string that needs to be parsed.
    let requestBody;
    try {
        requestBody = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    } catch (error) {
        console.error('Error parsing event body:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid JSON format in request body.' }),
        };
    }

    // Validate requestBody and its body property
    if (!requestBody || typeof requestBody.body !== 'string') {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Missing or invalid "body" field in request.' }),
        };
    }

    const { body } = requestBody;
    console.log('Parsed request body:', requestBody);

    // --- Email Composition ---
    const mailOptions = {
        from: `"Akhil Lambda" <${SENDER_EMAIL}>`, // Sender address (shows your name and email)
        to: TO_EMAIL,                                   // List of receivers
        subject: "someone want to contact you",         // Subject line
        text: body,                               // Plain text body
        html: `<b>${body}</b>`,                   // HTML body (optional)
    };

    // --- Sending the Email ---
    try {
        console.log('Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully! Message ID:', info.messageId);

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!', messageId: info.messageId }),
        };
    } catch (error) {
        console.error('Error sending email:', error);

        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email.', error: error.message }),
        };
    }
}