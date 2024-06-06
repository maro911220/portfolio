"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";

export default function Loading() {
  const loadingRef = useRef(null);
  const lottieRef = useRef(null);
  const { setFirstLoad } = useStore(defaultStore);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  useGSAP(
    () => {
      gsap.to(loadingRef.current, {
        opacity: 0,
        delay: 3,
        duration: 1,
        onStart: () => {
          setFirstLoad();
          document.body.classList.add("active");
        },
      });

      gsap.to("#loading-lottie", {
        delay: 2.5,
        y: 100,
        opacity: 0,
      });
    },
    { scope: loadingRef }
  );

  return (
    <div className="loading" ref={loadingRef}>
      <lottie-player
        speed={2}
        autoplay
        mode="normal"
        ref={lottieRef}
        id="loading-lottie"
        src="/loading-lottie.json"
      ></lottie-player>
    </div>
  );
}
