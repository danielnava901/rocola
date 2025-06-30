import UserButton from "@/modules/dashboard/components/molecules/UserButton";
import Logo from "@/shared/components/atoms/Logo";
import Search from "@/shared/components/molecules/Search";
import {useNavigate} from "react-router-dom";
import { Settings } from 'lucide-react';
import IconText from "@/shared/components/molecules/IconText";


const Header = () => {
    const navigate = useNavigate();

    return <header className="bg-white border-b border-gray-200 px-6 py-4
        flex items-center justify-between h-[65px]">
        <div className="flex justify-between w-full items-center">
            <div className="flex-1 flex items-center">
                <Logo onClick={() => {navigate("/dashboard/playlists")}} />
            </div>
            <div className="flex-2 flex align-items">
                <Search className="max-w-[600px] bg-green-400" />
            </div>
            <div className="flex-1 flex justify-end">
                <IconText onClick={() => {}}>
                    <Settings  />
                </IconText>
                <UserButton />
            </div>
        </div>
    </header>
}

export default Header;