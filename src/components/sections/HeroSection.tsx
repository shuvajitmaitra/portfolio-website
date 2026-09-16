import profileImage from "../../assets/images/profile/shuvajit-maitra-formal.webp";

const metaLines = ["Dhaka, Bangladesh", "23.8103° N, 90.4125° E", "GMT+6"];

const HeroSection = () => {
  return (
    <section id="Home" className="flex w-full flex-col items-center gap-12 pt-10 xl:pt-20">
      {/* Pinned to the top-left on wide screens, centred above the phone on smaller ones. */}
      <div className="flex items-center gap-[22px] xl:fixed xl:left-[clamp(24px,calc((100vw_-_560px)/2_-_306px),72px)] xl:top-[72px] xl:z-30">
        <span
          aria-hidden="true"
          className="hidden h-[110px] w-2 bg-[radial-gradient(#CBC9D6_0.9px,transparent_1.1px)] bg-[length:4px_4px] xl:block"
        ></span>
        <div className="text-center font-mono text-[12px] uppercase leading-[22px] tracking-[0.15em] text-mute xl:text-left">
          <p className="text-ink">Shuvajit Maitra</p>
          {metaLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="motion-safe:animate-reveal">
        <div className="relative h-[292px] w-[146px] rounded-[38px] bg-gradient-to-b from-[#F4F0F0] to-[#E1DCDC] p-[7px] shadow-[0_28px_40px_-22px_rgba(0,0,0,0.45),0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.08)]">
          <div className="relative h-full w-full overflow-hidden rounded-[31px] bg-white ring-1 ring-black/10">
            <img
              src={profileImage}
              alt="Shuvajit Maitra"
              draggable={false}
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[88%] w-full select-none object-cover object-top"
            />
            <span className="absolute left-1/2 top-[9px] h-[15px] w-[46px] -translate-x-1/2 rounded-full bg-black"></span>
            <span className="absolute bottom-[7px] left-1/2 h-[3px] w-[48px] -translate-x-1/2 rounded-full bg-white/80"></span>
          </div>
          <span className="absolute -right-[2px] top-[82px] h-[34px] w-[2px] rounded-r bg-[#D6D1D1]"></span>
          <span className="absolute -left-[2px] top-[70px] h-[22px] w-[2px] rounded-l bg-[#D6D1D1]"></span>
          <span className="absolute -left-[2px] top-[100px] h-[22px] w-[2px] rounded-l bg-[#D6D1D1]"></span>
        </div>
      </div>

      <div id="About" className="w-full max-w-[460px] text-center motion-safe:animate-reveal motion-safe:[animation-delay:60ms]">
        <h1 className="text-base font-medium leading-[1.8] tracking-[-0.12px] text-ink">Mobile Application Developer</h1>
        <p className="text-base leading-[1.6] tracking-[-0.12px] text-body/80">
          2.5+ years of professional experience building React Native and Flutter apps for iOS and Android, from the first wireframe to the store release.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
