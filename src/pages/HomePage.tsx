import Footer from "../components/layout/Footer";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import SkillsSection from "../components/sections/SkillsSection";

const HomePage = () => {
  return (
    <div>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <main id="main" className="mx-auto flex w-[min(100%_-_3rem,560px)] flex-col items-center gap-10 pb-[168px] md:gap-12">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
