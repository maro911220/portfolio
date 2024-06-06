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
  firstLoad: true,
  firstLoadEnd: true,
  setFirstLoad: () => set(() => ({ firstLoad: false })),
  setFirstLoadEnd: () => set(() => ({ firstLoadEnd: false })),
  setSectionRef: (e) => set(() => ({ sectionRef: e })), // 섹션 참조 설정 함수
}));
