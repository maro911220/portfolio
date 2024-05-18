"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { sectionRef } from "@/types/useTypes";
import Image from "next/image";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const workList = [
  {
    name: "STN 인포텍 연구소",
    sub: "STN 인포텍 회사 내 연구소 소개 페이지",
    link: "http://lab.stninfotech.com/index.html",
    type: ["Gulp", "Sass", "JS", "GSAP"],
    src: "/images/web/web_1.png",
  },
  {
    name: "Dashboard",
    sub: "KT AiON, 국방 관련 대시보드 페이지",
    link: "http://lab.stninfotech.com/case_02.html",
    type: ["Gulp", "Sass", "JS"],
    src: "/images/web/web_2.png",
  },
  {
    name: "My Dashboard",
    sub: "최신 영화,미디어 정보와 날씨가 확인 가능하며 간단한 검색기능이 있는 개인 대시보드 페이지",
    link: "https://maro-board.vercel.app/",
    type: ["React", "Next.js", "framer"],
    src: "/images/web/web_3.png",
  },
  {
    name: "My Template",
    sub: "개인 연습용 레이아웃 페이지 모음",
    link: "https://marotemplate.vercel.app/",
    type: ["React", "Next.js", "framer"],
    src: "/images/web/web_4.png",
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
          end: list.clientHeight * 5,
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
                  회사 작업물과 개인 작업물 목록입니다.
                </p>
              </div>
              <ul className="home-work-list">
                {workList.map((item, index) => {
                  return (
                    <li className="home-work-item" key={index}>
                      <a
                        className="home-work-item__link"
                        href={item.link}
                        target="_blank"
                      >
                        <Image src={item.src} alt={item.name} fill />
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
