"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { sectionRef } from "@/types/useTypes";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Lists({ Ref }: { Ref: sectionRef }) {
  const container = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const item = gsap.utils.toArray(".list-item");
      const itemLength = item.length - 1;
      const endHeight = Number(container.current?.clientWidth) * itemLength;

      gsap.to(item, {
        xPercent: -100 * itemLength,
        ease: "none",
        scrollTrigger: {
          trigger: ".list-scroller",
          scrub: 1,
          pin: true,
          start: "top top",
          end: endHeight,
        },
      });
    },
    { scope: container }
  );

  return (
    // portfolio-container / portfolio-list / portfolio-list-item
    <section className="list-section" ref={container}>
      <div className="list-scroller">
        <article
          className="list"
          ref={(e) => {
            Ref.current[3] = e;
          }}
        >
          <div className="list-item">1</div>
          <div className="list-item">2</div>
          <div className="list-item">3</div>
          <div className="list-item">4</div>
        </article>
      </div>
    </section>
  );
}
