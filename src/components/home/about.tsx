import { forwardRef } from "react";

// 경력 정보 목록
const aboutList = [
  {
    title: "학력",
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
    list: [
      { year: "2016.02 ~ 2017.02", name: "골든프레임 / 3D 애니메이터" },
      { year: "2017.12 ~ 2020.05", name: "KOG / 3D캐릭터 모델러" },
    ],
  },
  {
    title: "웹 퍼블리셔 경력",
    list: [
      { year: "2020.05 ~ 2020.09", name: "대구 코리아IT아카데미 수료" },
      { year: "2020.09 ~ 2021.05", name: "스카이 패밀리" },
      { year: "2021.06 ~ 2022.08", name: "에이토즈" },
      { year: "2022.09 ~ 2025.08", name: "에스티엔인포텍" },
    ],
  },
];

// About 컴포넌트
const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section className="home-about" ref={ref}>
      <div className="home-about-con">
        <div className="home-about-left">
          <h2 className="home-about-title fs-fr">About</h2>
          <p>
            안녕하세요 저는 <span className="fs-fr col-main">MARO</span> 입니다.
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
        <div className="home-about-right">
          {aboutList.map((item, index) => {
            return (
              <article className="home-about-right-box" key={index}>
                <p className="home-about-right__num">0{index + 1}</p>
                <div className="home-about-right__list">
                  <h3 className="home-about-right__title">{item.title}</h3>
                  {item.list.map((listItem, index) => {
                    return (
                      <div className="home-about-right__item" key={index}>
                        <p className="home-about-right__year">
                          {listItem.year}
                        </p>
                        <p className="home-about-right__name">
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

export default About;
