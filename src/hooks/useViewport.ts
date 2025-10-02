"use client";

import { useState, useEffect, useCallback } from "react";

/* Lenis 사용 체크 함수 */
const checkIsLenisDisabled = (): boolean => {
  if (typeof window === "undefined") return false;

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const mobileUserAgentPattern =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobileUserAgent = mobileUserAgentPattern.test(navigator.userAgent);
  // !Safari + Lenis + GSAP ScrollTrigger 조합 이슈로 인한 체크
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return isTouchDevice || isMobileUserAgent || isSafari;
};

/* 뷰포트 크기와 Lenis 활성화 여부를 추적하는 커스텀 훅 */
export const useViewport = () => {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const [isLenisDisabled, setIsLenisDisabled] = useState(() =>
    checkIsLenisDisabled()
  );

  // 리사이즈 이벤트 핸들러
  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    const newIsLenisDisabled = checkIsLenisDisabled();

    if (newWidth !== width) setWidth(newWidth);
    if (newIsLenisDisabled !== isLenisDisabled) {
      setIsLenisDisabled(newIsLenisDisabled);
    }
  }, [width, isLenisDisabled]);

  // 리사이즈 이벤트 리스너 등록 (디바운스 적용)
  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout;

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, [handleResize]);

  return {
    width,
    isLenisDisabled,
  };
};
