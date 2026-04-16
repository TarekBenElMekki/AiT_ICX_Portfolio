import { SmartImage } from "@/components/smart-image";
import { SectionBackground } from "@/components/section-background";

const teamMembers = [
  {
    name: "Oumayma Guesmi",
    role: "MCVP CXO",
    image: "/assets/branding/person-1.jpg",
  },
  {
    name: "Tarek Ben El Mekki",
    role: "Developer",
    image: "/assets/branding/person-2.png",
  },
  {
    name: "Yahya Ben Younes",
    role: "UI/UX Designer",
    image: "/assets/branding/person-3.jpg",
  },
];

export function TeamShowcaseSection() {
  return (
    <section id="team-showcase" className="relative overflow-hidden py-16 md:py-20 text-white">
      <SectionBackground
        baseColor="#0d2a5c"
        patternColor="rgba(255,255,255,0.06)"
        patternOpacity={1}
      />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">The people behind the experience</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Meet the team
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
            Three profiles, one shared mission: presenting Tunisia through a refined, modern, and human-centered experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/14"
            >
              <div className="relative z-10">
                <div className="overflow-hidden rounded-[24px] bg-white/5">
                  <SmartImage
                    src={member.image}
                    alt={member.name}
                    width={800}
                    height={900}
                    className="h-[320px] w-full object-cover"
                    seed={`team-member-${index + 1}`}
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                    {member.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}