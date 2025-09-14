"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";

const loadingStyle = `fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[999]`;

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { setFirstLoad } = useStore(defaultStore);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (svgEl) {
      gsap.to(svgEl, {
        rotate: 360,
        duration: 1.2,
        repeat: -1,
        transformOrigin: "50% 50%",
        ease: "linear",
      });
    }

    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          onStart: () => {
            setFirstLoad();
            document.body.classList.add("active");
          },
        });
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [setFirstLoad]);

  return (
    <div className={loadingStyle} ref={containerRef}>
      <svg
        ref={svgRef}
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
