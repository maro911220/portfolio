"use client";
import { FaGithub, FaArrowAltCircleUp } from "react-icons/fa";

// Footer 컴포넌트
export default function Footer() {
  // 페이지 상단으로 이동 스크롤 함수
  const onUp = (e: any) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-wrap fs-fr">
        <p>Maro911220</p>
        <div className="flex gap-sm">
          <a
            href="https://github.com/maro911220"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="#none" onClick={onUp}>
            <FaArrowAltCircleUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
