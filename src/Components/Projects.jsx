import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      id="Project"
      className="min-h-screen max-w-screen-xl mx-auto space-y-10 text-white"
    >
      {/* ::::::::::::::::::::::::::::::::::::::::::
      First Project
      ::::::::::::::::::::::::::::::::::::::::::::;;*/}
      <div className="flex h-fit justify-center items-center gap-10 mx-auto w-full">
        <div className="h-[450px] w-[600px] flex-1 bg-cover bg-firstProject bg-top duration-[3s] hover:bg-bottom rounded-lg shadow-xl shadow-[#7CB518]"></div>
        <div className="flex-1 h-[450px] bg-slate-700 rounded-xl shadow-xl shadow-[#08DAFA] p-4 space-y-2">
          <h1 className="text-xl font-bold">
            PROJECT NAME:{" "}
            <span className="text-2xl text-[#11F3D3] font-bold">TrendLoom</span>
          </h1>
          {/* <h3 className="text-xl font-bold">
            PROJECT TYPE:{" "}
            <span className="text-base font-normal text-zinc-400">
              This is an inventory management website. <br />
              Users can create shops and become shop managers, adding and
              managing products through their dashboard. The dashboard displays
              total sales, manufacturing costs, and profits in a card and bar
              chart format. To add more than three products, shop managers need
              a subscription from the system administrator.
            </span>
          </h3> */}
          <h3 className="text-xl font-bold">KEY FEATURE:</h3>
          <ul className="list-disc pl-10  text-zinc-400">
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
          <h3 className="text-xl font-bold">TECHNOLOGIES:</h3>
          <ul className="flex justify-center items-center gap-3 text-4xl">
            <li>
              <FaReact className="text-[#08DAFA]"></FaReact>
            </li>
            <li>
              <SiTailwindcss className="text-[#3EBFF8]" />
            </li>
            <li>
              <IoLogoJavascript className="text-[#F7DF1E]"></IoLogoJavascript>
            </li>
            <li>
              <IoLogoFirebase className="text-[#FFCC30]"></IoLogoFirebase>
            </li>
            <li>
              <SiExpress></SiExpress>
            </li>
            <li>
              <SiMongodb className="text-[#00ED64]"></SiMongodb>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3 ">
            <Link
              target="_blank"
              to="https://tree-treasures.web.app/"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Live Site
              </button>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/shuvajitmaitra/Inventory-Management-Client"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Client Code
              </button>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/shuvajitmaitra/Inventory-Management-Server"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Server Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      Second Project
    ::::::::::::::::::::::::::::::::::::::::::::;::::::::::::::::::::::::::::::::::::;::;*/}
      <div className="flex h-fit justify-center items-center gap-10 mx-auto w-full">
    <div className="h-[450px] w-[600px] flex-1 bg-cover bg-firstProject bg-top duration-[3s] hover:bg-bottom rounded-lg shadow-xl shadow-[#7CB518]"></div>
        <div className="flex-1 h-[450px] bg-slate-700 rounded-xl shadow-xl shadow-[#08DAFA] p-4 space-y-2">
          <h1 className="text-xl font-bold">
            PROJECT NAME:{" "}
            <span className="text-2xl text-[#11F3D3] font-bold">
              Novel Nexus
            </span>
          </h1>
          {/* <h3 className="text-xl font-bold">
            PROJECT TYPE:{" "}
            <span className="text-base font-normal text-zinc-400">
              This is an inventory management website. <br />
              Users can create shops and become shop managers, adding and
              managing products through their dashboard. The dashboard displays
              total sales, manufacturing costs, and profits in a card and bar
              chart format. To add more than three products, shop managers need
              a subscription from the system administrator.
            </span>
          </h3> */}
          <h3 className="text-xl font-bold">KEY FEATURE:</h3>
          <ul className="list-disc pl-10  text-zinc-400">
            <li>
              JWT verification using cookies, without authorization can’t get
              data from the backend.
            </li>
            <li>
              Data sorting from the backend, library all books can be sorted by
              book availability from the backend.
            </li>
            <li>
              Admin Panel Create, only admin can add, update, or delete a book
              from the website
            </li>
            <li>
              Dark/Light mode • User can borrow a book also return borrowed
              books
            </li>
          </ul>
          <h3 className="text-xl font-bold">TECHNOLOGIES:</h3>
          <ul className="flex justify-center items-center gap-3 text-4xl">
            <li>
              <FaReact className="text-[#08DAFA]"></FaReact>
            </li>
            <li>
              <SiTailwindcss className="text-[#3EBFF8]" />
            </li>
            <li>
              <IoLogoJavascript className="text-[#F7DF1E]"></IoLogoJavascript>
            </li>
            <li>
              <IoLogoFirebase className="text-[#FFCC30]"></IoLogoFirebase>
            </li>
            <li>
              <SiExpress></SiExpress>
            </li>
            <li>
              <SiMongodb className="text-[#00ED64]"></SiMongodb>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3 ">
            <Link
              target="_blank"
              to="https://tree-treasures.web.app/"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Live Site
              </button>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/shuvajitmaitra/Inventory-Management-Client"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Client Code
              </button>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/shuvajitmaitra/Inventory-Management-Server"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Server Code
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      Third Project
      ::::::::::::::::::::::::::::::::::::::::::::;::::::::::::::::::::::::::::::::::::;::;*/}
      <div className="flex h-fit justify-center items-center gap-10 mx-auto w-full">
        <div className="h-[450px] w-[600px] flex-1 bg-cover bg-firstProject bg-top duration-[3s] hover:bg-bottom rounded-lg shadow-xl shadow-[#7CB518]"></div>
        <div className="flex-1 h-[450px] bg-slate-700 rounded-xl shadow-xl shadow-[#08DAFA] p-4 space-y-2">
          <h1 className="text-xl font-bold">
            PROJECT NAME:{" "}
            <span className="text-2xl text-[#11F3D3] font-bold">
              Media Hunter
            </span>
          </h1>
          {/* <h3 className="text-xl font-bold">
            PROJECT TYPE:{" "}
            <span className="text-base font-normal text-zinc-400">
              This is an inventory management website. <br />
              Users can create shops and become shop managers, adding and
              managing products through their dashboard. The dashboard displays
              total sales, manufacturing costs, and profits in a card and bar
              chart format. To add more than three products, shop managers need
              a subscription from the system administrator.
            </span>
          </h3> */}
          <h3 className="text-xl font-bold">KEY FEATURE:</h3>
          <ul className="list-disc pl-10  text-zinc-400">
            <li>
              Add movies to the website based on the movie category, and by
              clicking add to cart the user can save the movie to the cart.
            </li>
            <li>
              Firebase Authentication implemented. Without login, the user can
              not add the movie to the site.
            </li>
            <li>Individual user can see their add-to-cart data.</li>
            <li>
              Dark/Light mode • User can borrow a book also return borrowed
              books
            </li>
          </ul>
          <h3 className="text-xl font-bold">TECHNOLOGIES:</h3>
          <ul className="flex justify-center items-center gap-3 text-4xl">
            <li>
              <FaReact className="text-[#08DAFA]"></FaReact>
            </li>
            <li>
              <SiTailwindcss className="text-[#3EBFF8]" />
            </li>
            <li>
              <IoLogoJavascript className="text-[#F7DF1E]"></IoLogoJavascript>
            </li>
            <li>
              <IoLogoFirebase className="text-[#FFCC30]"></IoLogoFirebase>
            </li>
            <li>
              <SiExpress></SiExpress>
            </li>
            <li>
              <SiMongodb className="text-[#00ED64]"></SiMongodb>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-3 ">
            <Link
              target="_blank"
              to="https://tree-treasures.web.app/"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Live Site
              </button>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/shuvajitmaitra/Inventory-Management-Client"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Client Code
              </button>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/shuvajitmaitra/Inventory-Management-Server"
            >
              <button className="shadow-lg hover:shadow-[#08DAFA] duration-1000 hover:scale-110  rounded-full bg-[#08DAFA] hover:bg-[#2ab0c5] text-white px-3 py-2 my-4">
                Server Code
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
