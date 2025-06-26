import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserStore = {
    user: any
    setUser: (profile: any) => void,
}

export const userStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: null,
            setUser: (user) => set({ user }),
        }),
        {
            name: 'user-rocola-storage',
        },
    ),
)
