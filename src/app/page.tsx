"use client";
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
import { NAV_SECTIONS } from "@/config/navigation";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Work from "@/components/home/work";
import Skills from "@/components/home/skills";
import styles from "@/styles/components/home.module.scss";

gsap.registerPlugin(useGSAP);

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
  const { width: resizeCheck, isLenisDisabled } = useViewport();
  const {
    setSectionRef,
    firstLoadEnd,
    firstLoad,
    setFirstLoadEnd,
    setLenisInstance,
  } = useStore(defaultStore);

  // 섹션 ref 설정
  useEffect(() => {
    const filteredRefs = sectionRef.current.filter(
      (ref): ref is HTMLElement => ref !== null
    );

    if (filteredRefs.length === NAV_SECTIONS.length) {
      setSectionRef({ current: filteredRefs });
    }
  }, [setSectionRef]);

  // Lenis 스무스 스크롤 (로딩 완료 후 초기화)
  useEffect(() => {
    if (isLenisDisabled) {
      setLenisInstance(null);
      return;
    }

    if (firstLoad) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      syncTouch: true,
    });

    setLenisInstance(lenis);
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
  }, [firstLoad, setLenisInstance, isLenisDisabled]);

  // GSAP 애니메이션
  useGSAP(() => mainGsap(firstLoad, setFirstLoadEnd, mainRef), {
    scope: mainRef,
    dependencies: [firstLoad, resizeCheck],
    revertOnUpdate: true,
  });

  // 섹션 ref 콜백
  const createSectionRefCallback = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      sectionRef.current[index] = el;
    },
    []
  );

  return (
    <main className={styles.home} ref={mainRef}>
      {/* 초기 로딩 */}
      {!firstLoadEnd && <Loading />}
      {/* 섹션 */}
      <h1 className="hidden">메인 컨텐츠</h1>
      {NAV_SECTIONS.map((section, index) => {
        const Component =
          sectionComponents[section.id as keyof typeof sectionComponents];

        if (!Component) return null;

        return (
          <Component key={section.id} ref={createSectionRefCallback(index)} />
        );
      })}
    </main>
  );
}
