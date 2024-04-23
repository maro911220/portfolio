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
      <h2 className="hidden">Work</h2>
      <article className="home-work-scroller">
        <div
          className="home-work-con"
          ref={(e) => {
            Ref.current[3] = e;
          }}
        >
          <div className="home-work-wrap">
            <div className="home-work-hero">
              <h3 className="home-work-hero__title fs-fr">Work</h3>
              <p className="home-work-hero__sub">
                A selection of our crafted work, built from scratch by our
                experienced team.
              </p>
            </div>
            <ul className="home-work-list">
              <li className="home-work-item">
                <a className="home-work-item__link" href="#none">
                  <p className="home-work-item__title">Portfolio Sample</p>
                  <div className="home-wrok-item__box">
                    <span>UI/UX Design</span>
                    <span>E-Commerce</span>
                  </div>
                </a>
              </li>
              <li className="home-work-item">
                <a className="home-work-item__link" href="#none">
                  <p className="home-work-item__title">Portfolio Sample</p>
                  <div className="home-wrok-item__box">
                    <span>UI/UX Design</span>
                    <span>E-Commerce</span>
                  </div>
                </a>
              </li>
              <li className="home-work-item">
                <a className="home-work-item__link" href="#none">
                  <p className="home-work-item__title">Portfolio Sample</p>
                  <div className="home-wrok-item__box">
                    <span>UI/UX Design</span>
                    <span>E-Commerce</span>
                  </div>
                </a>
              </li>
              <li className="home-work-item">
                <a className="home-work-item__link" href="#none">
                  <p className="home-work-item__title">Portfolio Sample</p>
                  <div className="home-wrok-item__box">
                    <span>UI/UX Design</span>
                    <span>E-Commerce</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
