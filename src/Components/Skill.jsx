import {
  FaCcStripe,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { SiDaisyui, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

const Skill = () => {
  return (
    <div
      id="Skill"
      className="h-fit py-20 space-y-4"
    >
      <h3 className="text-3xl lg:text-6xl text-center font-bold text-white pb-10">
        SKILLS
      </h3>
      <div className="flex gap-4 justify-center items-center ">
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <FaHtml5 className="text-[#E5532D] text-6xl"></FaHtml5>
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <FaCss3Alt className="text-[#0870C2] text-6xl" />
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <SiTailwindcss className="text-[#3EBFF8] text-6xl" />
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <FaReact className="text-[#08DAFA] text-6xl"></FaReact>
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <IoLogoFirebase className="text-[#FFCC30] text-6xl"></IoLogoFirebase>
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <SiDaisyui className="text-[#0870C2] text-6xl" />
        </span>
      </div>
      <div className="flex gap-4 justify-center items-center ">
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          <IoLogoJavascript className="text-[#F7DF1E] text-6xl"></IoLogoJavascript>
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          <SiExpress className="text-6xl"></SiExpress>
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <FaCcStripe className="text-[#6860FF] text-6xl" />
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          <SiMongodb className="text-[#00ED64] text-6xl"></SiMongodb>
        </span>
      </div>
      <div className="flex gap-4 justify-center items-center ">
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <FaGithub className=" text-6xl" />
        </span>
        <span className=" p-3 rounded-md bg-zinc-200 shadow-lg hover:shadow-zinc-200 duration-1000 hover:scale-110 hover:bg-zinc-200">
          {" "}
          <FaNpm className=" text-[#CD3E3D] text-6xl" />
        </span>
      </div>
    </div>
  );
};
export default Skill;
