"use client";
import "@/styles/main.scss";
import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import { defaultStore } from "@/store/store";
import About from "./(home)/about";
import Contact from "./(home)/contact";
import Hero from "./(home)/hero";
import Work from "./(home)/work";
import Skills from "./(home)/skills";
import Loading from "./(layout)/loading";

export default function Home() {
  const { setSectionRef, firstLoadEnd } = useStore(defaultStore);
  const Ref = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setSectionRef(Ref);
  }, [setSectionRef]);

  return (
    <main className="home">
      <h1 className="hidden">Maro-portfolio-main</h1>
      {/* 초기 CSS 로딩 방지 */}
      {/* {firstLoadEnd && <Loading />} */}
      <Loading />
      {/* 각 섹션 컴포넌트에 Ref 전달 */}
      <Hero Ref={Ref} />
      <Skills Ref={Ref} />
      <About Ref={Ref} />
      <Work Ref={Ref} />
      <Contact Ref={Ref} />
    </main>
  );
}
