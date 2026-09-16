const resume = "https://github.com/shuvajitmaitra/portfolio-website/releases/download/resume/Shuvajit_Maitra_Resume.pdf";

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shuvajit-maitra/" },
  { label: "GitHub", href: "https://github.com/shuvajitmaitra" },
  { label: "WhatsApp", href: "https://wa.me/8801949887896" },
  { label: "Email", href: "mailto:shuvajitmaitra@gmail.com" },
  { label: "Resume", href: resume },
];

const Footer = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-40 bg-gradient-to-t from-white/90 via-white/55 to-white/0 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_35%,transparent)]"
      ></div>
      <footer className="fixed inset-x-0 bottom-0 z-50 pb-8 pt-11">
        <ul className="mx-auto flex w-[min(100%_-_3rem,560px)] flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint sm:gap-x-9 sm:text-[12px] sm:tracking-[0.18em]">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-sm transition-colors duration-300 ease-out hover:text-[#6C6C6C] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};
export default Footer;
