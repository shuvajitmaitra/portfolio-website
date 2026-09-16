import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";

const HomePage = () => {
  return (
    <div id="Home">
      <nav className="sticky w-full top-0 bg-gray-900 z-50 ">
        <Navbar />
      </nav>
      <main className="">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <div className="bg-AboutBackground">
          <AboutSection />
        </div>
        <ContactSection />
        <div className="bg-slate-700">
          <Footer />
        </div>
      </main>
    </div>
  );
};
export default HomePage;
