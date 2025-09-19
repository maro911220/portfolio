"use client";

import { useState, useEffect, useCallback } from "react";

/* 모바일 디바이스 여부를 확인 함수 */
const checkIsMobile = (): boolean => {
  if (typeof window === "undefined") return false;
  // 터치 이벤트 지원 여부 확인
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // 모바일 디바이스의 User Agent 패턴
  const mobileUserAgentPattern =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  // User Agent 문자열에서 모바일 패턴 확인
  const isMobileUserAgent = mobileUserAgentPattern.test(navigator.userAgent);

  return isTouchDevice || isMobileUserAgent;
};

/* 뷰포트 크기와 모바일 여부를 추적하는 커스텀 훅 */
export const useViewport = () => {
  // 뷰포트 너비 상태
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // 모바일 디바이스 여부 상태
  const [isMobile, setIsMobile] = useState(() => checkIsMobile());

  // 리사이즈 이벤트 핸들러
  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    const newIsMobile = checkIsMobile();

    setWidth((prevWidth) => (prevWidth !== newWidth ? newWidth : prevWidth));
    setIsMobile((prevIsMobile) =>
      prevIsMobile !== newIsMobile ? newIsMobile : prevIsMobile
    );
  }, []);

  // 리사이즈 이벤트 리스너 등록
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    width,
    isMobile,
  };
};
