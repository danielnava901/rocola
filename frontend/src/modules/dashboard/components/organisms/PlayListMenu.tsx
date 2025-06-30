import { List } from 'lucide-react';
import IconText from "@/shared/components/molecules/IconText";
import usePlayLists from "@/modules/dashboard/hooks/usePlayLists";
import {useEffect} from "react";

const PlayListMenu = () => {
    const {getPlaylist, loading, playlists} = usePlayLists();

    useEffect(() => {
        getPlaylist()
    }, []);

    return (
        <div className="text-gray-600">
            <div className="py-4 px-4"><h2 className="uppercase font-bold">Playlists</h2></div>
            <div>
                {
                    playlists.map(playlist => (
                        <IconText
                            key={playlist.id}
                            onClick={() => {}} text={playlist.name}>
                            <List  />
                        </IconText>
                    ))
                }
            </div>
        </div>
    )
}

export default PlayListMenu;