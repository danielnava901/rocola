import { Shuffle, Play, Repeat, SkipForward, Pause, SkipBack, Volume2, Heart } from "lucide-react";
import IconText from "@/shared/components/molecules/IconText";
import useSongControl from "@/modules/dashboard/hooks/useSongControl";

const PlayingSongFooter = () => {
    const {isPlaying, playSong, pauseSong, currentSong, favorites} = useSongControl();


    return <div className="bg-white border-t border-gray-200 px-6 py-4 flex">
        <div className="flex items-center gap-4">
            <div className="border border-gray-400 rounded w-[85px] h-[85px]">
                <img src={currentSong?.coverImage} alt="image"/>
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-gray-600 font-bold">{currentSong.title}</span>
                <span className="text-sm text-gray-400">{currentSong.artist}</span>
            </div>
            <IconText>
                <Heart className={`
                    ${favorites.indexOf(currentSong.id) >= 0 ? 'text-red-500' : ''}
                `} />
            </IconText>
        </div>
        <div className="flex-2 px-4 flex flex-col justify-between py-4 gap-2">
            <div className="flex gap-2 w-full justify-center text-gray-600">
               <div className="flex w-6/12 justify-between items-center">
                   <Shuffle className="cursor-pointer hover:opacity-75" />
                   <SkipBack className="cursor-pointer hover:opacity-75" />
                   {
                       isPlaying ? (
                           <div className="border border-gray-400 p-2 rounded-full flex items-center justify-center
                           cursor-pointer hover:opacity-75"
                                onClick={() => {pauseSong()}}
                           >
                               <Pause className="w-[45px] h-[45px] p-2"/>
                           </div>
                           ) :
                           (
                           <div className="border border-red-500 bg-red-500 p-2 rounded-full flex items-center justify-center
                           cursor-pointer hover:opacity-75"
                                onClick={() => {playSong()}}
                           >
                               <Play className="w-[45px] h-[45px] p-2 text-white"/>
                           </div>
                           )
                   }
                   <SkipForward className="cursor-pointer hover:opacity-75"/>
                   <Repeat className="cursor-pointer hover:opacity-75"/>
               </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="text-sm">00:00</div>
                <div className="h-[5px] bg-red-500 rounded w-full cursor-pointer">
                    &nbsp;
                </div>
                <div className="text-sm">03:00</div>
            </div>
        </div>
        <div className="items-center w flex">
            <IconText className="px-1">
                <Volume2 />
            </IconText>
            <div className="h-[35px] flex items-center">
                <div className="h-[5px] bg-red-500 rounded w-[100px] cursor-pointer">
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
}

export default PlayingSongFooter;