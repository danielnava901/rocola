import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserStore = {
    user: any
    isAuthenticated: boolean,
    setUser: (profile: any) => void,
}

export const userStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            setUser: (user) => set({ user, isAuthenticated: !!user }),
        }),
        {
            name: 'user-rocola-storage',
        },
    ),
)
