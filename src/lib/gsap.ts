import gsap from "gsap";
import { Observer, ScrollTrigger } from "gsap/all";
import styles from "@/styles/components/home.module.scss";

gsap.registerPlugin(ScrollTrigger, Observer);

// 애니메이션 설정을 위한 객체
const ANIM_CONFIG = {
  stagger: {
    duration: 1.5,
    delay: 0.3,
  },
  hero: {
    y: 30,
    scrollDist: 50,
  },
  parallax: {
    value: 0.04,
  },
  scrub: 1,
  scroll: {
    aboutOffset: 0.6,
    workEnd: 0.8,
    contactOffset: 0.8,
  },
  contact: {
    y: 100,
  },
};

export const mainGsap = (
  firstLoad: boolean,
  setFirstLoadEnd: () => void,
  scopeRef: React.RefObject<HTMLElement>
) => {
  const scope = scopeRef.current;
  if (!scope) return;

  // iOS 기기이면서 터치 지원하는 기기 체크
  const isIOSDevice =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0);
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isIOSTouch = isIOSDevice && isTouchDevice;

  // Hero
  gsap.set(
    `.${styles["home-hero-con__title"]}, .${styles["home-hero-con__sub"]}, .${styles["home-hero-blob"]}`,
    {
      y: ANIM_CONFIG.hero.y,
      opacity: 0,
    }
  );

  if (!firstLoad) {
    gsap.to(
      `.${styles["home-hero-con__title"]}, .${styles["home-hero-blob"]}`,
      {
        y: 0,
        opacity: 1,
        duration: ANIM_CONFIG.stagger.duration,
        onComplete: setFirstLoadEnd,
      }
    );

    gsap.to(`.${styles["home-hero-con__sub"]}`, {
      y: 0,
      opacity: 1,
      duration: ANIM_CONFIG.stagger.duration,
      delay: ANIM_CONFIG.stagger.delay,
    });
  }

  Observer.create({
    target: window,
    type: "pointer,touch",
    onMove: (e) => {
      const value = ANIM_CONFIG.parallax.value;
      const x = (Number(e.x) - window.innerWidth / 2) * value;
      const y = (Number(e.y) - window.innerHeight / 2) * value;
      gsap.to(`.${styles["home-hero-blur"]}`, { x: -x, y: -y });
      gsap.to(`.${styles["home-hero-blob"]}`, { x, y });
    },
  });

  gsap.to(`.${styles["home-hero-imgbox"]}, .${styles["home-hero-con"]}`, {
    scrollTrigger: {
      trigger: `.${styles["home-hero"]}`,
      start: "top",
      end: "bottom",
      scrub: ANIM_CONFIG.scrub,
    },
    y: ANIM_CONFIG.hero.scrollDist,
  });

  gsap.to(`.${styles["home-about-con"]}`, {
    scrollTrigger: {
      trigger: `.${styles["home-about-con"]}`,
      start: `top-=${window.innerHeight * ANIM_CONFIG.scroll.aboutOffset}`,
      toggleActions: "play none none reverse",
      toggleClass: styles["active"],
    },
    opacity: 1,
  });

  // work
  const list = scope.querySelector<HTMLElement>(`.${styles["home-work-wrap"]}`);
  const wrap = scope.querySelector<HTMLElement>(
    `.${styles["home-work-scroller"]}`
  );
  const con = scope.querySelector<HTMLElement>(`.${styles["home-work-con"]}`);

  if (list && wrap && con) {
    if (isIOSTouch) {
      gsap.set(list, { x: 0 });
      wrap.classList.add(styles["iphone"]);
    } else {
      const x = list.clientWidth - con.clientWidth;
      gsap.to(list, {
        x: -x,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          scrub: ANIM_CONFIG.scrub,
          pin: true,
          start: "top",
          end: `+=${list.scrollWidth * ANIM_CONFIG.scroll.workEnd}`,
        },
      });
    }
  }

  // contact
  gsap.set(`.${styles["home-contact-con"]}`, {
    opacity: 0,
    y: ANIM_CONFIG.contact.y,
  });

  gsap.to(`.${styles["home-contact-con"]}`, {
    scrollTrigger: {
      trigger: `.${styles["home-contact-con"]}`,
      start: `top-=${window.innerHeight * ANIM_CONFIG.scroll.contactOffset}`,
      toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
  });
};
