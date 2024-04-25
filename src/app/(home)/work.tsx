"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { sectionRef } from "@/types/useTypes";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const workList = [
  {
    name: "연습장",
    sub: "샬라 샬라라랄라라랄라",
    link: "#none",
    type: ["React", "Next.js"],
    src: "https://cdn.pixabay.com/photo/2023/12/07/19/45/tiger-8436227_1280.jpg",
  },
  {
    name: "Portfolio Sample2",
    sub: "샬라 샬라라랄라라랄라",
    link: "#none",
    type: ["UI/UX Design", "E-Commerce"],
    src: "https://cdn.pixabay.com/photo/2023/12/07/19/45/tiger-8436227_1280.jpg",
  },
  {
    name: "연습장",
    sub: "개인적인 작업물을 정리해놓았음.",
    link: "#none",
    type: ["React", "Next.js"],
    src: "https://cdn.pixabay.com/photo/2023/12/07/19/45/tiger-8436227_1280.jpg",
  },
  {
    name: "Portfolio Sample4",
    sub: "샬라 샬라라랄라라랄라",
    link: "#none",
    type: ["UI/UX Design", "E-Commerce"],
    src: "https://cdn.pixabay.com/photo/2023/12/07/19/45/tiger-8436227_1280.jpg",
  },
];

export default function Work({ Ref }: { Ref: sectionRef }) {
  const container = useRef<HTMLElement>(null);
  const [resizeCheck, setResizeCheck] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setResizeCheck(window.innerWidth);
    });
  }, []);

  useGSAP(
    (e: any) => {
      const list = e.selector(".home-work-wrap")[0];
      const listWidth = list.clientWidth;
      const wrapWidth = e.selector(".home-work-con")[0].clientWidth;
      const x = listWidth - wrapWidth;

      gsap.to(list, {
        x: -x,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-work-scroller",
          scrub: 1,
          pin: true,
          start: "top",
          end: listWidth,
        },
      });
    },
    { dependencies: [resizeCheck], scope: container, revertOnUpdate: true }
  );

  return (
    <section className="home-work" ref={container}>
      <h2 className="hidden">Work</h2>
      <article className="home-work-scroller-dummy">
        <div className="home-work-scroller">
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
                  회사 작업물 또는 개인 작업물 목록입니다.
                </p>
              </div>
              <ul className="home-work-list">
                {workList.map((item, index) => {
                  return (
                    <li className="home-work-item" key={index}>
                      <a
                        className="home-work-item__link"
                        style={{ backgroundImage: `url(${item.src})` }}
                        href={item.link}
                      >
                        <p className="home-work-item__title">{item.name}</p>
                        <p className="home-work-item__sub">{item.sub}</p>
                        <div className="home-work-item__box">
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
        </div>
      </article>
    </section>
  );
}
