import profileImage from "../assets/shuvajit-maitra.gif";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";



const Banner = () => {
  return (
    <div id="Home" className="pb-20">
      <div>
        <h1 className="text-7xl font-bold py-10 text-center text-[#11F3D3]">
          Developer
        </h1>
      </div>
      <div className="flex w-3/4 mx-auto text-white ">
        <div className="h-[380px] flex flex-col justify-center items-center gap-3 w-[600px] border rounded-tl-[100px] rounded-br-[100px] text-center ">
         <div>
          <img
            src={profileImage}
            alt="profile-Image"
            className="h-20 w-20 inline-block mx-auto border-2 duration-1000 hover:scale-110  border-[#11F3D3] rounded-full"
          />
         <h2>Shuvajit</h2>
          <p>MERN Developer</p>
         </div>
          <ul >
            <li className="flex items-center text-xs pl-5 gap-2 duration-1000 hover:scale-110"><FaRegEnvelope/> shuvajitmaitra@gmail.com</li>
            <li className="flex items-center text-xs pl-5 gap-2 duration-1000 hover:scale-110"><IoLocationOutline/> Dhaka, Bangladesh</li>
            <li className="flex items-center text-xs pl-5 gap-2 duration-1000 hover:scale-110"><FaMapLocation/> Onsite/Remote/Hybrid </li>
          </ul>
          <ul className="flex justify-center items-center gap-2">
            <li className="text-xs px-2 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">JS</li>
            <li className="text-xs px-1 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">React</li>
            <li className="text-xs px-1 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">Node</li>
            <li className="text-xs px-1 bg-[#11F3D3] rounded-full duration-1000 hover:scale-110">MongoDB</li>
          </ul>
          <button className="flex items-center gap-2 justify-center p-2 bg-white rounded-full w-3/4 mx-auto text-zinc-600 duration-1000 hover:scale-110">Download CV <FiDownload/></button>
        </div>
        <div className="px-20 ">
          <h2 className="text-5xl font-bold">
            <span></span>Hey <br /> I’m{" "}
            <span className="text-[#11F3D3]">Shuvajit</span>, <br /> MERN
            Developer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            totam alias nihil recusandae corporis odit praesentium quaerat,
            voluptates culpa eum!
          </p>
        </div>
        <div className="h-[300px] w-[300px] border rounded-[50px] duration-1000 hover:scale-110"></div>
      </div>
    </div>
  );
};
export default Banner;
