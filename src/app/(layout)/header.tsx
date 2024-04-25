"use client";
import "@/styles/header.scss";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const sectionList = ["hero", "skills", "about", "work", "contact"];
  const { sectionRef } = useStore(defaultStore);
  const move = (num: number) => {
    sectionRef.current[num].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-con">
        <h1 className="header-title">Maro</h1>
        <a
          className="header-git"
          href="https://github.com/maro911220"
          target="_blank"
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
