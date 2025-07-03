import {songStore} from "@/app/stores/songStore";

const useSongControl = () => {
    const {isPlaying, currentSong, setIsPlaying, favorites} = songStore(state => state);

    const playSong = () => {
        setIsPlaying(true);
    }

    const pauseSong = () => {
        setIsPlaying(false);
    }

    return {isPlaying, playSong, pauseSong, currentSong, favorites}
}

export default useSongControl;