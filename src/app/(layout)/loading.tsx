"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";

// 로딩 컨테이너 스타일
const loadingStyle = `fixed flex justify-center items-center top-0 left-0 w-dvw h-dvh bg-dark z-[999]`;

// loading 컴포넌트
export default function Loading() {
  const loadingRef = useRef<HTMLDivElement>(null); // 로딩 컨테이너 참조
  const lottieRef = useRef<any>(null); // 로티 애니메이션 참조
  const { setFirstLoad } = useStore(defaultStore); // zustand

  // 로티 파일 동적 임포트
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  // GSAP 애니메이션 설정
  useGSAP(
    () => {
      const lottieElement = lottieRef.current;
      if (lottieElement) {
        // 로티 애니메이션 종료 후 실행
        lottieElement.addEventListener("complete", () => {
          gsap.to("#loading-lottie", {
            y: 100,
            opacity: 0,
          });

          gsap.to(loadingRef.current, {
            opacity: 0,
            delay: 0.5,
            duration: 1,
            onStart: () => {
              setFirstLoad();
              document.body.classList.add("active");
            },
          });
        });
      }
    },
    { dependencies: [lottieRef], scope: loadingRef }
  );

  return (
    <div className={loadingStyle} ref={loadingRef}>
      <lottie-player
        speed={2}
        autoplay
        mode="normal"
        ref={lottieRef}
        id="loading-lottie"
        style={{ width: "auto", height: 200 }}
        src="/loading-lottie.json"
      ></lottie-player>
    </div>
  );
}
