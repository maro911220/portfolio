"use client";
import { FaGithub, FaArrowAltCircleUp } from "react-icons/fa";

export default function Footer() {
  const onUp = (e: any) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="footer-wrap fs-fr">
        <p>Maro911220</p>
        <div className="flex gap-sm">
          <a href="https://github.com/maro911220" target="_blank">
            <FaGithub />
          </a>
          <a
            href="#none"
            onClick={(e) => {
              onUp(e);
            }}
          >
            <FaArrowAltCircleUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
