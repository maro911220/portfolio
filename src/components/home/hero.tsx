import "@/styles/vendors/blobz.min.css";
import { forwardRef } from "react";

// Hero 컴포넌트
const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="home-hero" ref={ref}>
      <div className="home-hero-wrap">
        <div className="home-hero-con">
          {/* Hero 콘텐츠 */}
          <h2 className="home-hero-con__title fs-fr">
            Welcome To My
            <br />
            <b>PORTFOLIO</b>
          </h2>
          <p className="home-hero-con__sub ">
            안녕하세요 <span className="fs-fr text-main">MARO</span>의
            포트폴리오 페이지 입니다.
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
});
Hero.displayName = "Hero";

export default Hero;

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
