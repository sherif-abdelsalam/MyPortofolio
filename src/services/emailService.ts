import emailjs from "@emailjs/browser";

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

// Initialize EmailJS with public key
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<boolean> => {
  // Check if EmailJS is properly configured
  if (
    EMAILJS_SERVICE_ID === "your_service_id" ||
    EMAILJS_TEMPLATE_ID === "your_template_id" ||
    EMAILJS_PUBLIC_KEY === "your_public_key"
  ) {
    console.warn(
      "EmailJS is not configured. Please set up your environment variables."
    );
    return false;
  }

  console.log("Sending email with EmailJS...");
  console.log("Service ID:", EMAILJS_SERVICE_ID);
  console.log("Template ID:", EMAILJS_TEMPLATE_ID);
  console.log("Public Key:", EMAILJS_PUBLIC_KEY);
  console.log("Form Data:", formData);

  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Sherif Abdelsalam", // Your name
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("EmailJS response:", response);

    console.log("Email sent successfully:", response.status, response.text);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
