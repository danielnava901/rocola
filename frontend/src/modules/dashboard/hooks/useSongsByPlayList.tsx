import {useEffect, useState} from "react";
import getSongsByPlaylistCase from "@/modules/dashboard/usecases/getSongsByPlaylistCase";

const useSongsByPlayList = (playListId) => {
    const [loading, setLoading] = useState(false);
    const [playlist, setPlaylist] = useState(null)

    const getSongs = async () => {
        setLoading(true);
        let newSongs : any = await getSongsByPlaylistCase(playListId);

        if(newSongs.length > 0) {
            newSongs = newSongs[0];
        }
        setPlaylist(newSongs);
        setLoading(false);
    }

    useEffect(() => {
        getSongs();
    }, [playListId]);

    return {playlist, loading}
}

export default useSongsByPlayList;