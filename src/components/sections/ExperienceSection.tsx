import { useEffect, useRef } from "react";
import { FiGitCommit } from "react-icons/fi";
import quickskill from "../../assets/images/projects/quick-skill.png";
import skillbnk from "../../assets/images/projects/skillbnk.png";
import media from "../../assets/images/projects/media-hunter.png";
import novel from "../../assets/images/projects/novel-nexus.png";
import inventory from "../../assets/images/projects/inventory.png";
import banglaMarketIcon from "../../assets/images/projects/bangla-market-icon.jpg";
import banglaMarketScreenshot from "../../assets/images/projects/bangla-market-screenshot.jpg";
import affsflowIcon from "../../assets/images/projects/affsflow-icon.webp";
import clicktechIcon from "../../assets/images/projects/clicktech-icon.webp";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  description: string;
  shots: [string, string, string];
  // Shown in place of links for projects that are not public yet.
  status: string | null;
  links: ProjectLink[];
};

type TimelineEntry = {
  id: string;
  year: string | null;
  route: string | null;
  monogram: string;
  company: string;
  current: boolean;
  role: string;
  description: string;
  projects: Project[];
};

const timeline: TimelineEntry[] = [
  {
    id: "brandtech",
    year: "2026",
    route: "BOG",
    monogram: "BT",
    company: "BrandTech",
    current: true,
    role: "Mobile Application Developer",
    description:
      "Since July 2026, with the team in Bogura, Bangladesh. I build Expo and React Native apps for iOS and Android, currently an affiliate marketing platform and a digital goods marketplace.",
    projects: [
      {
        name: "AffsFlow",
        description: "Affiliate marketing platform with admin, affiliate, and advertiser portals in one app",
        shots: [affsflowIcon, affsflowIcon, affsflowIcon],
        status: null,
        links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.brandtech.affsflow" }],
      },
      {
        name: "ClickTech",
        description: "A marketplace for digital codes and premium accounts, with a merchant panel",
        shots: [clicktechIcon, clicktechIcon, clicktechIcon],
        status: "In development",
        links: [],
      },
    ],
  },
  {
    id: "sdb-it",
    year: "2024",
    route: "DHK",
    monogram: "SDB",
    company: "SDB IT",
    current: false,
    role: "Mobile Application Developer",
    description:
      "Jan 2024 – Apr 2026. On-site with the team in Dhaka. I built and shipped React Native apps for iOS and Android, from wireframes to store releases, with OTA updates and push notifications.",
    projects: [
      {
        name: "Bangla Market",
        description: "A multi-vendor marketplace with Stripe checkout and order tracking",
        shots: [banglaMarketIcon, banglaMarketScreenshot, banglaMarketIcon],
        status: null,
        links: [
          { label: "App Store", href: "https://apps.apple.com/us/app/bangla-market/id6753706671" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.banglamarketinc" },
        ],
      },
      {
        name: "Quick Skill",
        description: "Course streaming, in-app purchases, quizzes, and notes for learners",
        shots: [quickskill, quickskill, quickskill],
        status: null,
        links: [
          { label: "App Store", href: "https://apps.apple.com/us/app/quick-skill/id6749635937" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.quickskill" },
        ],
      },
      {
        name: "SkillBNK",
        description: "School management with real-time chat, streaming, and progress tracking",
        shots: [skillbnk, skillbnk, skillbnk],
        status: null,
        links: [
          { label: "App Store", href: "https://apps.apple.com/us/app/bootcamps-hub/id6476014062" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.bootcampshub.ai" },
        ],
      },
    ],
  },
  {
    id: "web",
    year: null,
    route: "Web",
    monogram: "</>",
    company: "Web projects",
    current: false,
    role: "Full-stack Web Developer",
    description: "Full-stack projects with React, Express, and MongoDB that built my frontend foundation.",
    projects: [
      {
        name: "TrendLoom",
        description: "Inventory management with multi-role access, analytics, and Stripe",
        shots: [inventory, inventory, inventory],
        status: null,
        links: [
          { label: "Live site", href: "https://tree-treasures.web.app/" },
          { label: "Code", href: "https://github.com/shuvajitmaitra/Inventory-Management-Client" },
        ],
      },
      {
        name: "Novel Nexus",
        description: "A digital library with borrowing, admin tools, and dark mode",
        shots: [novel, novel, novel],
        status: null,
        links: [
          { label: "Live site", href: "https://novel-nexus.surge.sh/" },
          { label: "Code", href: "https://github.com/shuvajitmaitra/Novel-Nexus-Client" },
        ],
      },
      {
        name: "Media Hunter",
        description: "Movie discovery by category with a personal watchlist",
        shots: [media, media, media],
        status: null,
        links: [
          { label: "Live site", href: "https://media-hunter-io.web.app/" },
          { label: "Code", href: "https://github.com/shuvajitmaitra/Media-Hunter-Client" },
        ],
      },
    ],
  },
  {
    id: "eub",
    year: "2021",
    route: "DHK",
    monogram: "EUB",
    company: "European University of Bangladesh",
    current: false,
    role: "BSc in Electrical and Electronic Engineering",
    description: "2021 – 2025. A foundation in electrical systems, electronics, and problem-solving.",
    projects: [],
  },
  {
    id: "dpi",
    year: "2015",
    route: "BD",
    monogram: "DPI",
    company: "Digital Polytechnic Institute",
    current: false,
    role: "Diploma in Electrical Engineering",
    description: "2015 – 2019. Technical fundamentals and hands-on engineering practice.",
    projects: [],
  },
];

// The 1px rail sits on whole pixels so it stays crisp: inside the column on phones, in the left gutter from md up.
const railLeft = "left-[3px] md:left-[-22px]";
// Dots centre on that line, measured from content that is indented 32px on phones.
const dotLeft = "left-[-28.5px] md:left-[-21.5px]";

const shotPositions = [
  "-translate-x-[92%] -rotate-[9deg] group-hover:-translate-x-[120%] group-hover:-rotate-[15deg]",
  "-translate-x-1/2 z-10 group-hover:-translate-y-[56%] group-hover:scale-[1.03]",
  "-translate-x-[8%] rotate-[8deg] group-hover:translate-x-[18%] group-hover:rotate-[12deg]",
];

// Curve heights match the rail's top offset below: 75px on phones, 110px from md up.
const CURVE_HEIGHT_MOBILE = 75;
const CURVE_HEIGHT_DESKTOP = 110;
// How quickly the fill catches up with the scroll position each frame (0–1).
const FILL_EASING = 0.18;
// The tip of the fill follows this point on the screen, as a fraction of the viewport height.
const FILL_ANCHOR = 0.65;

// An S-curve from above the icon down to the rail, with vertical ends so it meets both smoothly.
const buildCurve = (startX: number, height: number) =>
  `M${startX} 0V${height * 0.07}C${startX} ${height * 0.5} 0.5 ${height * 0.5} 0.5 ${height * 0.93}V${height}`;

const ExperienceSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const curveRef = useRef<SVGSVGElement>(null);
  const curveDotsRef = useRef<SVGPathElement>(null);
  const curveLitRef = useRef<SVGPathElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  // The tip of the fill follows a point about two-thirds down the screen: it runs along the curve first, then
  // down the rail, and every dot it passes lights up. It eases toward that point so it glides.
  useEffect(() => {
    const track = trackRef.current;
    const path = pathRef.current;
    const icon = iconRef.current;
    const curve = curveRef.current;
    const curveDots = curveDotsRef.current;
    const curveLit = curveLitRef.current;
    const rail = railRef.current;
    if (!track || !path || !icon || !curve || !curveDots || !curveLit || !rail) return;

    let curveHeight = CURVE_HEIGHT_MOBILE;
    let railHeight = 0;
    let pathTop = 0;
    let dots: { el: HTMLElement; y: number }[] = [];
    // Both are distances in px, measured down from the top of the curve.
    let current = 0;
    let target = 0;
    let frame = 0;

    const measure = () => {
      curveHeight = window.matchMedia("(min-width: 768px)").matches ? CURVE_HEIGHT_DESKTOP : CURVE_HEIGHT_MOBILE;
      const iconBox = icon.getBoundingClientRect();
      const pathBox = path.getBoundingClientRect();
      const startX = Math.max(1, iconBox.left + iconBox.width / 2 - pathBox.left);
      const d = buildCurve(startX, curveHeight);
      curve.setAttribute("viewBox", `0 0 ${startX + 1} ${curveHeight}`);
      curve.style.width = `${startX + 1}px`;
      curve.style.height = `${curveHeight}px`;
      curveDots.setAttribute("d", d);
      curveLit.setAttribute("d", d);

      railHeight = rail.offsetHeight;
      pathTop = pathBox.top + window.scrollY;
      dots = [...track.querySelectorAll<HTMLElement>("[data-rail-dot]")].map((el) => {
        const box = el.getBoundingClientRect();
        return { el, y: box.top + box.height / 2 + window.scrollY };
      });
    };

    const fillTarget = () => {
      const total = curveHeight + railHeight;
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
      if (atBottom) return total;
      const anchor = window.scrollY + window.innerHeight * FILL_ANCHOR;
      return Math.min(total, Math.max(0, anchor - pathTop));
    };

    const render = () => {
      frame = 0;
      const gap = target - current;
      current = Math.abs(gap) < 0.5 ? target : current + gap * FILL_EASING;

      const curveProgress = Math.min(1, Math.max(0, current / curveHeight));
      const railProgress = railHeight ? Math.min(1, Math.max(0, (current - curveHeight) / railHeight)) : 0;
      path.style.setProperty("--curve-p", curveProgress.toFixed(4));
      path.style.setProperty("--rail-p", railProgress.toFixed(4));

      const litY = pathTop + curveHeight * curveProgress + railHeight * railProgress;
      dots.forEach((dot) => {
        dot.el.dataset.lit = String(dot.y <= litY);
      });

      if (current !== target) frame = requestAnimationFrame(render);
    };

    const handleScroll = () => {
      target = fillTarget();
      if (!frame) frame = requestAnimationFrame(render);
    };
    const handleResize = () => {
      measure();
      handleScroll();
    };

    measure();
    current = fillTarget();
    handleScroll();

    // Images loading or text reflowing moves the dots, so re-measure whenever the page size changes.
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="Experience" className="w-full" aria-label="Experience and projects">
      <div ref={trackRef} className="relative mt-[115px] md:mt-[106px]">
        <div
          aria-hidden="true"
          className="absolute -top-[115px] left-[calc(50%-24px)] w-12 text-center text-accent md:-top-[106px] md:left-[-3px]"
        >
          <span className="block font-mono text-[6px] font-medium uppercase leading-[6px] tracking-[0.76px]">Release log</span>
          <span ref={iconRef} className="mx-auto mt-2.5 block h-[15px] w-4">
            <FiGitCommit className="h-full w-full" />
          </span>
        </div>

        <div aria-hidden="true">
          <div ref={pathRef} className={`absolute -top-[74px] bottom-0 w-px md:-top-[65px] ${railLeft}`}>
            <svg ref={curveRef} className="absolute left-0 top-0 overflow-visible" fill="none">
              <path ref={curveDotsRef} stroke="#CBC9D6" strokeWidth="1" strokeDasharray="2 3.5" strokeLinecap="round" />
              <path
                ref={curveLitRef}
                stroke="#2C6FFF"
                strokeWidth="1.25"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="1"
                className="[filter:drop-shadow(0_0_3px_rgba(44,111,255,0.2))] [stroke-dashoffset:calc(1_-_var(--curve-p,0))]"
              />
            </svg>
            <div
              ref={railRef}
              className="absolute bottom-0 left-0 top-[75px] w-px bg-[linear-gradient(to_bottom,#CBC9D6_0_2px,transparent_2px_5.5px)] bg-[length:1px_5.5px] md:top-[110px]"
            >
              <div className="absolute left-0 top-0 h-[calc(var(--rail-p,0)*100%)] w-full bg-path-blue shadow-[0_0_4px_rgba(44,111,255,0.2),0_0_10px_rgba(44,111,255,0.2),0_0_20px_rgba(44,111,255,0.14)] [opacity:min(1,calc(var(--rail-p,0)*60))] after:absolute after:bottom-0 after:left-1/2 after:-mb-[2.5px] after:-ml-[2.5px] after:h-[5px] after:w-[5px] after:rounded-full after:bg-path-blue after:shadow-[0_0_5px_1px_rgba(44,111,255,0.2),0_0_12px_3px_rgba(44,111,255,0.2)] after:content-[''] after:[opacity:min(1,calc((1_-_var(--rail-p,0))*25))]"></div>
            </div>
            <svg className="absolute -bottom-px left-1/2 h-[3px] w-[7px] -translate-x-1/2 overflow-visible" viewBox="0 0 7 3" fill="none">
              <path d="M0.5 0.5 3.5 2.5 6.5 0.5" stroke="#3A53ED" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <ol className="flex flex-col gap-12 pb-6 pl-8 md:gap-9 md:pl-0">
          {timeline.map((entry, index) => (
            <li
              key={entry.id}
              className="flex flex-col motion-safe:animate-reveal"
              style={{ animationDelay: `${120 + index * 60}ms` }}
            >
              <span className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-rule/60 bg-white font-mono text-[8px] font-medium tracking-tight text-body shadow-[0_0_0_1px_#fff]">
                {entry.monogram}
              </span>

              <div className="relative flex items-center gap-2.5">
                <span className="absolute -left-[70px] top-1/2 hidden w-[33px] -translate-y-1/2 text-center font-mono font-medium uppercase md:block">
                  {entry.route && <span className="block text-[6px] leading-[7px] tracking-[0.9px] text-[#C2C0C0]">{entry.route}</span>}
                  {entry.year && <span className="block text-[12px] leading-[14px] tracking-[1.05px] text-mute">{entry.year}</span>}
                </span>
                <span
                  data-rail-dot
                  aria-hidden="true"
                  className={`absolute top-1/2 z-10 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dot-line bg-canvas transition-colors duration-300 ease-out after:absolute after:left-1/2 after:top-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-dot-fill after:transition-colors after:duration-300 after:content-[''] data-[lit=true]:border-accent data-[lit=true]:after:bg-accent ${dotLeft}`}
                ></span>
                <h2 className="text-base font-medium leading-[1.8] tracking-[-0.12px] text-ink">{entry.company}</h2>
                {entry.current && (
                  <span className="pt-[3px] font-mono text-[12px] font-medium uppercase leading-none tracking-[0.96px] text-accent">
                    Current
                  </span>
                )}
              </div>
              <p className="mb-0.5 text-base font-medium leading-[1.6] tracking-[-0.12px] text-body">{entry.role}</p>
              <p className="text-base leading-[1.6] tracking-[-0.12px] text-body/80">{entry.description}</p>

              {entry.projects.length > 0 && (
                <ul className="mt-2.5 flex flex-col gap-2.5">
                  {entry.projects.map((project) => (
                    <li key={project.name} className="relative">
                      <span
                        data-rail-dot
                        aria-hidden="true"
                        className={`absolute top-1/2 z-10 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dot-case transition-colors duration-300 ease-out data-[lit=true]:bg-accent ${dotLeft}`}
                      ></span>
                      <div className="group flex items-center gap-[7px] rounded-2xl px-2 py-0.5 transition-colors duration-300 ease-out hover:bg-hover md:px-[15px]">
                        <div className="relative h-[63px] w-[66px] shrink-0" aria-hidden="true">
                          {project.shots.map((shot, shotIndex) => (
                            <img
                              key={shotIndex}
                              src={shot}
                              alt=""
                              loading="lazy"
                              className={`absolute left-1/2 top-1/2 h-[46px] w-[32px] -translate-y-1/2 rounded-[5px] border border-white bg-white object-cover object-top shadow-[0_2px_6px_rgba(0,0,0,0.14)] transition-transform duration-300 ease-out ${shotPositions[shotIndex]}`}
                            />
                          ))}
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col justify-center">
                          <h3 className="text-[14px] font-medium leading-[17.5px] text-title">{project.name}</h3>
                          <p className="text-[13px] font-medium leading-[21px] text-desc">{project.description}</p>
                          <p className="flex flex-wrap gap-x-3 font-mono text-[10px] uppercase leading-[18px] tracking-[0.9px]">
                            {project.status && <span className="text-mute">{project.status}</span>}
                            {project.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm text-faint transition-colors duration-300 hover:text-accent focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent"
                              >
                                {link.label}
                                <span className="sr-only"> for {project.name} (opens in a new tab)</span>
                              </a>
                            ))}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
