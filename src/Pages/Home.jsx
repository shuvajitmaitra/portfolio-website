import About from "../Components/About";
import Banner from "../Components/Banner";
import Education from "../Components/Education";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skill from "../Components/Skill";


const Home = () => {


    return(
        <div>
             <nav >
             <Navbar></Navbar>
             </nav>
             <main>
                <Banner></Banner>
                <Skill></Skill>
                <Projects></Projects>
               <div className="bg-AboutBackground">
               <About></About>
               </div>
               <Education/>
             </main>
        </div>
    )}
export default Home;