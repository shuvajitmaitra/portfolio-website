import webIamage from "../assets/web-development.jpg";
const About = () => {
  return (
    <div id="About" className="min-h-screen md:flex justify-center items-center gap-10 xl:w-3/4 mx-4 md:mx-auto text-white space-y-5">
      <div className="xl:w-2/3">
        <h3 className="py-3 px-8 text-5xl font-medium  border-2 border-[#11F3D3] w-fit rounded-tl-[30px] rounded-br-[30px] mb-10 duration-1000 hover:scale-110">
          About Me
        </h3>
        <p className="p-10 rounded-2xl bg-slate-800">
        Hello there! 👋 I’m Shuvajit Maitra, a passionate Junior MERN Developer with a deep passion for creating intuitive and dynamic web applications. My journey in the world of web development has been an exciting exploration of the MERN (MongoDB, Express.js, React, Node.js) stack, where I’ve honed my skills in building responsive and user-friendly interfaces.
        </p>
      </div>
      <div className="xl:w-1/3 ">
        <img
        
          src={webIamage}
          alt=""
          className="rounded-xl duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};
export default About;
