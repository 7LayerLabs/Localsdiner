# Email Template Setup Guide

These are professional, clean HTML email templates for your EmailJS notifications.

## Templates Created

1. **contact-form-template.html** - For contact form submissions
   - Template ID in EmailJS: `template_jmtx0rn`

2. **job-application-template.html** - For job applications
   - Template ID in EmailJS: `template_b1qtkgr`

## How to Update Your EmailJS Templates

### Step 1: Go to EmailJS Dashboard
Visit: https://dashboard.emailjs.com/admin

### Step 2: Navigate to Email Templates
1. Click on "Email Templates" in the left sidebar
2. Find your template:
   - `template_jmtx0rn` for Contact Form
   - `template_b1qtkgr` for Job Applications

### Step 3: Update the Template
1. Click on the template name to edit it
2. Switch to the **"HTML Content"** tab
3. Copy the ENTIRE contents of the corresponding .html file
4. Paste it into the HTML Content box (replacing everything)
5. Click **"Save"** at the bottom

### Step 4: Test the Template
1. Go to the "Test" tab in EmailJS
2. Send a test email to verify it looks good
3. Check your inbox to see the formatted email

## Template Variables

These templates use the following variables (already configured in your forms):

### Contact Form Variables:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone
- `{{message}}` - Their message
- `{{submitted_at}}` - Submission timestamp

### Job Application Variables:
- `{{applicant_name}}` - Applicant's name
- `{{applicant_email}}` - Applicant's email
- `{{applicant_phone}}` - Applicant's phone
- `{{position}}` - Position applied for
- `{{days_available}}` - Available days
- `{{hours_preferred}}` - Preferred hours
- `{{start_date}}` - Desired start date
- `{{desired_pay}}` - Pay expectations
- `{{experience}}` - Restaurant experience
- `{{restrictions}}` - Scheduling restrictions
- `{{submitted_at}}` - Submission timestamp

## What's Improved

### Before:
- Plain text, hard to read
- No formatting or structure
- Important info buried in text
- Unprofessional appearance

### After:
- ✅ Clean, professional design
- ✅ Organized with clear sections
- ✅ Easy-to-scan information layout
- ✅ Clickable email/phone links
- ✅ Branded with your diner colors
- ✅ Action buttons for quick response
- ✅ Mobile-responsive design

## Need Help?

If you have any issues:
1. Make sure you copied the ENTIRE HTML file
2. Verify all variables match (with double curly braces: `{{variable}}`)
3. Test the template before using it live
4. Check spam folder if test emails don't arrive

---

**Note:** These templates are already connected to your forms. Once you update them in EmailJS, your notifications will immediately look professional and clean!
