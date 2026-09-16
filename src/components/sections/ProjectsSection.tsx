import { useState, type ReactNode } from "react";
import {
  FaArrowRight,
  FaCloud,
  FaCode,
  FaDesktop,
  FaExternalLinkAlt,
  FaGithub,
  FaGooglePlay,
  FaMobile,
  FaReact,
  FaStore,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaCcStripe } from "react-icons/lia";
import { RiAppleLine } from "react-icons/ri";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import quickskill from "../../assets/images/projects/quick-skill.png";
import skillbnk from "../../assets/images/projects/skillbnk.png";
import media from "../../assets/images/projects/media-hunter.png";
import novel from "../../assets/images/projects/novel-nexus.png";
import inventory from "../../assets/images/projects/inventory.png";
import banglaMarketIcon from "../../assets/images/projects/bangla-market-icon.jpg";
import banglaMarketScreenshot from "../../assets/images/projects/bangla-market-screenshot.jpg";

type ProjectCategory = "mobile" | "web";

type Technology = {
  icon: ReactNode;
  name: string;
  color: string;
};

type Project = {
  id: number;
  name: string;
  category: ProjectCategory;
  featured: boolean;
  thumbnail: string;
  logo?: string;
  type: string;
  impact: string;
  gradient: string;
  description: string;
  summary?: string;
  features: string[];
  technologies: Technology[];
  links: {
    appStore?: string | null;
    playStore?: string | null;
    client?: string | null;
    server?: string | null;
    live?: string | null;
  };
};

