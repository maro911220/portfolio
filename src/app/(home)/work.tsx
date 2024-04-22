"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { sectionRef } from "@/types/useTypes";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Work({ Ref }: { Ref: sectionRef }) {
  const container = useRef<HTMLElement>(null);
  useGSAP(
    (e: any) => {
      const item = e.selector(".home-work-wrap")[0];
      const itemWidth = item.clientWidth;
      const x = itemWidth - Number(container.current?.clientWidth);

      gsap.to(item, {
        x: -x,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-work-scroller",
          scrub: 1,
          pin: true,
          start: "top",
          end: itemWidth,
        },
      });
    },
    { scope: container }
  );

  return (
    // portfolio-container / portfolio-list / portfolio-list-item
    <section className="home-work" ref={container}>
      <h2 className="hidden">List</h2>
      <article className="home-work-scroller">
        <div
          className="home-work-con"
          ref={(e) => {
            Ref.current[3] = e;
          }}
        >
          <div className="home-work-wrap">
            <h3>Work</h3>
            <p>1</p>
            <p>2</p>
          </div>
        </div>
      </article>
    </section>
  );
}
