# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create Email Service

1. Navigate to **Email Services** in the dashboard
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended for easy setup)
   - **Outlook**
   - **Other SMTP service**
4. Connect your email account and follow the prompts
5. Note your **Service ID** (looks like `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Mobile: {{mobile}}

Message:
{{message}}
```

**Important:** The template variables use `{{variable_name}}` format.

4. Configure the template:
   - **To Email:** Use a fixed email or `{{to_email}}`
   - **From Email:** Can be your email or use the service email
5. Note your **Template ID** (looks like `template_xxxxx`)

## Step 4: Get Your API Keys

1. Go to **Account** in the dashboard
2. Look for **API Keys** section
3. Copy your **Public Key** (starts with `key_`)

## Step 5: Update Your Code

Replace the three placeholder values in `src/components/HomePage/ContactForm.jsx`:

```javascript
// Line 16
emailjs.init("YOUR_PUBLIC_KEY"); 
// Replace "YOUR_PUBLIC_KEY" with your actual public key

// Line 35
const response = await emailjs.send(
  "YOUR_SERVICE_ID",      // Replace with your service ID
  "YOUR_TEMPLATE_ID",     // Replace with your template ID
  {
    from_name: formData.fullName,
    from_email: formData.email,
    mobile: formData.mobile,
    message: formData.description,
    to_email: "your-email@example.com", // Replace with recipient email
  }
);
```

## Example Configuration

If your EmailJS dashboard shows:
- Service ID: `service_abc123xyz`
- Template ID: `template_def456uvw`
- Public Key: `key_public_1234567890`

Your code should be:

```javascript
emailjs.init("key_public_1234567890");

const response = await emailjs.send(
  "service_abc123xyz",
  "template_def456uvw",
  {
    from_name: formData.fullName,
    from_email: formData.email,
    mobile: formData.mobile,
    message: formData.description,
    to_email: "your-company-email@example.com",
  }
);
```

## Testing

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email
4. Check EmailJS dashboard for logs and any errors

## Troubleshooting

- **Emails not sending:** Verify Service ID and Template ID are correct
- **Template variables not working:** Make sure variable names match exactly (case-sensitive)
- **CORS errors:** EmailJS handles this automatically with the public key
- **Missing emails:** Check your junk/spam folder

## Security Note

The public key is safe to expose in frontend code. Sensitive operations (like modifying templates) require your private key, which should never be exposed.

---

Once you've completed these steps, your contact form will send emails directly from the frontend!
