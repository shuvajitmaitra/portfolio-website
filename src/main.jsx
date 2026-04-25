import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111827",
          color: "#f8fafc",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
          padding: "16px 18px",
          maxWidth: "420px",
        },
      }}
    />
  </React.StrictMode>
);

/* 
  const projects = [
    {
      id: 1,
      name: "TrendLoom",
      category: "web",
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
    {
      id: 4,
      name: "TaskFlow Pro",
      category: "mobile",
      type: "Flutter Productivity App",
      gradient: "from-green-500 to-teal-500",
      description: "A cross-platform productivity app built with Flutter for task management, team collaboration, and project tracking.",
      features: [
        "Cross-platform (iOS & Android)",
        "Real-time team collaboration",
        "Offline task management",
        "Push notifications & reminders",
        "Intuitive drag-and-drop interface",
      ],
      technologies: [
        { icon: <SiFlutter />, name: "Flutter", color: "text-blue-400" },
        { icon: <SiDart />, name: "Dart", color: "text-blue-600" },
        { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
      ],
      links: {
        live: "#",
        client: "#",
        server: "#",
      },
    },
    {
      id: 5,
      name: "FitTracker",
      category: "mobile",
      type: "React Native Health App",
      gradient: "from-orange-500 to-red-500",
      description:
        "A comprehensive fitness tracking app with workout plans, nutrition tracking, and social features for fitness enthusiasts.",
      features: [
        "Workout plan customization",
        "Nutrition and calorie tracking",
        "Social fitness challenges",
        "Progress analytics and charts",
        "Integration with health devices",
      ],
      technologies: [
        { icon: <SiReactnative />, name: "React Native", color: "text-cyan-400" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
        { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
        { icon: <FaNodeJs />, name: "Node.js", color: "text-green-400" },
        { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
      ],
      links: {
        live: "#",
        client: "#",
        server: "#",
      },
    },
  ];
*/
