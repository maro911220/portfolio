"use client";
import { useStore } from "zustand";
import { useState, useEffect } from "react";
import { defaultStore } from "@/store/store";
import { FaGithub } from "react-icons/fa";

// Header 컴포넌트
export default function Header() {
  const sectionList = ["home", "skills", "about", "work", "contact"];
  const { sectionRef, lenisInstance } = useStore(defaultStore);
  const [showNav, setShowNav] = useState(false);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY > 100);
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 클린업 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 특정 섹션으로 스크롤하는 함수
  const move = (num: number) => {
    if (sectionRef.current[num]) {
      if (lenisInstance) {
        // Lenis가 활성화된 경우 (데스크톱)
        lenisInstance.scrollTo(sectionRef.current[num], {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        // Lenis가 비활성화된 경우 (모바일) - 네이티브 스크롤 사용
        sectionRef.current[num].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  };
  return (
    <header className="header">
      <div className="header-con">
        <h1 className="header-title">
          <a href="#none">Maro</a>
        </h1>
        <a
          className="header-git"
          href="https://github.com/maro911220"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <nav className={`header-nav ${showNav ? "show" : ""}`}>
        <h2 className="hidden">Maro-portfolio-nav</h2>
        {sectionList.map((item, index) => {
          return (
            <button onClick={() => move(index)} key={index}>
              {item}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
