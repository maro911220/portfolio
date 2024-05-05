"use client";
import { sectionRef } from "@/types/useTypes";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";
import { useRef } from "react";
import "@/styles/blobz.min.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Observer);

export default function Hero({ Ref }: { Ref: sectionRef }) {
  useGSAP(
    (e: any) => {
      Observer.create({
        target: window,
        type: "pointer,touch",
        onMove: (e) => {
          const value = 0.04;
          const x = (Number(e.x) - window.innerWidth / 2) * value;
          const y = (Number(e.y) - window.innerHeight / 2) * value;

          gsap.to(".home-hero-blur", {
            x: -x,
            y: -y,
          });

          gsap.to(".home-hero-blob", {
            x: x,
            y: y,
          });
        },
      });

      Observer.create({
        target: window,
        type: "scroll,touch",
        onChangeY: (e) => {
          gsap.to(Ref.current[0], {
            y: e.deltaY * 2,
          });
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
          {/* 문구 수정 예정 */}
          <h2 className="home-hero-con__title fs-fr">
            안녕하세요
            <br />
            <b>MARO</b>입니다.
          </h2>
          <p className="home-hero-con__sub">
            저는 반응형 웹을 만들고 애니메이션 기술을 사용하는걸 좋아합니다.
            <br />
            또한 프론트엔드 개발자를 목표로 공부하고 있습니다.
          </p>
        </div>
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
