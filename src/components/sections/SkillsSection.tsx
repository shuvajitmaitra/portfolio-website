type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  { title: "Mobile", skills: ["React Native CLI", "Flutter", "Expo", "Native modules", "Reanimated"] },
  { title: "Languages", skills: ["TypeScript", "JavaScript (ES6+)"] },
  { title: "State", skills: ["Redux Toolkit", "RTK Query", "Redux Persist", "AsyncStorage", "MMKV"] },
  { title: "Services", skills: ["REST APIs", "Axios", "Firebase Cloud Messaging", "OneSignal", "WebSocket"] },
  { title: "Testing", skills: ["Jest", "React Test Renderer", "Vitest"] },
  { title: "CI/CD", skills: ["GitHub Actions", "EAS Build", "Gradle release builds", "GitHub Releases"] },
  { title: "Release", skills: ["App Store Connect", "Google Play Console", "OTA updates", "Stripe", "In-app purchases"] },
  { title: "Web", skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase"] },
];

const SkillsSection = () => {
  return (
    <section id="Skills" className="w-full pl-8 md:pl-0">
      <h2 className="text-base font-medium leading-[1.8] tracking-[-0.12px] text-ink">Toolkit</h2>
      <dl className="mt-1 flex flex-col gap-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid gap-x-4 sm:grid-cols-[88px_1fr]">
            <dt className="pt-[5px] font-mono text-[11px] uppercase leading-[18px] tracking-[0.9px] text-mute">{group.title}</dt>
            <dd className="text-[15px] leading-[1.6] tracking-[-0.12px] text-body/80">{group.skills.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default SkillsSection;
