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

export default function Home() {
  const { setSectionRef } = useStore(defaultStore);
  const Ref = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setSectionRef(Ref);
  }, [setSectionRef]);

  return (
    <main className="home">
      <h1 className="hidden">Maro-portfolio-main</h1>
      <Hero Ref={Ref} />
      <Skills Ref={Ref} />
      <About Ref={Ref} />
      <Work Ref={Ref} />
      <Contact Ref={Ref} />
    </main>
  );
}
