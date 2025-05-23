import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import myLinks from "../constants/socialLinks";
import { sendEmail } from "../services/emailService";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendEmail(formData);

      if (success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
          className: "bg-green-500 text-white",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Failed to send message",
          description:
            "Please try again later or contact me directly via email.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto text-center mb-16">
        <div className="section-title mx-auto text-gray-900 dark:text-white">
          CONTACT
        </div>
        <p className="mt-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Have a project in mind or want to chat? Feel free to reach out through
          the form below or using my contact information.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {myLinks.email.slice(7)}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {myLinks.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {myLinks.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-black dark:focus:border-orange-400 focus:ring-black dark:focus:ring-orange-400 transition-colors duration-300"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-black dark:focus:border-orange-400 focus:ring-black dark:focus:ring-orange-400 transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-black dark:focus:border-orange-400 focus:ring-black dark:focus:ring-orange-400 transition-colors duration-300"
              />
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="h-32 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-black dark:focus:border-orange-400 focus:ring-black dark:focus:ring-orange-400 transition-colors duration-300"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "SUBMIT"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
