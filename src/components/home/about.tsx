import { forwardRef } from "react";
import styles from "@/styles/components/home.module.scss";

// 경력 정보 목록
const ABOUT_DATA = [
  {
    id: "education",
    title: "학력",
    list: [
      { id: "high-school", year: "2007.03 ~ 2010.02", name: "구로 고등학교" },
      {
        id: "college",
        year: "2013.02 ~ 2015.02",
        name: "서울예술 전문학교 / 디지털 디자인과",
      },
    ],
  },
  {
    id: "other-career",
    title: "기타 경력",
    list: [
      {
        id: "golden-frame",
        year: "2016.02 ~ 2017.02",
        name: "골든프레임 / 3D 애니메이터",
      },
      { id: "kog", year: "2017.12 ~ 2020.05", name: "KOG / 3D캐릭터 모델러" },
    ],
  },
  {
    id: "web-career",
    title: "웹 퍼블리셔 경력",
    list: [
      {
        id: "academy",
        year: "2020.05 ~ 2020.09",
        name: "대구 코리아IT아카데미 수료",
      },
      { id: "sky", year: "2020.09 ~ 2021.05", name: "스카이 패밀리" },
      { id: "atoz", year: "2021.06 ~ 2022.08", name: "에이토즈" },
      { id: "stn", year: "2022.09 ~ 2025.08", name: "에스티엔인포텍" },
    ],
  },
];

// About 컴포넌트
const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className={styles["home-about"]} ref={ref}>
      <div className={styles["home-about-con"]}>
        <div className={styles["home-about-left"]}>
          <h2 className={`${styles["home-about-title"]} fs-fr f-title`}>
            About
          </h2>
          <p>
            안녕하세요 저는 <span className="fs-fr text-main">MARO</span>{" "}
            입니다.
          </p>
          <p>
            이전에 3D 모델러 및 애니메이터로 일한 경험이 있으며 현재는
            웹퍼블리셔로 일하고 있습니다.
          </p>
          <p>
            GSAP, Framer등의 애니메이션 라이브러리를 사용해 애니메이션이 적용된
            웹 페이지를 만드는 걸 좋아하며 다양한 화면과 자연스러운 사용자
            경험을 만드는 퍼블리셔를 목표로 공부하고 있습니다.
          </p>
        </div>
        <div className={styles["home-about-right"]}>
          {ABOUT_DATA.map((item, index) => {
            return (
              <article className={styles["home-about-right-box"]} key={item.id}>
                <p className={styles["home-about-right__num"]}>0{index + 1}</p>
                <div className={styles["home-about-right__list"]}>
                  <h3 className={styles["home-about-right__title"]}>
                    {item.title}
                  </h3>
                  {item.list.map((listItem) => {
                    return (
                      <div
                        className={styles["home-about-right__item"]}
                        key={listItem.id}
                      >
                        <p className={styles["home-about-right__year"]}>
                          {listItem.year}
                        </p>
                        <p className={styles["home-about-right__name"]}>
                          {listItem.name}
                        </p>
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
});

About.displayName = "About";

export default About;
