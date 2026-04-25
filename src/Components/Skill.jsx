import { useState } from "react";
import {
  FaApple,
  FaCloud,
  FaCode,
  FaCreditCard,
  FaDatabase,
  FaGithub,
  FaGooglePlay,
  FaLightbulb,
  FaMobile,
  FaNodeJs,
  FaReact,
  FaRocket,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import {
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const featuredFrameworks = [
    {
      name: "React Native",
      subtitle: "Production cross-platform mobile apps",
      icon: <TbBrandReactNative />,
      color: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-300",
    },
    {
      name: "Flutter",
      subtitle: "Also building modern apps with Flutter",
      icon: <SiFlutter />,
      color: "from-sky-500 to-indigo-500",
      iconColor: "text-sky-300",
    },
  ];

  const skillsData = {
    "Mobile Development": {
      icon: <FaMobile />,
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React Native CLI", icon: <TbBrandReactNative />, color: "text-cyan-400" },
        { name: "Flutter", icon: <SiFlutter />, color: "text-sky-400" },
        { name: "Expo", icon: <SiExpo />, color: "text-white" },
        { name: "Native Modules", icon: <FaCode />, color: "text-green-400" },
      ],
    },
    "State Management": {
      icon: <SiRedux />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Redux Toolkit", icon: <SiRedux />, color: "text-purple-400" },
        { name: "Redux Persist", icon: <SiRedux />, color: "text-purple-300" },
        { name: "AsyncStorage", icon: <FaDatabase />, color: "text-orange-400" },
        { name: "MMKV Storage", icon: <FaDatabase />, color: "text-yellow-400" },
      ],
    },
    "APIs & Integrations": {
      icon: <FaCloud />,
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "RESTful APIs", icon: <FaCode />, color: "text-green-400" },
        { name: "Firebase FCM", icon: <IoLogoFirebase />, color: "text-orange-400" },
        { name: "Axios", icon: <FaRocket />, color: "text-blue-400" },
      ],
    },
    Languages: {
      icon: <FaCode />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      ],
    },
    "UI/UX & Design": {
      icon: <FaLightbulb />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "Reanimated", icon: <FaReact />, color: "text-cyan-500" },
        { name: "React Native Paper", icon: <FaReact />, color: "text-blue-400" },
        { name: "Responsive Design", icon: <FaMobile />, color: "text-purple-400" },
      ],
    },
    "Publishing & Payments": {
      icon: <FaCreditCard />,
      color: "from-rose-500 to-pink-500",
      skills: [
        { name: "Apple App Store", icon: <FaApple />, color: "text-gray-300" },
        { name: "Google Play Store", icon: <FaGooglePlay />, color: "text-green-500" },
        { name: "Stripe Integration", icon: <SiStripe />, color: "text-indigo-400" },
        { name: "In-app Purchases", icon: <FaCreditCard />, color: "text-green-400" },
      ],
    },
  };

  const allSkills = Object.values(skillsData).flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category,
    }))
  );

  return (
    <div id="Skill" className="min-h-screen bg-gray-900 text-white pt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6">
            SKILLS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional mobile experiences with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredFrameworks.map((framework) => (
            <div
              key={framework.name}
              className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${framework.color} p-[1px]`}
            >
              <div className="h-full rounded-[27px] bg-slate-900/95 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-4xl ${framework.iconColor}`}>
                    {framework.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Mobile Framework</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{framework.name}</h3>
                    <p className="mt-2 text-sm sm:text-base leading-7 text-gray-300">{framework.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skills Cloud */}
        <div className="relative mb-20">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {allSkills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-400 rounded-full px-6 py-4 transition-all duration-500 cursor-pointer transform hover:scale-110 hover:rotate-2 ${
                  hoveredSkill === skill.name ? "shadow-2xl shadow-cyan-400/50 z-10" : ""
                }`}
                style={{
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-2xl transition-all duration-300 ${skill.color} ${hoveredSkill === skill.name ? "scale-125" : ""}`}>
                    {skill.icon}
                  </span>
                  <span className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">{skill.name}</span>
                </div>

                {/* Hover Effect */}
                {hoveredSkill === skill.name && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-cyan-400 px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-cyan-400/50">
                    Mobile Development Expert
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-cyan-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Category Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([categoryName, category], index) => (
            <div
              key={categoryName}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-transparent transition-all duration-500 hover:scale-105"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} p-px opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900"></div>
              </div>

              <div className="relative z-10">
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-4 group-hover:rotate-12 transition-transform duration-500`}
                  >
                    <span className="text-white text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{categoryName}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-3 bg-gray-700/50 rounded-xl hover:bg-gray-600/50 transition-all duration-300 group/skill"
                    >
                      <span className={`text-2xl mb-2 ${skill.color} group-hover/skill:scale-125 transition-transform duration-300`}>
                        {skill.icon}
                      </span>
                      <span className="text-sm text-gray-300 text-center font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Database */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Development Tools & Database</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[
              { name: "Git", icon: <SiGit />, color: "text-orange-500" },
              { name: "GitHub", icon: <FaGithub />, color: "text-gray-400" },
              { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
              { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" },
              { name: "Expo Updates", icon: <SiExpo />, color: "text-white" },
            ].map((tool, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <span className={`text-4xl mb-2 ${tool.color} group-hover:rotate-12 transition-transform duration-300`}>{tool.icon}</span>
                <span className="text-sm text-gray-300 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
