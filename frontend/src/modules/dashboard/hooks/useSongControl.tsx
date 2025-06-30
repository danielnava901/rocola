import {songStore} from "@/app/stores/songStore";

const useSongControl = () => {
    const {isPlaying, currentSong, setIsPlaying} = songStore(state => state);

    const playSong = () => {
        setIsPlaying(true);
    }

    const pauseSong = () => {
        setIsPlaying(false);
    }

    return {isPlaying, playSong, pauseSong, currentSong}
}

export default useSongControl;