import webIamage from "../assets/web-development.jpg";
const About = () => {
  return (
    <div id="About" className="min-h-screen flex justify-center items-center gap-10 w-3/4 mx-auto text-white">
      <div className="w-2/3">
        <h3 className="py-3 px-8 text-5xl font-medium  border-2 border-[#11F3D3] w-fit rounded-tl-[30px] rounded-br-[30px] mb-10 duration-1000 hover:scale-110">
          About Me
        </h3>
        <p className="p-10 rounded-2xl bg-slate-800">
          Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores eligendi nulla nisi temporibus perspiciatis sit est adipisci
          voluptatibus velit. Unde veritatis dolorem, quasi debitis suscipit a
          quae! Quo dignissimos porro corrupti deserunt. Eaque, quas nostrum,
          praesentium reprehenderit minima, eveniet excepturi quidem unde
          suscipit aliquid corporis esse repellendus? Beatae, fuga quaerat!
        </p>
      </div>
      <div className="w-1/3 ">
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
