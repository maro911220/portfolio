import { sectionRef } from "@/types/useTypes";
import Image from "next/image";

const skillLogos = [...new Array(9)].map(
  (item, index) => `/images/logos/logo_${index + 1}.svg`
);

export default function Skills({ Ref }: { Ref: sectionRef }) {
  return (
    <section
      className="home-skills"
      ref={(e) => {
        Ref.current[1] = e;
      }}
    >
      <h2 className="hidden">Skills</h2>
      <article className="home-skills-wrap">
        <h3 className="hidden">Skill Logo</h3>
        <div className="home-skills-con">
          <div className="home-skills-box">
            <LogoList />
            <LogoList />
          </div>
        </div>
      </article>
    </section>
  );
}

function LogoList() {
  return skillLogos.map((item, index) => {
    return (
      <div className="home-skills-logo" key={index}>
        <Image src={item} width={100} height={100} alt="logos" />
      </div>
    );
  });
}
