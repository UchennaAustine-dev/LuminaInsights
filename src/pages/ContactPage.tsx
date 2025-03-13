"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";
import SEO from "@/components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically send the form data to your backend
      console.log(formData);

      toast.success("Message Sent Successfully", {
        description:
          "We'll get back to you within 24-48 hours. Thank you for reaching out!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly via phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 md:py-20"
    >
      <SEO
        title="Contact Us"
        description="Get in touch with the Lumina Insights team. We'd love to hear from you about feedback, collaborations, or any questions you might have."
        keywords="contact, get in touch, feedback, questions, support, Lumina Insights"
        url="/contact"
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We're here to help! Fill out the form
            below and our team will respond within 24-48 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span>Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <User className="h-4 w-4 text-gray-500" />
                        <span>Full Name</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <AtSign className="h-4 w-4 text-gray-500" />
                        <span>Email Address</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>Subject</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <MessageSquare className="h-4 w-4 text-gray-500" />
                      <span>Your Message</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your question or concern in detail..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="shadow-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Visit Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-medium block">
                        Lumina Headquarters
                      </span>
                      123 Insight Avenue
                      <br />
                      Knowledge City, IN 12345
                      <br />
                      United States
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>Contact Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <a
                      href="mailto:info@luminainsights.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@luminainsights.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <a href="tel:+15551234567" className="hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span>Monday-Friday, 9am-5pm EST</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Need Immediate Help?
                </h3>
                <p className="mb-4">
                  Our support team is available for urgent inquiries during
                  business hours.
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full"
                >
                  Call Support
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-500"
        >
          <p>
            We value your feedback and aim to respond to all inquiries within
            24-48 hours.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
