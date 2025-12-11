import { X } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage("");

    try {
      // Check if environment variables are set
      if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
        console.error("Missing VITE_EMAILJS_PUBLIC_KEY");
        setSubmitMessage("✗ Configuration error: Public key not set");
        setIsLoading(false);
        return;
      }
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        console.error("Missing VITE_EMAILJS_SERVICE_ID");
        setSubmitMessage("✗ Configuration error: Service ID not set");
        setIsLoading(false);
        return;
      }
      if (!import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
        console.error("Missing VITE_EMAILJS_TEMPLATE_ID");
        setSubmitMessage("✗ Configuration error: Template ID not set");
        setIsLoading(false);
        return;
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          mobile: formData.mobile,
          message: formData.description,
          to_email: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL,
        }
      );

      console.log("Email sent successfully:", response);
      setSubmitMessage("✓ We will connect with you shortly!");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        description: "",
      });
      setTimeout(() => {
        onClose();
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitMessage(`✗ Error: ${error.text || error.message || "Something went wrong"}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-end z-[100] p-4 pt-[160px] sm:pt-[140px] overflow-y-auto">
      <div className="bg-gray-950 rounded-lg max-w-md w-full border border-blue-900/50 shadow-lg mr-4 my-auto max-h-[calc(100vh-200px)] overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center p-6 border-b border-blue-900/30 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-blue-300 hover:text-orange-400 transition-colors"
            aria-label="Close form"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="font-rethink text-sm sm:text-base text-[#707070] dark:text-gray-400 transition-colors duration-300 text-center">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-blue-900/50 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-blue-900/50 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-blue-900/50 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 bg-gray-900 border border-blue-900/50 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project"
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div
              className={`p-3 rounded-lg text-sm ${
                submitMessage.includes("success")
                  ? "bg-green-900/30 text-green-300 border border-green-900/50"
                  : "bg-red-900/30 text-red-300 border border-red-900/50"
              }`}
            >
              {submitMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full border-2 border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
