import { sectionRef } from "@/types/useTypes";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const aboutList = [
  {
    title: "학력",
    img: "/images/icons/ico_school.png",
    list: [
      { year: "2007.03 ~ 2010.02", name: "구로 고등학교" },
      {
        year: "2013.02 ~ 2015.02",
        name: "서울예술 전문학교 / 디지털 디자인과",
      },
    ],
  },
  {
    title: "기타 경력",
    img: "/images/icons/ico_etc.png",
    list: [
      { year: "2016.02 ~ 2017.02", name: "골든프레임 / 3D 애니메이터" },
      { year: "2017.12 ~ 2020.05", name: "KOG / 3D캐릭터 모델러" },
    ],
  },
  {
    title: "웹 퍼블리셔",
    img: "/images/icons/ico_now.png",
    list: [
      { year: "2020.05 ~ 2020.09", name: "대구 코리아IT아카데미 수료" },
      { year: "2020.09 ~ 2021.05", name: "스카이 패밀리" },
      { year: "2021.06 ~ 2022.08", name: "에이토즈" },
      { year: "2022.09 ~ ", name: "에스티엔인포텍" },
    ],
  },
];

// gsap를 사용해 스크롤 끝나는애는 스케일 작아지거나 뭔가 효과를 주는 방향으로..?

export default function About({ Ref }: { Ref: sectionRef }) {
  useGSAP(
    (e: any) => {
      gsap.to(".home-about-con", {
        scrollTrigger: {
          trigger: ".home-about-con",
          start: `top-=${window.innerHeight * 0.6}`,
          toggleActions: "play none none reverse",
        },
        opacity: 1,
      });
    },
    { scope: Ref.current[2] }
  );

  return (
    <section
      className="home-about"
      ref={(e) => {
        Ref.current[2] = e;
      }}
    >
      <div className="home-about-con">
        <div className="home-about-left">
          <h2 className="home-about-title fs-fr">About</h2>
          {/* 좀 더 상세하게 */}
          <p>
            안녕하세요 저는 <span className="fs-fr col-main">MARO</span> 입니다.{" "}
            <br />
            이전에 3D 모델러로 일했으며, 현재는 웹 퍼블리셔로 일하고 있습니다.
            웹 퍼블리싱을 하면서 애니메이션 기술을 적용하고 공부하는 것을
            즐깁니다. 또한 프론트엔드 개발자를 목표로 공부하고 있습니다.
          </p>
        </div>
        <div className="home-about-right">
          {aboutList.map((item, index) => {
            return (
              <article className="home-about-right-box" key={index}>
                <Image
                  className="home-about-right__img"
                  src={item.img}
                  width={80}
                  height={80}
                  alt={item.title}
                />
                <div className="home-about-right__list">
                  <h3 className="home-about-right__title">{item.title}</h3>
                  {item.list.map((item, index) => {
                    return (
                      <div className="home-about-right__item" key={index}>
                        <p className="home-about-right__year">{item.year}</p>
                        <p className="home-about-right__name">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
