import About from "../Components/About";
import Banner from "../Components/Banner";
import { Contact } from "../Components/Contact";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skill from "../Components/Skill";

const Home = () => {
  return (
    <div id="Home">
      <nav className="sticky w-full top-0 bg-gray-900 z-50 ">
        <Navbar></Navbar>
      </nav>
      <main className="">
        <Banner></Banner>
        <Skill></Skill>
        <Projects></Projects>
        <Education />
        <div className="bg-AboutBackground">
          <About></About>
        </div>
        <Contact />
        <div className="bg-slate-700">
          <Footer />
        </div>
      </main>
    </div>
  );
};
export default Home;
