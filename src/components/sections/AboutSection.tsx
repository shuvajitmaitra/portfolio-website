import profileImage from "../../assets/images/profile/shuvajit-maitra-casual.jpg";

const focusAreas = [
  "Cross-platform mobile apps",
  "Clean architecture",
  "Store-ready releases",
  "Reliable product delivery",
];

const AboutSection = () => {
  return (
    <section id="About" className="relative overflow-hidden py-20 sm:py-28 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute right-[-10%] bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-200">
            ABOUT ME
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-7 text-gray-300">
            A more personal look at how I work, what I value, and the kind of mobile products I enjoy building.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="absolute inset-0 scale-[0.95] rounded-[36px] bg-gradient-to-br from-cyan-400/20 via-white/10 to-transparent blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 p-4 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <img
                  src={profileImage}
                  alt="Shuvajit Maitra"
                  className="h-[420px] w-full object-cover object-top grayscale-[6%] transition-transform duration-700 hover:scale-105 sm:h-[520px]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-400">Based In</p>
                  <p className="mt-2 text-lg font-medium text-white">Dhaka, Bangladesh</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.24em] text-gray-400">Experience</p>
                  <p className="mt-2 text-lg font-medium text-cyan-300">2+ Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Profile</p>
              <h3 className="mt-4 max-w-2xl text-3xl sm:text-4xl font-semibold leading-tight text-white">
                I build mobile products that feel clean, stable, and ready for real users.
              </h3>
              <p className="mt-5 text-base sm:text-lg leading-8 text-gray-300">
                I’m Shuvajit Maitra, a mobile application developer with over 2 years of experience building high-performance React Native
                apps for iOS and Android. I currently work at SDB IT, where I turn product ideas and wireframes into polished mobile
                experiences, integrate APIs and third-party services, manage OTA updates, and support app releases for both the Google Play
                Store and Apple App Store.
              </p>
              <p className="mt-5 text-base sm:text-lg leading-8 text-gray-300">
                I care about thoughtful UI, maintainable code, and teamwork that keeps products moving forward without losing quality.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div key={area} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm font-medium text-gray-100">{area}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 px-6 py-5">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">How I Work</p>
              <p className="mt-3 text-base sm:text-lg leading-8 text-white/90">
                Minimal UI noise, strong product thinking, careful delivery, and mobile experiences that feel fast, polished, and dependable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
