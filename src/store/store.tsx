import { create } from 'zustand'
import { storeSectionRef } from '@/types/useTypes'

type Store = {
  sectionRef: storeSectionRef
  setSectionRef:(e:storeSectionRef)=>void
}

export const defaultStore = create<Store>()((set) => ({
  sectionRef:{current:[]},
  setSectionRef :(e)=>set(()=>({sectionRef:e})),
}))