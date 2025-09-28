import webIamage from "../assets/Shuvajit_Maitra.jpg";
const About = () => {
  return (
    <div id="About" className="min-h-screen md:flex justify-center items-center gap-10 xl:w-3/4 mx-4 md:mx-auto text-white space-y-5">
      <div className="xl:w-2/3">
        <h3 className="py-3 px-8 text-5xl font-medium  border-2 border-[#11F3D3] w-fit rounded-tl-[30px] rounded-br-[30px] mb-10 duration-1000 hover:scale-110">
          About Me
        </h3>
        <p className="p-10 rounded-2xl bg-slate-800 leading-6">
          Hello there! 👋 I’m Shuvajit Maitra, React Native developer with over 1.5 years of experience building high-performance mobile
          apps for iOS and Android. Proficient in JavaScript, React, React Native CLI, and Expo. Skilled in state management, RESTful APIs,
          and performance optimization. Experienced in publishing apps to the Google Play Store and Apple App Store. I focus on writing
          clean, maintainable code and enjoy collaborating with teams to deliver high-quality apps.
        </p>
      </div>
      <div className="xl:w-1/3 ">
        <img src={webIamage} alt="" className="rounded-xl duration-500 hover:scale-105" />
      </div>
    </div>
  );
};
export default About;
