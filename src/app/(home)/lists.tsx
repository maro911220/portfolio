"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Lists() {
  const container = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      // gsap.to(".box", { x: 360 });
    },
    { scope: container }
  );
  return <section ref={container}>Lists</section>;
}
