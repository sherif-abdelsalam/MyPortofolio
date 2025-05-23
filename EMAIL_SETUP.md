# Email Service Setup (EmailJS)

This guide will help you set up EmailJS for the contact form functionality.

## Steps to Configure EmailJS

### 1. Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template with these variables:

   ```
   Subject: New message from {{from_name}} - {{subject}}

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}
   ```

4. Save the template and note down your **Template ID**

### 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key**

### 5. Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### 6. Test the Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Features Implemented

✅ **Form Validation**: All fields are required  
✅ **Loading State**: Submit button shows loading spinner  
✅ **Error Handling**: Proper error messages for failed submissions  
✅ **Success Feedback**: Toast notification on successful send  
✅ **Form Reset**: Form clears after successful submission  
✅ **Responsive Design**: Works on all screen sizes

## Email Template Variables

The following variables are sent to your EmailJS template:

- `from_name`: Sender's name
- `from_email`: Sender's email address
- `subject`: Message subject
- `message`: Message content
- `to_name`: Your name (recipient)

## Troubleshooting

**Email not sending?**

- Check that all environment variables are set correctly
- Verify your EmailJS service is active
- Check browser console for error messages
- Ensure your email template uses the correct variable names

**Getting CORS errors?**

- Make sure you're using the correct EmailJS public key
- Check that your domain is allowed in EmailJS settings

## Alternative: Fallback to mailto

If EmailJS fails, the form will show an error message directing users to contact you directly via the email link in the contact information section.
