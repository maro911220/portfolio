"use client";
import Image from "next/image";
import { forwardRef } from "react";

// 작업물 리스트
const WORK_LIST = [
  {
    name: "Dashboard",
    sub: "KT AiON, 국방 관련 대시보드 (보안 사유로 소개용 화면으로 대체)",
    link: "https://maroworkstn.vercel.app/",
    type: ["Gulp", "React", "Sass", "JS"],
    src: "/images/web/web_2.jpg",
  },
  {
    name: "포레스트 한방병원",
    sub: "포레스트 한방병원 웹페이지 퍼블리싱",
    link: "https://foresthospital.co.kr/jongno/main/main.html",
    type: ["PHP", "CSS", "JS"],
    src: "/images/web/web_1.jpg",
  },

  {
    name: "Pokedex",
    sub: "[개인 프로젝트] 포켓몬 API를 활용한 종합 포켓몬 정보 검색 및 탐색 대시보드",
    link: "https://maro-poke.vercel.app/",
    type: ["React", "Next.js", "shadcn"],
    src: "/images/web/web_5.jpg",
  },
  {
    name: "My Dashboard",
    sub: "[개인 프로젝트] 실시간 영화/미디어 정보 및 날씨 확인이 가능한 검색형 대시보드",
    link: "https://maro-board.vercel.app/",
    type: ["React", "Next.js", "framer"],
    src: "/images/web/web_3.jpg",
  },
  {
    name: "Playground",
    sub: "[개인 프로젝트] 퍼블리싱 연습 프로젝트 모음 ",
    link: "https://marotemplate.vercel.app/",
    type: ["React", "Next.js", "framer"],
    src: "/images/web/web_4.jpg",
  },
];

// Work 컴포넌트
const Work = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className="home-work">
      <h2 className="hidden">Work</h2>
      <article className="home-work-scroller-dummy">
        <div className="home-work-scroller">
          <div className="home-work-con" ref={ref}>
            <div className="home-work-wrap">
              <div className="home-work-hero">
                <h3 className="home-work-hero__title fs-fr f-title">Work</h3>
                <p className="home-work-hero__sub">
                  회사 작업물과 개인 작업물 목록입니다.
                </p>
              </div>
              <ul className="home-work-list">
                {WORK_LIST.map((item, index) => {
                  return (
                    <li className="home-work-item" key={item.name}>
                      <a
                        className="home-work-item__link"
                        href={item.link}
                        target="_blank"
                      >
                        <Image
                          fill
                          sizes="100%"
                          src={item.src}
                          priority={index < 2}
                          alt={`${item.name} 썸네일`}
                        />
                        <p className="home-work-item__title">{item.name}</p>
                        <p className="home-work-item__sub">{item.sub}</p>
                        <div className="home-work-item__box">
                          {item.type.map((label) => {
                            return (
                              <span key={`${item.name}-${label}`}>{label}</span>
                            );
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
});
Work.displayName = "Work";

export default Work;
