import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaComments, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaUser } from "react-icons/fa";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm("service_9k5aeyu", "template_5swijsa", formRef.current, "KR8AblqBG2gnBnAL3");
      toast.success("Message sent successfully. I’ll get back to you soon.", {
        duration: 4000,
        iconTheme: {
          primary: "#22c55e",
          secondary: "#ffffff",
        },
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      const errorText = error instanceof Object && "text" in error ? String(error.text) : "";
      toast.error(errorText || "Message could not be sent. Please try again.", {
        duration: 5000,
        iconTheme: {
          primary: "#ef4444",
          secondary: "#ffffff",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "shuvajitmaitra@gmail.com",
      link: "mailto:shuvajitmaitra@gmail.com",
      newTab: false,
      color: "text-cyan-400",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+880 194-988-7896",
      link: "https://wa.me/8801949887896",
      newTab: true,
      color: "text-green-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "Dhaka, Bangladesh",
      link: "#",
      newTab: false,
      color: "text-purple-400",
    },
  ];

  return (
    <div id="Contact" className="min-h-screen bg-gray-900 text-white pt-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I&#39;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <FaComments className="text-cyan-400" />
                Let&#39;s Talk
              </h3>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.newTab ? "_blank" : undefined}
                  rel={info.newTab ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-300`}
                  >
                    <span className={`text-2xl ${info.color} group-hover:text-white transition-colors duration-300`}>{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative bg-gray-800 p-8 rounded-3xl border border-gray-700 space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send Message</h3>
                <p className="text-gray-400">I&#39;ll get back to you within 24 hours</p>
              </div>

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none text-white placeholder-gray-400 resize-none transition-all duration-300"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
