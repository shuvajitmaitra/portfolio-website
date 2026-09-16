import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import casualImage from "../../assets/images/profile/shuvajit-maitra-casual.jpg";
import formalImage from "../../assets/images/profile/shuvajit-maitra-formal.webp";
import banglaMarketIcon from "../../assets/images/projects/bangla-market-icon.jpg";

const photos = [
  { src: formalImage, className: "-rotate-[10deg] translate-x-3" },
  { src: casualImage, className: "z-10 -translate-y-1" },
  { src: banglaMarketIcon, className: "rotate-[9deg] -translate-x-3" },
];

const fieldClass =
  "w-full rounded-xl border border-rule/70 bg-white/70 px-3.5 py-2.5 text-[15px] text-ink placeholder:text-faint transition-colors duration-300 ease-out focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

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
      toast.success("Message sent. I’ll get back to you soon.", { duration: 4000 });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      const errorText = error instanceof Object && "text" in error ? String(error.text) : "";
      toast.error(errorText || "Message not sent. Check your connection and try again.", { duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="w-full pl-8 md:pl-0">
      <div className="flex flex-wrap items-center gap-6">
        <div className="min-w-[min(100%,260px)] flex-[1_1_260px]">
          <h2 className="text-base font-medium leading-[1.6] tracking-[-0.12px] text-body">Have an app in mind? Let’s build it.</h2>
          <p className="text-[14px] leading-[1.6] tracking-[-0.12px] text-body/80">Send a message and I’ll get back to you soon.</p>
        </div>
        <div className="flex items-center pr-2" aria-hidden="true">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt=""
              loading="lazy"
              className={`-mx-2 h-[56px] w-[42px] rounded-[6px] border-2 border-white object-cover shadow-[0_3px_8px_rgba(0,0,0,0.16)] transition-transform duration-300 ease-out ${photo.className}`}
            />
          ))}
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={fieldClass}
            />
          </label>
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={fieldClass}
            />
          </label>
        </div>
        <label className="block">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What are you building, and when do you need it?"
            value={formData.message}
            onChange={handleInputChange}
            className={`${fieldClass} resize-none`}
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-canvas transition-colors duration-300 ease-out hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:bg-mute"
        >
          {isSubmitting && <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-canvas border-t-transparent"></span>}
          {isSubmitting ? "Sending message…" : "Send message"}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
