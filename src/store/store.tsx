import { create } from "zustand";
import type Lenis from "@studio-freight/lenis";

// type
interface storeSectionRef {
  current: HTMLElement[];
}

type Store = {
  sectionRef: storeSectionRef;
  firstLoad: boolean;
  firstLoadEnd: boolean;
  lenisInstance: Lenis | null;
  setFirstLoad: () => void;
  setFirstLoadEnd: () => void;
  setSectionRef: (e: storeSectionRef) => void;
  setLenisInstance: (lenis: Lenis | null) => void;
};

// zustand를 사용하여 상태 관리
export const defaultStore = create<Store>()((set) => ({
  sectionRef: { current: [] }, // 섹션 참조
  firstLoad: true, // 로드 초기
  firstLoadEnd: false, // 로드 종료
  lenisInstance: null, // lenis
  setFirstLoad: () => set(() => ({ firstLoad: false })), // 로드 초기 설정 함수
  setFirstLoadEnd: () => set(() => ({ firstLoadEnd: true })), // 로드 종료 설정 함수
  setSectionRef: (e) => set(() => ({ sectionRef: e })), // 섹션 참조 설정 함수
  setLenisInstance: (lenis) => set({ lenisInstance: lenis }), // lenis 설정 함수
}));
