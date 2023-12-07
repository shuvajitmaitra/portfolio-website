import About from "../Components/About";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";


const Home = () => {


    return(
        <div>
             <nav >
             <Navbar></Navbar>
             </nav>
             <main>
                <Banner></Banner>
                <Projects></Projects>
               <div className="bg-AboutBackground">
               <About></About>
               </div>
             </main>
        </div>
    )}
export default Home;