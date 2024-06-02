import { create } from "zustand";
import { storeSectionRef } from "@/types/useTypes";

// Store 타입 정의
type Store = {
  sectionRef: storeSectionRef;
  setSectionRef: (e: storeSectionRef) => void;
};

// zustand를 사용하여 상태 관리
export const defaultStore = create<Store>()((set) => ({
  sectionRef: { current: [] }, // 섹션 참조
  setSectionRef: (e) => set(() => ({ sectionRef: e })), // 섹션 참조 설정 함수
}));
