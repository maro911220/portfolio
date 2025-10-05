import { forwardRef } from "react";
import Image from "next/image";
import styles from "@/styles/components/home.module.scss";

// 스킬 로고 배열 생성
const SKILLS = [
  { id: "html", name: "HTML5", logo: 1 },
  { id: "css", name: "CSS3", logo: 2 },
  { id: "javascript", name: "JavaScript", logo: 3 },
  { id: "sass", name: "Sass", logo: 4 },
  { id: "tailwind", name: "Tailwind", logo: 5 },
  { id: "react", name: "React", logo: 6 },
  { id: "nextjs", name: "Next.js", logo: 7 },
  { id: "photoshop", name: "Photoshop", logo: 8 },
  { id: "blender", name: "Blender", logo: 9 },
];

// Skills 컴포넌트
const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles["home-skills"]} ref={ref}>
      <h2 className="hidden">Skills</h2>
      <article className={styles["home-skills-wrap"]}>
        <h3 className="hidden">Skill Logo</h3>
        <div className={styles["home-skills-con"]}>
          <div className={styles["home-skills-box"]}>
            <LogoList prefix="first" />
            <LogoList prefix="second" />
          </div>
        </div>
      </article>
    </section>
  );
});
Skills.displayName = "Skills";

export default Skills;

// LogoList 컴포넌트
function LogoList({ prefix }: { prefix: string }) {
  return (
    <>
      {SKILLS.map((skill) => (
        <div
          className={styles["home-skills-logo"]}
          key={`${prefix}-${skill.id}`}
        >
          <Image
            width={100}
            height={100}
            loading="lazy"
            alt={`${skill.name} 로고`}
            src={`/images/logos/logo_${skill.logo}.svg`}
          />
        </div>
      ))}
    </>
  );
}
