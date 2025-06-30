import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type SongStore = {
    currentSong: any
    isPlaying: boolean,
    setCurrentSong: (song: any) => void,
    setIsPlaying: (isPlaying: boolean) => void
}

export const songStore = create<SongStore>()(
    persist(
        (set, get) => ({
            currentSong: null,
            isPlaying: false,
            setCurrentSong: (song) => set({ currentSong: song }),
            setIsPlaying: (isPlaying) => set({isPlaying})
        }),
        {
            name: 'song-rocola-storage',
        },
    ),
)
