import { sectionRef } from "@/types/useTypes";
import Image from "next/image";

export default function Hero({ Ref }: { Ref: sectionRef }) {
  return (
    <section className="home-hero">
      <div className="home-hero-wrap">
        <div
          className="home-hero-con"
          ref={(e) => {
            Ref.current[0] = e;
          }}
        >
          <h2 className="home-hero-con__title">
            I am Maro <br />
            Creative Web Developer.
          </h2>
          <p className="home-hero-con__sub">
            i develop accessible, responsive, interactive, and animated websites
            <br />
            with a strong focus on perfomance
          </p>
        </div>
        <div className="home-hero-imgbox">
          <Image
            className="home-hero-img"
            src="/images/main.png"
            alt="메인 이미지"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
}
