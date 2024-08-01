"use client";
import "@/styles/main.scss";
import { useEffect, useRef, useState } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mainGsap } from "./gsap";
import { ScrollTrigger, Observer } from "gsap/all";
import About from "./(home)/about";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Work from "./(home)/work";
import Skills from "./(home)/skills";
import Loading from "./(layout)/loading";

gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);

export default function Home() {
  const sectionRef = useRef<HTMLElement[]>([]);
  const mainRef = useRef(null);
  const [resizeCheck, setResizeCheck] = useState(0);
  const { setSectionRef, firstLoadEnd, firstLoad, setFirstLoadEnd } =
    useStore(defaultStore);

  // 창 크기 변경 처리
  const handleResize = () => {
    if (window.innerWidth !== resizeCheck) setResizeCheck(window.innerWidth);
  };

  useEffect(() => {
    setSectionRef(sectionRef);
    setResizeCheck(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSectionRef, resizeCheck]);

  // GSAP 애니메이션 설정
  useGSAP((context) => mainGsap(firstLoad, setFirstLoadEnd, context), {
    scope: mainRef,
    dependencies: [firstLoad, resizeCheck],
    revertOnUpdate: true, // 반응형 체크
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
