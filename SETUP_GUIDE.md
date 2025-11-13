# Locals Diner Website - Setup Guide

## InstantDB + Email Setup

### Step 1: Set Up InstantDB

1. **Create an InstantDB account**
   - Go to https://instantdb.com
   - Sign up for a free account

2. **Create a new app**
   - Click "Create App"
   - Name it "Locals Diner" or similar
   - Copy your **APP_ID** (you'll need this)

3. **Update the website**
   - Open `hiring.html`
   - Find line 475: `const APP_ID = 'YOUR_APP_ID_HERE';`
   - Replace `YOUR_APP_ID_HERE` with your actual InstantDB App ID

4. **Define your schema (optional but recommended)**
   - In InstantDB dashboard, go to Schema
   - Add a new collection called `applications`
   - Add fields:
     - name (string)
     - phone (string)
     - email (string)
     - position (string)
     - daysAvailable (array)
     - hoursPreferred (string)
     - experience (string)
     - restrictions (string)
     - desiredPay (string)
     - startDate (string)
     - submittedAt (timestamp)
     - status (string)

### Step 2: Set Up Email Notifications

**Option A: EmailJS (Easiest - No Backend Required)**

1. **Sign up for EmailJS**
   - Go to https://emailjs.com
   - Create a free account (200 emails/month free)

2. **Configure Email Service**
   - Add an email service (Gmail, Outlook, etc.)
   - Follow their instructions to connect your email

3. **Create Email Template**
   - Go to Email Templates
   - Create a new template with these variables:
     ```
     {{from_name}}
     {{applicant_name}}
     {{phone}}
     {{email}}
     {{position}}
     {{days_available}}
     {{hours}}
     {{experience}}
     {{restrictions}}
     {{desired_pay}}
     {{start_date}}
     ```

4. **Update hiring.html**
   - Add EmailJS SDK:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

   - Replace the `sendEmailNotification` function with:
   ```javascript
   async function sendEmailNotification(data) {
       emailjs.init('YOUR_PUBLIC_KEY'); // Get from EmailJS dashboard

       await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
           from_name: 'Locals Diner Website',
           applicant_name: data.name,
           phone: data.phone,
           email: data.email,
           position: data.position,
           days_available: data.daysAvailable.join(', '),
           hours: data.hoursPreferred,
           experience: data.experience,
           restrictions: data.restrictions,
           desired_pay: data.desiredPay,
           start_date: data.startDate,
           to_email: RECIPIENT_EMAIL
       });
   }
   ```

5. **Update your email**
   - Line 479: Replace `YOUR_EMAIL@example.com` with your actual email

**Option B: Web3Forms (Even Simpler)**

1. Go to https://web3forms.com
2. Get your free access key
3. Add this to your form:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

### Step 3: Testing

1. Open `hiring.html` in your browser
2. Fill out the application form
3. Submit it
4. Check:
   - InstantDB dashboard for the saved application
   - Your email for notification

### Step 4: Viewing Applications

**In InstantDB Dashboard:**
- Log in to https://instantdb.com/dash
- Select your "Locals Diner" app
- Go to "Data" tab
- Click on "applications" collection
- View all submitted applications

**Query applications by status:**
```javascript
// In your browser console or a custom admin page
const { data } = db.useQuery({
  applications: {
    $: { where: { status: 'new' } }
  }
});
```

### Step 5: Deployment

When you're ready to deploy:

1. **Host your website:**
   - Netlify (recommended, free)
   - Vercel
   - GitHub Pages
   - Your own hosting

2. **Update DNS:**
   - Point your domain to the hosting provider

3. **SSL Certificate:**
   - Most hosts provide free SSL automatically

---

## Current Configuration

- **InstantDB**: Stores all application data
- **Email**: Sends notifications when new applications are submitted
- **Form Validation**: Ensures all required fields are filled
- **Status Tracking**: Applications marked as 'new' by default

## Need Help?

- InstantDB Docs: https://instantdb.com/docs
- EmailJS Docs: https://www.emailjs.com/docs/
- Contact: support@yoursite.com

---

## Quick Start Checklist

- [ ] Sign up for InstantDB
- [ ] Get APP_ID and update hiring.html (line 475)
- [ ] Sign up for EmailJS (or Web3Forms)
- [ ] Configure email template
- [ ] Update RECIPIENT_EMAIL (line 479)
- [ ] Test the form
- [ ] Deploy the website

**That's it! Your employment applications will now be saved to InstantDB and sent to your email.**
