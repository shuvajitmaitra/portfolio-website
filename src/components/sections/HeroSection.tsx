import profileImage from "../../assets/images/profile/shuvajit-maitra-formal.webp";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
const resume = "https://github.com/shuvajitmaitra/portfolio-website/releases/download/resume/Shuvajit_Maitra_Resume.pdf";
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shuvajit-maitra/",
    icon: <FaLinkedinIn className="text-lg" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/shuvajitmaitra",
    icon: <FaGithub className="text-lg" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801949887896",
    icon: <FaWhatsapp className="text-lg" />,
  },
];

const HeroSection = () => {
  const handleSeeWorks = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("Project")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gray-900 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-6 lg:pb-16">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-8 h-72 w-72 rounded-full bg-cyan-400/8 blur-3xl"></div>
        <div className="absolute right-[-8%] top-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-end">
        <div className="order-2 lg:order-1">
          <div className="flex items-start gap-5">
            <div className="hidden lg:flex min-h-[420px] flex-col items-center justify-between text-xs uppercase tracking-[0.28em] text-gray-500">
              <span className="[writing-mode:vertical-rl] rotate-180">React Native • Flutter</span>
              <span className="[writing-mode:vertical-rl] rotate-180">2026</span>
            </div>

            <div className="w-full">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                <span className="rounded-full border border-white/10 px-4 py-2">Shuvajit Maitra</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-300">Dhaka, Bangladesh</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl xl:text-[7.5rem]">
                Mobile
                <br />
                Application
                <br />
                Developer
              </h1>

              <div className="mt-6 max-w-2xl space-y-4">
                <p className="text-base leading-8 text-gray-300 sm:text-lg">
                  React Native and Flutter developer crafting clean, production-ready mobile experiences for iOS and Android.
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  Cross-platform apps • Store delivery • Clean product execution
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={resume}
                  download={resume}
                  className="inline-flex items-center gap-3 border-b border-white pb-1 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-70"
                >
                  Resume
                  <FiDownload />
                </a>

                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    to={social.href}
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-[620px]">
            <div className="absolute inset-0 scale-[0.92] rounded-[36px] bg-gradient-to-br from-white/8 via-cyan-400/10 to-transparent blur-2xl"></div>
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-slate-800/70 to-slate-900/80">
              <div className="absolute left-6 top-6 z-10 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md shadow-lg shadow-black/20">
                Available for work
              </div>
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"></span>
                Remote / Hybrid / Onsite
              </div>
              <img
                src={profileImage}
                alt="Shuvajit Maitra"
                className="h-[420px] w-full object-cover object-center grayscale-[8%] sm:h-[520px] lg:h-[620px] banner-image"
              />
            </div>

            <div className="mt-4 flex justify-end text-sm text-gray-500">
              <a
                href="#Project"
                onClick={handleSeeWorks}
                className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-cyan-300"
              >
                See works
                <FiArrowDownRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .banner-image {
          animation: bannerFloat 7s ease-in-out infinite;
          transform-origin: center center;
        }

        @keyframes bannerFloat {
          0%, 100% {
            transform: scale(1) translateY(0px);
          }
          50% {
            transform: scale(1.02) translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
