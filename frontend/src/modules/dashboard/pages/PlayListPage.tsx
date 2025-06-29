import {useEffect} from "react";
import usePlayLists from "@/modules/dashboard/hooks/usePlayLists";

const PlayListPage = () => {
    const {getPlaylist, loading, playlists} = usePlayLists();

    useEffect(() => {
        getPlaylist();
    }, []);

    return <div className="bg-white rounded-lg shadow-sm">
        {loading ?
            <div>Cargando...</div> :
            <div>{
                playlists.map(playlist => (
                    <div key={playlist.id}>
                        {playlist.name}
                    </div>
                ))
            }</div>
        }
    </div>
}

export default PlayListPage;