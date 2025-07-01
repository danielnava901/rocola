import { Play, Heart } from "lucide-react";
import { useParams } from 'react-router-dom';
import useSongsByPlayList from "@/modules/dashboard/hooks/useSongsByPlayList";
import {useState} from "react";
import IconText from "@/shared/components/molecules/IconText";
import {songStore} from "@/app/stores/songStore";

const SongListPage = () => {
    const { playlistId } = useParams();
    const {currentSong, setCurrentSong, isPlaying, setIsPlaying} = songStore(state => state);
    const {playlist, loading} = useSongsByPlayList(playlistId);
    const [songHover, setSongHover] = useState(null);

    if(!playlist || loading) {
        return <div></div>
    }

    return (
        <div className="bg-white rounded p-4 flex flex-col gap-4">
            <div className={`w-full h-[120px] bg-gray-300 rounded bg-patter-${playlistId}`}>

            </div>
            <div className="flex flex-col">
                <div className="font-bold text-gray-800 text-lg">{playlist.name}</div>
                <div></div>
                <div></div>
            </div>
            <div className="flex items-center gap-2">
                {
                    isPlaying ? <button className="px-4 py-1 rounded-full bg-gray-500 text-white
                        font-semibold cursor-pointer hover:opacity-75"
                        onClick={() => {setIsPlaying(false)}}
                        >Pause</button> :
                        <button className="px-4 py-1 rounded-full bg-red-500 text-white
                        font-semibold cursor-pointer hover:opacity-75"
                        onClick={() => {setIsPlaying(true)}}
                        >Play</button>
                }
                <button className="px-4 py-1 rounded-full bg-gray-500 text-white
                    font-semibold cursor-pointer hover:opacity-75">Save</button>
            </div>
            <div className="w-full flex-col flex">
                <div className="flex
                gap-4
                border-x border-t border-gray-200
                py-3 px-4
                rounded-tr-md rounded-tl-md
                text-sm text-gray-600 font-semibold">
                    <div className="w-[50px] shrink-0">#</div>
                    <div className="flex-1">Title</div>
                    <div className="flex-1">Album</div>
                    <div className="flex-1">Duration</div>
                    <div className="w-[60px] shrink-0"></div>
                </div>

                {playlist.songs.map((song, index) => (
                    <div key={song.id}
                         className={`flex 
                   gap-4 
                   border-x border-t border-gray-200 
                   py-4 px-4 
                   hover:bg-gray-100 cursor-pointer 
                   text-sm text-gray-600 h-[50px]
                   ${index === playlist.songs.length - 1 ? "rounded-br-md rounded-bl-md border-b" : ""}`}
                         onMouseEnter={() => setSongHover(song)}
                         onMouseLeave={() => {setSongHover(null)}}>

                        <div className="w-[50px] shrink-0">{song.id}</div>
                        <div className="flex-1 font-semibold">{song.title}</div>
                        <div className="flex-1">{song.album}</div>
                        <div className="flex-1">{song.duration}</div>
                        <div className="w-[60px] shrink-0 flex items-center justify-center">
                            {
                                (songHover?.id === song.id ||
                                        currentSong.id === song.id
                                ) && (
                                    <>
                                        <IconText className="flex
                                            items-center
                                            justify-center
                                            rounded-full
                                            hover:text-red-500
                                            w-[35px] h-[35px] p-2
                                        " px="px-0" py="py-0">
                                            <Heart className="w-[30px] h-[30px]" />
                                        </IconText>

                                        {
                                            (currentSong.id === song.id && isPlaying) ?
                                                <IconText className="flex
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-red-500
                                                    bg-red-500
                                                    text-white
                                                    w-[35px] h-[35px] p-2
                                               " px="px-0" py="py-0"
                                                    onClick={() => {
                                                      setCurrentSong(song)
                                                    }}
                                                >
                                                    <Play className="w-[30px] h-[30px]" />
                                                </IconText>
                                                :
                                                <IconText className="flex
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border border-gray-400
                                                    hover:border-red-500
                                                    hover:bg-red-500
                                                    hover:text-white
                                                    w-[35px] h-[35px] p-2
                                                " px="px-0" py="py-0"
                                                    onClick={() => {
                                                        setCurrentSong(song)
                                                    }}
                                                >
                                                    <Play className="w-[30px] h-[30px]" />
                                                </IconText>
                                        }

                                    </>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SongListPage;