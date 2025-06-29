import {useState} from "react";
import getPlayListCase from "@/modules/dashboard/usecases/getPlayListCase";

const usePlayLists = () => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPlaylist = async () => {
        setLoading(true);
        try {
            const playlistsFromApi : any[] = await getPlayListCase();
            setPlaylists(playlistsFromApi);
        }finally {
            setLoading(false);
        }
    }


    return {playlists, loading, getPlaylist}
}

export default usePlayLists;