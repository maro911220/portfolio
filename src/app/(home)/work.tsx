"use client";
import Image from "next/image";
import { sectionRef } from "@/types/useTypes";

// 작업물 리스트
const workList = [
  {
    name: "Dashboard",
    sub: "KT AiON 국방 관련 대시보드 (보안 사유로 소개용 화면으로 대체)",
    link: "http://stninfotech.com/dashboard/",
    type: ["Gulp", "React", "Sass", "JS"],
    src: "/images/web/web_2.png",
  },
  {
    name: "포레스트 한방병원",
    sub: "포레스트 한방병원 웹페이지 퍼블리싱",
    link: "https://foresthospital.co.kr/jongno/main/main.html",
    type: ["PHP", "CSS", "JS"],
    src: "/images/web/web_1.png",
  },
  {
    name: "Playground",
    sub: "[개인 프로젝트] 퍼블리싱 연습 프로젝트 모음 ",
    link: "https://marotemplate.vercel.app/",
    type: ["React", "Next.js", "framer"],
    src: "/images/web/web_4.png",
  },
  {
    name: "Dashboard",
    sub: "[개인 프로젝트] 실시간 영화/미디어 정보 및 날씨 확인이 가능한 검색형 대시보드",
    link: "https://maro-board.vercel.app/",
    type: ["React", "Next.js", "framer"],
    src: "/images/web/web_3.png",
  },
];

// Work 컴포넌트
export default function Work({ Ref }: { Ref: sectionRef }) {
  return (
    <section className="home-work">
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
                        <Image
                          src={item.src}
                          alt={item.name}
                          placeholder="blur"
                          blurDataURL={item.src}
                          fill
                        />
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
