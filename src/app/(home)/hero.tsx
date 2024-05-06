"use client";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { sectionRef } from "@/types/useTypes";
import "@/styles/blobz.min.css";

// GSAP 플러그인 설정
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

// Hero 컴포넌트
export default function Hero({ Ref }: { Ref: sectionRef }) {
  // useGSAP 사용
  useGSAP(
    () => {
      // 마우스 이동에 따른 효과를 추가
      Observer.create({
        target: window,
        type: "pointer,touch",
        onMove: (e) => {
          const value = 0.04;
          const x = (Number(e.x) - window.innerWidth / 2) * value;
          const y = (Number(e.y) - window.innerHeight / 2) * value;

          function blobAct(target: string, x: number, y: number) {
            gsap.to(target, { x: x, y: y });
          }
          blobAct(".home-hero-blur", -x, -y);
          blobAct(".home-hero-blob", x, y);
        },
      });

      // 스크롤에 따른 효과를 추가
      Observer.create({
        target: window,
        type: "scroll,touch",
        onChangeY: (e) => {
          function scrollAct(target: string, y: number) {
            gsap.to(target, { y: y });
          }
          scrollAct(Ref.current[0], e.deltaY * 2);
          scrollAct(".home-hero-imgbox", e.deltaY);
        },
      });
    },
    { scope: Ref.current[0] }
  );

  return (
    <section className="home-hero">
      <div className="home-hero-wrap">
        <div
          className="home-hero-con"
          ref={(e) => {
            Ref.current[0] = e;
          }}
        >
          {/* Hero 콘텐츠 */}
          <h2 className="home-hero-con__title fs-fr">
            Welcome To My
            <br />
            <b>PORTFOLIO</b>
          </h2>
          <p className="home-hero-con__sub ">
            안녕하세요 저는 <span className="fs-fr text-main">MARO</span>{" "}
            입니다.
            <br />
            저는 애니메이션이 적용된 웹 페이지를 만드는 걸 좋아하며 현재는
            <br />
            퍼블리셔로 일하면서 프론트엔드 개발자를 목표로 공부하고 있습니다.
          </p>
        </div>
        {/* Blob 컴포넌트 */}
        <div className="home-hero-imgbox">
          <div className="home-hero-blur"></div>
          <div className="home-hero-blob">
            <Blob />
          </div>
        </div>
      </div>
    </section>
  );
}

// Blob 컴포넌트
function Blob() {
  return (
    <div className="tk-blob">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
        <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
          <stop offset="0%" stopColor="rgb(34, 193, 195)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(253, 187, 45)" stopOpacity="1" />
        </linearGradient>
        <path
          fill="url(#PSgrad_0)"
          d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
        ></path>
      </svg>
    </div>
  );
}
