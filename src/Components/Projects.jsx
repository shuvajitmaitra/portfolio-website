import { FaCloud, FaCode, FaDesktop, FaExternalLinkAlt, FaGithub, FaGooglePlay, FaMobile, FaReact } from "react-icons/fa";
import { SiFirebase, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { useState } from "react";
import { TbBrandReactNative } from "react-icons/tb";
import { RiAppleLine } from "react-icons/ri";
import { LiaCcStripe } from "react-icons/lia";
const quickskill = "../src/assets/quickskill.png";
const skillbnk = "../src/assets/skillbnk.png";
const media = "../src/assets/media-hunter.png";
const novel = "../src/assets/novel-nexus.png";
const inventory = "../src/assets/inventory.png";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 4,
      name: "Quick Skill",
      category: "mobile",
      thumbnail: quickskill,
      type: "Online Learning Platform",
      gradient: "from-green-500 to-teal-500",
      description:
        "A comprehensive online learning platform with course video streaming, in-app purchases, and interactive learning features for students.",
      features: [
        "User Authentication & Course Video Streaming",
        "In-App Purchase (iOS) & Stripe Payment (Android)",
        "Over-The-Air with Revopush & Adjustable Playback",
        "Quizzes and Assessments & Taking Notes",
        "Group Discussion, Search and Discovery & Activity Tracking",
      ],
      technologies: [
        { icon: <TbBrandReactNative />, name: "React Native CLI", color: "text-cyan-400" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
        { icon: <SiRedux />, name: "Redux Toolkit", color: "text-purple-400" },
        { icon: <LiaCcStripe />, name: "Stripe", color: "text-purple-400" },
        { icon: <RiAppleLine />, name: "In-app Purchase", color: "text-cyan-500" },
        { icon: <FaCode />, name: "OTA-Update", color: "text-orange-400" },
      ],
      links: {
        live: "https://apps.apple.com/us/app/quick-skill/id6749635937",
        client: "https://play.google.com/store/apps/details?id=com.quickskill",
        server: "#",
      },
    },
    {
      id: 5,
      name: "SkillBNK",
      category: "mobile",
      thumbnail: skillbnk,
      type: "School Management System",
      gradient: "from-orange-500 to-red-500",
      description:
        "A comprehensive school management system with real-time communication, course management, and advanced educational features for institutions.",
      features: [
        "User Authentication & Personalized Calendar to manage event",
        "Real Time Chat Program & Courses video streaming",
        "Community & Personalized dashboard",
        "Progress tracking & Mock interviews",
        "Leaderboard, Taking notes with markdown editor & Push Notifications",
      ],
      technologies: [
        { icon: <TbBrandReactNative />, name: "React Native CLI", color: "text-cyan-400" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
        { icon: <SiRedux />, name: "Redux Toolkit", color: "text-purple-400" },
        { icon: <FaCloud />, name: "FCM Push Notification", color: "text-orange-400" },
        { icon: <FaCode />, name: "WebSocket & Hot-OTA", color: "text-green-400" },
      ],
      links: {
        live: "https://apps.apple.com/us/app/bootcamps-hub/id6476014062",
        client: "https://play.google.com/store/apps/details?id=com.bootcampshub.ai",
        server: "#",
      },
    },
    {
      id: 1,
      name: "TrendLoom",
      category: "web",
      thumbnail: inventory,
      type: "Inventory Management Platform",
      gradient: "from-green-400 to-blue-500",
      description:
        "A comprehensive inventory management system with multi-role access, payment integration, and advanced analytics dashboard.",
      features: [
        "Multi-role authentication (User, Manager, Admin)",
        "Stripe payment gateway integration",
        "Real-time analytics and reporting",
        "JWT security implementation",
        "Firebase authentication & image hosting",
      ],
      technologies: [
        { icon: <FaReact />, name: "React", color: "text-cyan-400" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
        { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
        { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
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
      thumbnail: novel,
      type: "Digital Library System",
      gradient: "from-purple-400 to-pink-500",
      description: "A modern library management system with book borrowing, admin controls, and theme customization features.",
      features: [
        "JWT cookie-based authentication",
        "Backend data sorting and filtering",
        "Admin panel for book management",
        "Dark/Light mode toggle",
        "Book borrowing and return system",
      ],
      technologies: [
        { icon: <FaReact />, name: "React", color: "text-cyan-400" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
        { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
        { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
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
      thumbnail: media,
      type: "Movie Discovery Platform",
      gradient: "from-indigo-500 to-purple-600",
      description: "A movie discovery and collection platform with categorized browsing and personalized watchlist features.",
      features: [
        "Movie categorization and filtering",
        "User cart/watchlist functionality",
        "Firebase authentication system",
        "Personalized user dashboard",
        "Responsive movie browsing interface",
      ],
      technologies: [
        { icon: <FaReact />, name: "React", color: "text-cyan-400" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "text-sky-400" },
        { icon: <IoLogoJavascript />, name: "JavaScript", color: "text-yellow-400" },
        { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
        { icon: <SiExpress />, name: "Express", color: "text-gray-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
      ],
      links: {
        live: "https://media-hunter-io.web.app/",
        client: "https://github.com/shuvajitmaitra/Media-Hunter-Client",
        server: "https://github.com/shuvajitmaitra/Media-Hunter-Server",
      },
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <FaCode /> },
    { id: "mobile", name: "Mobile Apps", icon: <FaMobile /> },
    { id: "web", name: "Web Apps", icon: <FaDesktop /> },
  ];

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);
  return (
    <div id="Project" className="min-h-screen bg-gray-900 text-white pt-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            PROJECTS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Showcasing my journey through web development and mobile app creation</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 flex rounded-full p-2 border border-gray-700">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full mx-1 flex items-center gap-2 transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
            >
              {/* Project Header with Gradient */}
              <div
                className={`h-48 bg-[url('${project.thumbnail}')] bg-contain bg-center bg-no-repeat bg-gradient-to-r ${project.gradient} relative z-30`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-white border-opacity-20">
                    {project.category === "web" ? "Web App" : "Mobile App"}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-sm text-gray-200 font-medium">{project.type}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start">
                        <span className="text-cyan-400 mr-2 text-xs">•</span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && <li className="text-xs text-gray-500">+{project.features.length - 3} more features</li>}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-gray-700 bg-opacity-50 px-2 py-1 rounded-lg border border-gray-600"
                      >
                        <span className={`text-sm ${tech.color}`}>{tech.icon}</span>
                        <span className="text-xs text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.category === "web" && (
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 text-xs"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                    <a
                      href={project.links.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 border border-gray-600 text-xs"
                    >
                      <FaGithub className="text-xs" />
                      Code
                    </a>
                  </div>
                )}
                {project.category === "mobile" && (
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 text-xs"
                    >
                      <RiAppleLine className="text-xs" />
                      App Store
                    </a>
                    <a
                      href={project.links.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg font-medium transition-all duration-300 border border-gray-600 text-xs"
                    >
                      <FaGooglePlay className="text-xs" />
                      Play Store
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
