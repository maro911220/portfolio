"use client";
import "@/styles/main.scss";
import { useEffect, useRef, useCallback } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mainGsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import Loading from "@/components/layout/loading";
import Lenis from "@studio-freight/lenis";
import { useViewport } from "@/hooks/useViewport";

// 네비게이션 및 섹션 컴포넌트 import
import { NAV_SECTIONS } from "@/config/navigation";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Work from "@/components/home/work";
import Skills from "@/components/home/skills";

// GSAP 플러그인 등록
gsap.registerPlugin(useGSAP);

// 섹션 ID와 컴포넌트를 매핑
const sectionComponents = {
  home: Hero,
  skills: Skills,
  about: About,
  work: Work,
  contact: Contact,
} as const;

export default function Home() {
  const sectionRef = useRef<(HTMLElement | null)[]>([]);
  const mainRef = useRef<HTMLElement>(null);

  // 뷰포트 커스텀 훅
  const { width: resizeCheck, isLenisDisabled } = useViewport();

  // Zustand
  const {
    setSectionRef,
    firstLoadEnd,
    firstLoad,
    setFirstLoadEnd,
    setLenisInstance,
  } = useStore(defaultStore);

  useEffect(() => {
    const filteredRefs = sectionRef.current.filter(
      (ref): ref is HTMLElement => ref !== null
    );

    if (filteredRefs.length === NAV_SECTIONS.length) {
      setSectionRef({ current: filteredRefs });
    }
  }, [setSectionRef]);

  // Lenis
  useEffect(() => {
    // 모바일에서는 Lenis를 사용하지 않음
    if (isLenisDisabled) {
      setLenisInstance(null);
      return;
    }

    // Lenis 인스턴스 생성 (부드러운 스크롤 라이브러리)
    const lenis = new Lenis({
      lerp: 0.1,
      syncTouch: true,
    });

    setLenisInstance(lenis);

    if (!firstLoad) {
      lenis.on("scroll", ScrollTrigger.update);

      const ticker = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(ticker);
        lenis.destroy();
        setLenisInstance(null);
      };
    }
  }, [firstLoad, setLenisInstance, isLenisDisabled]);

  // GSAP 애니메이션 설정
  useGSAP(() => mainGsap(firstLoad, setFirstLoadEnd, mainRef), {
    scope: mainRef,
    dependencies: [firstLoad, resizeCheck],
    revertOnUpdate: true,
  });

  // 각 섹션의 ref 콜백을 생성하는 메모화된 함수
  const createSectionRefCallback = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      sectionRef.current[index] = el;
    },
    []
  );

  return (
    <main className="home" ref={mainRef}>
      <h1 className="hidden">Maro-portfolio-main</h1>
      {firstLoadEnd && <Loading />}
      {NAV_SECTIONS.map((section, index) => {
        const Component =
          sectionComponents[section.id as keyof typeof sectionComponents];

        return (
          <Component key={section.id} ref={createSectionRefCallback(index)} />
        );
      })}
    </main>
  );
}
