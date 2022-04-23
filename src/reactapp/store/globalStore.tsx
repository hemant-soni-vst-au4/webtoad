import create from 'zustand'

export const languageStore = create((set, get) => ({
  language: 'en',
}))

export const authenticationStore = create((set, get) => ({
  authComponentState: 'auth',
  userName: '',
  userEmail: '',
  // setUserName: (userName) => set({ userName }),
  // setUserEmail: (useEmail) => set({ useEmail }),
  // setAuthComponentState: (authComponentState) => set({ authComponentState }),
}))

export const libraryStore = create((set, get) => ({
  category: 'General',
  setCategory: (category) => set({category}),
  //count: () => get().username.length,
}))
