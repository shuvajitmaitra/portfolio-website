import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      <div className="flex justify-center items-center gap-10 mx-auto w-full">
        <div className="h-96 w-[600px] flex-1 bg-cover bg-firstProject bg-top duration-[3s] hover:bg-bottom rounded-lg shadow-xl shadow-[#7CB518]"></div>
        <div className="flex-1 bg-slate-700 rounded-xl shadow-xl shadow-[#08DAFA] p-4 space-y-2">
          <h1>Project Name: TrendLoom</h1>
          <h3>
            Project Type: This is an inventory management website. <br /> Where
            any user can create there own shop. If any use create there shop
            then they are converted into shop manager. Now shop manager can add
            product on there shop and also can manage there product. They have
            on dashboard. In the dashboard they can see there total sale total
            making const and profit also in a card and also in a bar chart. To
            add more then three(3) product shop manager need to get a
            subscription from the System admin
          </h3>
          <ul className="list-disc pl-10">
            <li>
              Three types of routes (User Route, Shop Manager Route, Admin
              Route)
            </li>
            <li>
              No user can’t create more than one shop but by the access key user
              can share the shop manager
            </li>
            <li>Payment getaway (Using Strip) | JWT token security </li>
            <li>Firebase authentication | Image hosting feature</li>
          </ul>
          <ul className="flex justify-center items-center gap-3 text-4xl">
            <li>
              <FaReact className="text-[#08DAFA]"></FaReact>
            </li>
            <li>
              <SiTailwindcss className="text-[#3EBFF8]"/>
            </li>
            <li>
              <IoLogoJavascript className="text-[#F7DF1E]"></IoLogoJavascript>
            </li>
            <li>
              <IoLogoFirebase className="text-[#FFCC30]"></IoLogoFirebase>
            </li>
            <li>
              <SiExpress ></SiExpress>
            </li>
            <li>
              <SiMongodb className="text-[#00ED64]"></SiMongodb>
            </li>
          </ul>
          <div>
            <button>Live Site</button>
            <button>Client Code</button>
            <button>Server Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