const projects: Project[] = [
  {
    id: 6,
    name: "Bangla Market",
    category: "mobile",
    featured: true,
    thumbnail: banglaMarketScreenshot,
    logo: banglaMarketIcon,
    type: "Multi-Vendor E-Commerce Platform",
    impact: "Latest Project",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    description:
      "A production-ready React Native marketplace experience built for product discovery, checkout flow, shipping, and user engagement across iOS and Android.",
    summary:
      "Built a modern multi-vendor commerce app with strong mobile UX, payments, notifications, search, and OTA delivery workflows.",
    features: [
      "User authentication with Sign in with Apple and Google Sign-In",
      "Variation-based product management and dynamic product discovery",
      "Saved cards and Stripe payment flow for smooth checkout",
      "Location permissions, ordering, and shipping flow",
      "Campaign management, advanced filtering, and OTA updates",
      "OneSignal push notifications for engagement and order communication",
    ],
    technologies: [
      { icon: <TbBrandReactNative />, name: "React Native CLI", color: "text-cyan-400" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
      { icon: <SiRedux />, name: "Redux Toolkit", color: "text-purple-400" },
      { icon: <LiaCcStripe />, name: "Stripe", color: "text-violet-300" },
      { icon: <FaCloud />, name: "OneSignal", color: "text-emerald-300" },
      { icon: <FaCode />, name: "OTA Updates", color: "text-amber-300" },
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/bangla-market/id6753706671",
      playStore: "https://play.google.com/store/apps/details?id=com.banglamarketinc",
      client: null,
      server: null,
    },
  },
  {
    id: 4,
    name: "Quick Skill",
    category: "mobile",
    featured: false,
    thumbnail: quickskill,
    type: "Online Learning Platform",
    impact: "Store Published",
    gradient: "from-green-500 to-teal-500",
    description:
      "A mobile learning platform with content delivery, in-app payments, assessments, note taking, and learner activity tracking.",
    features: [
      "Course video streaming with authentication",
      "In-App Purchase on iOS and Stripe payment on Android",
      "Revopush OTA delivery with adjustable playback",
      "Quizzes, note taking, dashboard, and discussion features",
    ],
    technologies: [
      { icon: <TbBrandReactNative />, name: "React Native CLI", color: "text-cyan-400" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
      { icon: <SiRedux />, name: "Redux Toolkit", color: "text-purple-400" },
      { icon: <LiaCcStripe />, name: "Stripe", color: "text-violet-300" },
      { icon: <RiAppleLine />, name: "In-App Purchase", color: "text-cyan-500" },
      { icon: <FaCode />, name: "Hot-OTA", color: "text-orange-400" },
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/quick-skill/id6749635937",
      playStore: "https://play.google.com/store/apps/details?id=com.quickskill",
      client: null,
      server: null,
    },
  },
  {
    id: 5,
    name: "SkillBNK",
    category: "mobile",
    featured: false,
    thumbnail: skillbnk,
    type: "School Management System",
    impact: "Store Published",
    gradient: "from-orange-500 to-red-500",
    description:
      "A school management mobile app with community, real-time communication, progress tracking, and streaming-based learning experiences.",
    features: [
      "Authentication and personalized calendar",
      "Real-time chat, community, and video streaming",
      "Dashboard, progress tracking, and mock interviews",
      "Leaderboard, markdown notes, and push notifications",
    ],
    technologies: [
      { icon: <TbBrandReactNative />, name: "React Native CLI", color: "text-cyan-400" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
      { icon: <SiRedux />, name: "Redux Toolkit", color: "text-purple-400" },
      { icon: <FaCloud />, name: "FCM", color: "text-orange-400" },
      { icon: <FaCode />, name: "WebSocket + OTA", color: "text-green-400" },
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/bootcamps-hub/id6476014062",
      playStore: "https://play.google.com/store/apps/details?id=com.bootcampshub.ai",
      client: null,
      server: null,
    },
  },
  {
    id: 1,
    name: "TrendLoom",
    category: "web",
    featured: false,
    thumbnail: inventory,
    type: "Inventory Management Platform",
    impact: "Web Project",
    gradient: "from-green-400 to-blue-500",
    description:
      "A web platform with multi-role access, analytics dashboards, and payment workflows for inventory and operations management.",
    features: [
      "Multi-role authentication",
      "Stripe payment gateway integration",
      "Real-time analytics and reporting",
      "JWT security and Firebase auth",
    ],
    technologies: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
      { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
      { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
    ],
    links: {
      live: "https://tree-treasures.web.app/",
      client: "https://github.com/shuvajitmaitra/Inventory-Management-Client",
      server: "https://github.com/shuvajitmaitra/Inventory-Management-Server",
    },
  },
  {
    id: 2,
    name: "Novel Nexus",
    category: "web",
    featured: false,
    thumbnail: novel,
    type: "Digital Library System",
    impact: "Web Project",
    gradient: "from-purple-400 to-pink-500",
    description: "A library platform with borrowing flow, admin controls, and polished theme customization.",
    features: [
      "JWT cookie-based authentication",
      "Sorting, filtering, and admin tools",
      "Dark and light mode toggle",
      "Borrow and return system",
    ],
    technologies: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
      { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
      { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
    ],
    links: {
      live: "https://novel-nexus.surge.sh/",
      client: "https://github.com/shuvajitmaitra/Novel-Nexus-Client",
      server: "https://github.com/shuvajitmaitra/Media-Hunter-Server",
    },
  },
  {
    id: 3,
    name: "Media Hunter",
    category: "web",
    featured: false,
    thumbnail: media,
    type: "Movie Discovery Platform",
    impact: "Web Project",
    gradient: "from-indigo-500 to-purple-600",
    description: "A movie browsing platform with category exploration and user-focused collection features.",
    features: [
      "Movie categorization and filtering",
      "Watchlist and personalized dashboard",
      "Firebase authentication",
      "Responsive browsing interface",
    ],
    technologies: [
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
      { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
      { icon: <SiExpress />, name: "Express", color: "text-gray-300" },
      { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
    ],
    links: {
      live: "https://media-hunter-io.web.app/",
      client: "https://github.com/shuvajitmaitra/Media-Hunter-Client",
      server: "https://github.com/shuvajitmaitra/Media-Hunter-Server",
    },
  },
];

const categories: { id: ProjectCategory | "all"; name: string; icon: ReactNode }[] = [
  { id: "all", name: "All Projects", icon: <FaCode /> },
  { id: "mobile", name: "Mobile Apps", icon: <FaMobile /> },
  { id: "web", name: "Web Apps", icon: <FaDesktop /> },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);
  const featuredProject = filteredProjects.find((project) => project.featured) || filteredProjects[0];
  const supportingProjects = filteredProjects.filter((project) => project.id !== featuredProject?.id);
  const mobileProjects = supportingProjects.filter((project) => project.category === "mobile");
  const webProjects = supportingProjects.filter((project) => project.category === "web");

  const renderProjectCard = (project: Project) => (
    <article
      key={project.id}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
    >
      <div
        className={`relative h-52 bg-gradient-to-br ${project.gradient} p-5`}
        style={
          project.thumbnail
            ? {
                backgroundImage: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.5)), url(${project.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-slate-950/20 transition-all duration-300 group-hover:bg-slate-950/35"></div>
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {project.category === "mobile" ? "Mobile App" : "Web App"}
            </span>
            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {project.impact}
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <p className="mt-1 text-sm text-white/90">{project.type}</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-7 text-gray-300">{project.description}</p>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">Highlights</h4>
          <div className="space-y-2">
            {project.features.slice(0, 3).map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-gray-200">
              <span className={tech.color}>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.category === "mobile" && project.links?.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-all duration-300 hover:scale-105"
            >
              <RiAppleLine />
              App Store
            </a>
          )}
          {project.category === "mobile" && project.links?.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-200 transition-all duration-300 hover:scale-105"
            >
              <FaGooglePlay />
              Play Store
            </a>
          )}
          {project.category === "web" && project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
          {project.category === "web" && project.links?.client && (
            <a
              href={project.links.client}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section id="Project" className="min-h-screen bg-gray-900 text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 sm:mb-6">
            PROJECTS
          </h2>
          <p className="text-base sm:text-lg leading-7 text-gray-300 max-w-3xl mx-auto">
              A stronger snapshot of my mobile-first work, from production commerce and learning apps to the web projects that shaped my
              frontend foundation.
            </p>
          </div>
        <div className="mb-14 flex justify-center">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-5 text-center flex min-h-[120px] flex-col items-center justify-center">
              <p className="text-2xl font-bold text-cyan-300">3+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">Published Apps</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-5 text-center flex min-h-[120px] flex-col items-center justify-center">
              <p className="text-2xl font-bold text-emerald-300">2</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">Platforms</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-5 text-center flex min-h-[120px] flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-300">Mobile First</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">Delivery Focus</p>
            </div>
          </div>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap justify-center rounded-full border border-gray-700 bg-gray-800 p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`mx-1 flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {featuredProject && (
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6 sm:p-8 mb-10">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"></div>

            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                    Featured Project
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-gray-200">
                    {featuredProject.impact}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white">{featuredProject.name}</h3>
                <p className="mt-2 text-lg text-gray-300">{featuredProject.type}</p>
                <p className="mt-5 max-w-3xl text-sm sm:text-base leading-7 text-gray-300">{featuredProject.summary || featuredProject.description}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {featuredProject.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/80 px-3 py-2 text-xs sm:text-sm text-gray-200"
                    >
                      <span className={tech.color}>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {featuredProject.links?.appStore && (
                    <a
                      href={featuredProject.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105"
                    >
                      <RiAppleLine />
                      App Store
                    </a>
                  )}
                  {featuredProject.links?.playStore && (
                    <a
                      href={featuredProject.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-200 transition-all duration-300 hover:scale-105"
                    >
                      <FaGooglePlay />
                      Play Store
                    </a>
                  )}
                </div>
              </div>

              <div className="grid gap-4">
                <div className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${featuredProject.gradient} p-6 min-h-[320px]`}>
                  <div className="absolute inset-0 bg-slate-950/45"></div>
                  {featuredProject.thumbnail ? (
                    <div
                      className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-95"
                      style={{
                        backgroundImage: `url(${featuredProject.thumbnail})`,
                      }}
                    ></div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent"></div>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white">
                        {featuredProject.category === "mobile" ? "Mobile App" : "Web App"}
                      </span>
                      <FaStore className="text-2xl text-white/90" />
                    </div>

                    <div className="max-w-xs">
                      {featuredProject.logo ? (
                        <img
                          src={featuredProject.logo}
                          alt={`${featuredProject.name} app icon`}
                          className="mb-4 h-16 w-16 rounded-2xl border border-white/20 object-cover shadow-2xl shadow-black/30"
                        />
                      ) : (
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-3xl font-bold text-white backdrop-blur-sm">
                          {featuredProject.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      )}
                      <p className="text-3xl font-bold text-white">{featuredProject.name}</p>
                      <p className="mt-2 text-sm leading-6 text-white/85">{featuredProject.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Focus</p>
                    <p className="mt-3 text-lg font-semibold text-white">Commerce UX</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Payments</p>
                    <p className="mt-3 text-lg font-semibold text-white">Stripe Flow</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Release</p>
                    <p className="mt-3 text-lg font-semibold text-white">OTA Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeCategory === "all" ? (
          <div className="space-y-10">
            {mobileProjects.length > 0 && (
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <FaMobile />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Mobile Apps</h3>
                    <p className="text-sm text-gray-400">Published and production-focused React Native projects.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {mobileProjects.map((project) => renderProjectCard(project))}
                </div>
              </div>
            )}

            {webProjects.length > 0 && (
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300">
                    <FaDesktop />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Web Apps</h3>
                    <p className="text-sm text-gray-400">Frontend and full-stack projects that built my product foundation.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {webProjects.map((project) => renderProjectCard(project))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={`grid grid-cols-1 gap-6 ${activeCategory === "mobile" ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
            {supportingProjects.map((project) => renderProjectCard(project))}
          </div>
        )}

        <div className="mt-12 rounded-[28px] border border-white/10 bg-gradient-to-r from-slate-800 to-slate-900 p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">What This Section Shows</p>
              <p className="mt-3 text-base sm:text-lg leading-7 text-gray-300">
                My recent portfolio work is strongest in React Native product delivery, especially apps that require payments, push
                notifications, OTA updates, and polished cross-platform user flows.
              </p>
            </div>
            <a
              href="#Experience"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:scale-105"
            >
              View Experience
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
