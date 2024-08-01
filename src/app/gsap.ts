import gsap from "gsap";
import { Observer } from "gsap/all";

export const mainGsap = (
  firstLoad: boolean,
  setFirstLoadEnd: () => void,
  context: any
) => {
  // Hero
  // 로딩 전
  gsap.set(".home-hero-con__title, .home-hero-con__sub, .home-hero-blob", {
    y: 30,
    opacity: 0,
  });

  // 로딩 후
  if (!firstLoad) {
    gsap.to(".home-hero-con__title, .home-hero-blob", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      onComplete: setFirstLoadEnd,
    });

    gsap.to(".home-hero-con__sub", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.3,
    });
  }

  // 마우스 이동 이벤트
  Observer.create({
    target: window,
    type: "pointer,touch",
    onMove: (e) => {
      const value = 0.04;
      const x = (Number(e.x) - window.innerWidth / 2) * value;
      const y = (Number(e.y) - window.innerHeight / 2) * value;
      gsap.to(".home-hero-blur", { x: -x, y: -y });
      gsap.to(".home-hero-blob", { x, y });
    },
  });

  // 스크롤 이벤트 감지 및 애니메이션 효과
  Observer.create({
    target: window,
    type: "scroll",
    onDown: (e) => gsap.to(".home-hero-imgbox", { y: e.deltaY }),
  });

  // about
  gsap.to(".home-about-con", {
    scrollTrigger: {
      trigger: ".home-about-con",
      start: `top-=${window.innerHeight * 0.6}`,
      toggleActions: "play none none reverse",
    },
    opacity: 1,
  });

  // work
  const list = context.selector(".home-work-wrap")[0];
  const x =
    list.clientWidth - context.selector(".home-work-con")[0].clientWidth;

  gsap.to(list, {
    x: -x,
    ease: "none",
    scrollTrigger: {
      trigger: ".home-work-scroller",
      scrub: 1,
      pin: true,
      start: "top",
      end: list.clientHeight * 6,
    },
  });

  // contact
  gsap.set(".home-contact-con", {
    opacity: 0,
    y: 100,
  });

  gsap.to(".home-contact-con", {
    scrollTrigger: {
      trigger: ".home-contact-con",
      start: `top-=${window.innerHeight * 0.6}`,
      toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
  });
};
