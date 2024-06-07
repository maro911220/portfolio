import { create } from "zustand";
import { storeSectionRef } from "@/types/useTypes";

// Store 타입 정의
type Store = {
  sectionRef: storeSectionRef;
  firstLoad: boolean;
  firstLoadEnd: boolean;
  setFirstLoad: () => void;
  setFirstLoadEnd: () => void;
  setSectionRef: (e: storeSectionRef) => void;
};

// zustand를 사용하여 상태 관리
export const defaultStore = create<Store>()((set) => ({
  sectionRef: { current: [] }, // 섹션 참조
  firstLoad: true, // 로드 초기
  firstLoadEnd: true, // 로드 종료
  setFirstLoad: () => set(() => ({ firstLoad: false })), // 로드 초기 설정 함수
  setFirstLoadEnd: () => set(() => ({ firstLoadEnd: false })), // 로드 종료 설정 함수
  setSectionRef: (e) => set(() => ({ sectionRef: e })), // 섹션 참조 설정 함수
}));
