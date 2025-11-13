// InstantDB Configuration for Locals Diner

// You'll need to get your APP_ID from https://instantdb.com/dash
// After creating an account, create a new app and copy the APP_ID

const APP_ID = 'YOUR_APP_ID_HERE'; // Replace with your actual InstantDB App ID

// Initialize InstantDB
const db = init({ appId: APP_ID });

// Schema definition for employment applications
// This defines the structure of your database

const schema = {
  applications: {
    name: 'string',
    phone: 'string',
    email: 'string',
    position: 'string',
    daysAvailable: 'array', // Array of selected days
    hoursPreferred: 'string',
    experience: 'string',
    restrictions: 'string',
    desiredPay: 'string',
    startDate: 'string',
    submittedAt: 'timestamp',
    status: 'string' // 'new', 'reviewed', 'contacted', 'hired', 'rejected'
  },
  communityBoard: {
    businessName: 'string',
    contactName: 'string',
    email: 'string',
    phone: 'string',
    website: 'string',
    message: 'string',
    logoUrl: 'string', // URL to uploaded logo/business card
    submittedAt: 'timestamp',
    status: 'string', // 'pending', 'approved', 'featured', 'rejected'
    featured: 'boolean' // Whether to display on the community page
  }
};

// Email configuration (you'll need to set up email sending)
const EMAIL_CONFIG = {
  recipientEmail: 'YOUR_EMAIL@example.com', // Replace with your email
  subject: 'New Employment Application - Locals Diner'
};

export { db, schema, APP_ID, EMAIL_CONFIG };
