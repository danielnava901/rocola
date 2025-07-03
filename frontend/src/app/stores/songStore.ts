import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SongStore = {
    currentSong: any
    isPlaying: boolean,
    setCurrentSong: (song: any) => void,
    setIsPlaying: (isPlaying: boolean) => void,
    favorites: any[],
}

export const songStore = create<SongStore>()(
    persist(
        (set, get) => ({
            currentSong: null,
            isPlaying: false,
            favorites: [],
            setCurrentSong: (song) => set({ currentSong: song }),
            setIsPlaying: (isPlaying) => set({isPlaying}),
            setFavorites: (newFavorites) => set({favorites: newFavorites})
        }),
        {
            name: 'song-rocola-storage',
        },
    ),
)
