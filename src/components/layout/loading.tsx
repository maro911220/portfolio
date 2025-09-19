"use client";
import { useEffect, useRef, useCallback } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./loading-lottie.json";

const loadingStyle = `fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[999] transition-opacity duration-1000`;

export default function Loading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const { setFirstLoad } = useStore(defaultStore);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);
    }
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
        setFirstLoad();
        document.body.classList.add("active");
      }
    }, 100);
  }, [setFirstLoad]);

  // 에러 핸들링
  const handleAnimationError = useCallback(() => {
    console.warn("Lottie animation failed to load");
    handleAnimationComplete();
  }, [handleAnimationComplete]);

  return (
    <div className={loadingStyle} ref={containerRef}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={true}
        onComplete={handleAnimationComplete}
        onError={handleAnimationError}
        style={{ width: 300, height: 300 }}
        className="pointer-events-none" // 클릭 방지
      />
    </div>
  );
}
