"use client";
import { useStore } from "zustand";
import { useState, useCallback, useEffect } from "react";
import { defaultStore } from "@/store/store";
import { FaGithub } from "react-icons/fa";
import { NAV_SECTIONS } from "@/config/navigation";

// Header 컴포넌트
export default function Header() {
  const { sectionRef, lenisInstance } = useStore(defaultStore);
  const [showNav, setShowNav] = useState(false);

  // 네비게이션 표시/숨김
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowNav(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    if (lenisInstance) {
      lenisInstance.on("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (lenisInstance) {
        lenisInstance.off("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lenisInstance]);

  // 특정 섹션으로 스크롤하는 함수
  const handleNavClick = useCallback(
    (index: number) => {
      const targetSection = sectionRef.current[index];
      if (!targetSection) return;

      if (lenisInstance) {
        lenisInstance.scrollTo(targetSection, {
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [lenisInstance, sectionRef]
  );

  // 홈으로 스크롤
  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      handleNavClick(0);
    },
    [handleNavClick]
  );

  return (
    <header className="header">
      <div className="header-con">
        <h1 className="header-title">
          <a href="/" onClick={handleLogoClick} aria-label="홈으로 이동">
            Maro
          </a>
        </h1>
        <a
          target="_blank"
          className="header-git"
          rel="noopener noreferrer"
          href="https://github.com/maro911220"
          aria-label="GitHub 프로필"
        >
          <FaGithub />
        </a>
      </div>

      <nav className={`header-nav ${showNav ? "show" : ""}`}>
        <h2 className="hidden">메인 네비게이션</h2>
        {NAV_SECTIONS.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(index)}
              aria-label={`${item.label} 섹션으로 이동`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
