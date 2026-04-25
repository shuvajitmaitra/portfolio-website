import webIamage from "../assets/Shuvajit_Maitra.jpg";
const About = () => {
  return (
    <div id="About" className="min-h-screen md:flex justify-center items-center gap-10 xl:w-3/4 mx-4 md:mx-auto text-white space-y-5">
      <div className="xl:w-2/3">
        <h3 className="py-3 px-8 text-5xl font-medium  border-2 border-[#11F3D3] w-fit rounded-tl-[30px] rounded-br-[30px] mb-10 duration-1000 hover:scale-110">
          About Me
        </h3>
        <p className="p-10 rounded-2xl bg-slate-800 leading-6">
          I’m Shuvajit Maitra, a mobile application developer with over 2 years of experience building high-performance React Native apps
          for iOS and Android. I currently work at SDB IT, where I turn product ideas and wireframes into polished mobile experiences,
          integrate APIs and third-party services, manage OTA updates, and support app releases for both the Google Play Store and Apple
          App Store. I care about clean architecture, reliable delivery, and collaborative teamwork that keeps products moving forward.
        </p>
      </div>
      <div className="xl:w-1/3 ">
        <img src={webIamage} alt="" className="rounded-xl duration-500 hover:scale-105" />
      </div>
    </div>
  );
};
export default About;
