"use client";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";
import { FaGithub } from "react-icons/fa";

// Header 컴포넌트
export default function Header() {
  const sectionList = ["home", "skills", "about", "work", "contact"];
  const { sectionRef } = useStore(defaultStore);

  // 특정 섹션으로 스크롤하는 함수
  const move = (num: number) => {
    sectionRef.current[num].scrollIntoView({ behavior: "smooth" });
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

      <nav className="header-nav">
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
