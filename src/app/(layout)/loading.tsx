"use client";
import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";

const loadingStyle = `fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[999]`;
const svgStyle = `animate-spin`; // Tailwind CSS spin 사용 (원하면 제거 가능)

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setFirstLoad } = useStore(defaultStore);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0"; // 간단하게 opacity 적용
        setFirstLoad();
        document.body.classList.add("active");
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [setFirstLoad]);

  return (
    <div className={loadingStyle} ref={containerRef}>
      <svg
        className={svgStyle}
        width="100"
        height="100"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="90 150"
          className="stroke-main"
        />
      </svg>
    </div>
  );
}
