import gsap from "gsap";
import { Observer, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Observer);

export const mainGsap = (
  firstLoad: boolean,
  setFirstLoadEnd: () => void,
  context: any
) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  // iOS에서 ScrollTrigger 정규화
  if (isIOS) {
    ScrollTrigger.normalizeScroll(true);
  }

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

  gsap.to(".home-hero-imgbox, .home-hero-con", {
    scrollTrigger: {
      trigger: ".home-hero",
      start: "top",
      end: "bottom",
      scrub: 1,
    },
    y: 50,
  });

  // about
  gsap.to(".home-about-con", {
    scrollTrigger: {
      trigger: ".home-about-con",
      start: `top-=${window.innerHeight * 0.6}`,
      toggleActions: "play none none reverse",
      toggleClass: "active",
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
      end: `+=${list.scrollWidth * 0.8}`,
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
      start: `top-=${window.innerHeight * 0.8}`,
      toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
  });
};
