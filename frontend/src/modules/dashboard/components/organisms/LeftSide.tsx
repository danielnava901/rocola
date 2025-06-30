import IconText from "@/shared/components/molecules/IconText";
import { Music, House, Heart } from "lucide-react";
import PlayListMenu from "@/modules/dashboard/components/organisms/PlayListMenu";

const LeftSide = () => {
    return (
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
            <div className="py-4">
                <IconText onClick={() => {}} text="Home">
                    <House  />
                </IconText>
                <IconText onClick={() => {}} text="Your Library">
                    <Music  />
                </IconText>
                <IconText onClick={() => {}} text="Liked Songs">
                    <Heart  />
                </IconText>
            </div>
            <PlayListMenu />
        </div>
    )
}

export default LeftSide;