import { sectionRef } from "@/types/useTypes";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer);
const skillLogos = [...new Array(9)].map(
  (item, index) => `/images/logos/logo_${index + 1}.svg`
);

export default function Skills({ Ref }: { Ref: sectionRef }) {
  const container = useRef<HTMLElement>(null);
  useGSAP(
    (e: any) => {
      Observer.create({
        target: window,
        type: "scroll,touch",
        // onChangeY: (e) => {
        //   console.log(e.deltaY);
        //   gsap.to(".home-hero-con", {
        //     y: e.deltaY * 2,
        //   });
        // },
      });
    },
    { scope: container }
  );

  return (
    <section
      className="home-skills"
      ref={(e) => {
        Ref.current[1] = e;
      }}
    >
      <h2 className="hidden">Skills</h2>
      <article className="home-skills-wrap" ref={container}>
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
