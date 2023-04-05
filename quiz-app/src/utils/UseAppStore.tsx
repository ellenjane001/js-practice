import { create } from 'zustand'

interface UseAppStoreType {
    theme: boolean
    setTheme: any
}
const UseAppStore = create<UseAppStoreType>((set) => ({
    theme: false,
    setTheme: (value:boolean) => set(() => ({ theme: value }))
}))

export default UseAppStore;