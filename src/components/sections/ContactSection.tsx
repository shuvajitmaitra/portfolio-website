import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import formalImage from "../../assets/images/profile/shuvajit-maitra-formal.webp";
import brandtechLogo from "../../assets/images/logos/brandtech.webp";
import sdbItLogo from "../../assets/images/logos/sdb-it.webp";
import eubLogo from "../../assets/images/logos/eub.webp";
import dpiLogo from "../../assets/images/logos/dpi.webp";

const cards = [
  { src: formalImage, label: "Hello, I’m Shuvajit", href: null, fit: "object-cover object-top", bg: "bg-white" },
  { src: brandtechLogo, label: "BrandTech", href: "https://brandtechit.com/", fit: "object-contain", bg: "bg-white" },
  { src: sdbItLogo, label: "SDB IT", href: "https://www.linkedin.com/company/software-driven-business-it/", fit: "object-contain", bg: "bg-white" },
  { src: eubLogo, label: "European University of Bangladesh", href: "https://eub.edu.bd/", fit: "object-contain", bg: "bg-white" },
  { src: dpiLogo, label: "Digital Polytechnic Institute", href: "https://www.linkedin.com/company/polytechnickhulna/", fit: "object-contain", bg: "bg-white" },
];

// At rest the cards sit in an arc, like a hand of cards: tilted out from the centre and dropping toward the edges.
const ARC_TILT = 6; // degrees per step from the centre
const ARC_DROP = 1.5; // px per step squared from the centre
const cardRest = (index: number, count: number) => {
  const offset = index - (count - 1) / 2;
  return { rotate: offset * ARC_TILT, y: offset * offset * ARC_DROP };
};
// How far neighbours slide away from the hovered card, in px.
const CARD_PUSH = 12;

const cardTransform = (index: number, active: number | null) => {
  const { rotate, y } = cardRest(index, cards.length);
  if (active === null) return `translate(0px, ${y}px) rotate(${rotate}deg)`;
  if (index === active) return "translate(0px, -10px) rotate(0deg) scale(1.2)";
  const shift = Math.sign(index - active) * CARD_PUSH;
  return `translate(${shift}px, ${y + 3}px) rotate(${rotate * 1.3}deg) scale(0.95)`;
};

const fieldClass =
  "w-full rounded-xl border border-rule/70 bg-white/70 px-3.5 py-2.5 text-[15px] text-ink placeholder:text-faint transition-colors duration-300 ease-out focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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
      // Provider errors (e.g. an expired Gmail connection in EmailJS) stay in the console; visitors get a way to reach me instead.
      console.error("Email send failed:", error);
      toast.error("Message not sent. Please try again or email shuvajitmaitra@gmail.com.", { duration: 6000 });
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
        {/* A fan of cards: the hovered one lifts, straightens and shows its caption while its neighbours make room. */}
        <ul className="flex items-center pl-3 pr-5" onMouseLeave={() => setActiveCard(null)}>
          {cards.map((card, index) => {
            const active = activeCard === index;
            const inner = (
              <>
                <span
                  className={`block h-[56px] w-[42px] overflow-hidden rounded-[8px] border-2 border-white transition-[transform,box-shadow] duration-[400ms] ease-out motion-reduce:transition-none ${card.bg} ${
                    active ? "shadow-[0_14px_24px_-8px_rgba(0,0,0,0.35)]" : "shadow-[0_3px_8px_rgba(0,0,0,0.16)]"
                  }`}
                  style={{ transform: cardTransform(index, activeCard) }}
                >
                  <img src={card.src} alt="" loading="lazy" draggable={false} className={`h-full w-full select-none ${card.fit}`} />
                </span>
                <span
                  className={`pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-ink px-2 py-1 font-mono text-[11px] uppercase leading-none tracking-[1px] text-white transition-[opacity,transform] duration-200 ease-out ${
                    active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
                >
                  {card.label}
                </span>
              </>
            );
            const handlers = {
              onMouseEnter: () => setActiveCard(index),
              onFocus: () => setActiveCard(index),
              onBlur: () => setActiveCard(null),
            };
            return (
              <li key={card.label} className="relative -ml-3 first:ml-0" style={{ zIndex: active ? cards.length + 1 : index + 1 }}>
                {card.href ? (
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className="relative block focus-visible:outline-none" {...handlers}>
                    {inner}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="relative block" {...handlers}>
                    {inner}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
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
