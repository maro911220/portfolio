"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { sectionRef } from "@/types/useTypes";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const workList = [
  {
    name: "portfolio sample1",
    link: "#none",
    type: ["UI/UX Design", "E-Commerce"],
  },
  {
    name: "portfolio sample2",
    link: "#none",
    type: ["UI/UX Design", "E-Commerce"],
  },
  {
    name: "portfolio sample3",
    link: "#none",
    type: ["UI/UX Design", "E-Commerce"],
  },
  {
    name: "portfolio sample4",
    link: "#none",
    type: ["UI/UX Design", "E-Commerce"],
  },
];

export default function Work({ Ref }: { Ref: sectionRef }) {
  const container = useRef<HTMLElement>(null);
  useGSAP(
    (e: any) => {
      const item = e.selector(".home-work-wrap")[0];
      const itemWidth = item.clientWidth;
      const x = itemWidth - Number(container.current?.clientWidth);

      gsap.to(item, {
        x: -x,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-work-scroller",
          scrub: 1,
          pin: true,
          start: "top",
          end: itemWidth,
        },
      });
    },
    { scope: container }
  );

  return (
    // portfolio-container / portfolio-list / portfolio-list-item
    <section className="home-work" ref={container}>
      <h2 className="hidden">Work</h2>
      <article className="home-work-scroller">
        <div
          className="home-work-con"
          ref={(e) => {
            Ref.current[3] = e;
          }}
        >
          <div className="home-work-wrap">
            <div className="home-work-hero">
              <h3 className="home-work-hero__title fs-fr">Work</h3>
              <p className="home-work-hero__sub">
                A selection of our crafted work, built from scratch by our
                experienced team.
              </p>
            </div>
            <ul className="home-work-list">
              {workList.map((item, index) => {
                return (
                  <li className="home-work-item" key={index}>
                    <a className="home-work-item__link" href={item.link}>
                      <p className="home-work-item__title">{item.name}</p>
                      <div className="home-wrok-item__box">
                        {item.type.map((label, index) => {
                          return <span key={index}>{label}</span>;
                        })}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
