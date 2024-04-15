import { sectionRef } from "@/types/useTypes";

export default function About({ Ref }: { Ref: sectionRef }) {
  return (
    <section
      className="home-about"
      ref={(e) => {
        Ref.current[2] = e;
      }}
    >
      <div className="home-about-con">
        <div className="home-about-left">
          <p>SERVICES</p>
          <p>Design, Development, and Content. All-in-one.</p>
          <span>
            Take your online presence to the next level with my expert web
            design and content creation services.
          </span>
        </div>
        <div className="home-about-right">
          <div className="home-about-right-box">
            <p>
              01 WEB DESIGN Premium, custom web design services that cater to
              the unique needs of each client. Visually stunning and
              user-friendly websites that drive results.
            </p>
          </div>
          <div className="home-about-right-box">
            <p>
              02 WEB DESIGN Premium, custom web design services that cater to
              the unique needs of each client. Visually stunning and
              user-friendly websites that drive results.
            </p>
          </div>
          <div className="home-about-right-box">
            <p>
              03 WEB DESIGN Premium, custom web design services that cater to
              the unique needs of each client. Visually stunning and
              user-friendly websites that drive results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
