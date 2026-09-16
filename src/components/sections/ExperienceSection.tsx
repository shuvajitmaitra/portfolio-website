import {
  FaAppStoreIos,
  FaCalendarAlt,
  FaCodeBranch,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPeopleArrows,
  FaRocket,
} from "react-icons/fa";
import { SiAndroidstudio, SiExpo, SiFirebase, SiRedux, SiTailwindcss, SiTypescript, SiXcode } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const achievements = [
  "Built and maintained cross-platform React Native apps for iOS and Android using JavaScript (ES6+) and TypeScript.",
  "Turned wireframes and mockups into polished mobile UI with Tailwind CSS, StyleSheet, and React Native Paper.",
  "Integrated REST APIs with Axios, Redux Toolkit, Redux Persist, AsyncStorage, and MMKV for stable app-side architecture.",
  "Delivered push notifications with Firebase Cloud Messaging and OneSignal to improve engagement and product communication.",
  "Shipped over-the-air updates with Revopush and Hot-OTA to release fixes and features without store delays.",
  "Published and maintained production builds through Expo, Xcode, Android Studio, Google Play Console, and App Store Connect.",
];

const roleFacts = [
  { label: "Company", value: "SDB IT" },
  { label: "Role", value: "Mobile Application Developer" },
  { label: "Duration", value: "January 2024 - Present" },
  { label: "Location", value: "Warren, Michigan, United States" },
];

const toolbox = [
  { name: "React Native CLI", icon: <TbBrandReactNative />, color: "text-cyan-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "Redux Toolkit", icon: <SiRedux />, color: "text-purple-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Firebase + OneSignal", icon: <SiFirebase />, color: "text-orange-400" },
  { name: "Expo / OTA", icon: <SiExpo />, color: "text-white" },
];

const deliveryHighlights = [
  {
    title: "Cross-Platform Delivery",
    description: "Ensured consistent app behavior on Android and iOS with testing across Android Studio and Xcode.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Team Collaboration",
    description: "Worked in Agile ceremonies and used Bizcomz to track progress, delivery, and feature readiness.",
    icon: <FaPeopleArrows />,
  },
  {
    title: "Release Ownership",
    description: "Handled publishing workflows for both stores and reduced release friction through OTA updates.",
    icon: <FaAppStoreIos />,
  },
];

const ExperienceSection = () => {
  return (
    <section id="Experience" className="bg-gray-900 text-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 mb-4">
            EXPERIENCE
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            My current role centers on building, shipping, and improving production-ready mobile apps used across iOS and Android.
          </p>
        </div>

        <div className="grid gap-8">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>

              <div className="relative">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                      Current Role
                    </span>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-medium text-emerald-300">
                      2+ Years Experience
                    </span>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5 sm:p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">SDB IT</h3>
                    <p className="mt-2 text-base sm:text-lg font-medium text-cyan-300">Mobile Application Developer</p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {roleFacts.map((fact) => (
                        <div key={fact.label} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                          <p className="text-xs uppercase tracking-[0.18em] text-gray-400">{fact.label}</p>
                          <p className="mt-2 text-sm sm:text-base text-gray-100">{fact.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>On production React Native apps for both iOS and Android</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-emerald-400" />
                        <span>Focused on shipping, stability, and maintainable delivery workflows</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/35 p-5 sm:p-6">
                    <h4 className="text-lg font-semibold text-cyan-300">Role Summary</h4>
                    <p className="mt-3 max-w-3xl text-sm sm:text-base leading-7 text-gray-300">
                      I build high-performance mobile applications with a strong focus on cross-platform stability, maintainable architecture,
                      store-ready releases, and fast iteration cycles for real users.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                      <h4 className="mb-4 text-lg font-semibold text-white">Core stack</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {toolbox.map((item) => (
                          <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                            <div className={`mb-2 flex justify-center text-2xl ${item.color}`}>{item.icon}</div>
                            <p className="text-xs sm:text-sm text-gray-200">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                      <h4 className="mb-4 text-lg font-semibold text-white">Delivery workflow</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                          <SiAndroidstudio className="text-xl text-green-400" />
                          <span className="text-sm text-gray-200">Android Studio testing and release prep</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                          <SiXcode className="text-xl text-blue-400" />
                          <span className="text-sm text-gray-200">Xcode validation for iOS builds and publishing</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                          <FaCodeBranch className="text-xl text-cyan-400" />
                          <span className="text-sm text-gray-200">Git + GitHub collaboration with branches and pull requests</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="relative mt-6 rounded-3xl border border-white/10 bg-slate-950/35 p-5 sm:p-6">
                <h4 className="mb-4 text-lg font-semibold text-cyan-300">Key Responsibilities</h4>
                <div className="grid gap-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm sm:text-base text-gray-200"
                    >
                      <FaRocket className="mt-1 shrink-0 text-cyan-400" />
                      <p className="leading-7">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {deliveryHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-2xl text-cyan-300">{item.icon}</div>
                  <h4 className="mb-2 text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-sm leading-6 text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
