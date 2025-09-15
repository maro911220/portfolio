"use client";
import "@/styles/main.scss";
import { useEffect, useRef, useState } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mainGsap } from "./gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./(home)/about";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Work from "./(home)/work";
import Skills from "./(home)/skills";
import Loading from "./(layout)/loading";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const sectionRef = useRef<HTMLElement[]>([]);
  const mainRef = useRef(null);
  const [resizeCheck, setResizeCheck] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const {
    setSectionRef,
    firstLoadEnd,
    firstLoad,
    setFirstLoadEnd,
    setLenisInstance,
  } = useStore(defaultStore);

  // 모바일 체크 함수
  const checkIsMobile = () => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.maxTouchPoints > 0;
    const mobileUserAgents =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobileUserAgent = mobileUserAgents.test(navigator.userAgent);

    return isTouchDevice || isMobileUserAgent;
  };

  // 창 크기 변경 처리
  const handleResize = () => {
    const newWidth = window.innerWidth;
    const newIsMobile = checkIsMobile();

    if (newWidth !== resizeCheck) {
      setResizeCheck(newWidth);
    }

    if (newIsMobile !== isMobile) {
      setIsMobile(newIsMobile);
    }
  };

  useEffect(() => {
    setSectionRef(sectionRef);
    setResizeCheck(window.innerWidth);
    setIsMobile(checkIsMobile());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSectionRef, resizeCheck, isMobile]);

  // lenis 설정 - 모바일이 아닐 때만 실행
  useEffect(() => {
    if (isMobile) {
      setLenisInstance(null);
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      syncTouch: true,
    });

    // Lenis 인스턴스를 store에 저장
    setLenisInstance(lenis);

    if (!firstLoad) {
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy(); // 완전히 제거
      setLenisInstance(null);
    };
  }, [firstLoad, setLenisInstance, isMobile]);

  // GSAP 애니메이션 설정
  useGSAP((context) => mainGsap(firstLoad, setFirstLoadEnd, context), {
    scope: mainRef,
    dependencies: [firstLoad, resizeCheck],
    revertOnUpdate: true,
  });

  return (
    <main className="home" ref={mainRef}>
      <h1 className="hidden">Maro-portfolio-main</h1>
      {firstLoadEnd && <Loading />}
      <Hero Ref={sectionRef} />
      <Skills Ref={sectionRef} />
      <About Ref={sectionRef} />
      <Work Ref={sectionRef} />
      <Contact Ref={sectionRef} />
    </main>
  );
}
