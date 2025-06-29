import { CircleUserRound } from 'lucide-react';
import {useState} from "react";
import {userStore} from "@/app/stores/userStore";

const UserButton = () => {
    const [showActions, setShowActions] = useState(false);
    const {setUser} = userStore(state => state);

    return <div className="relative">
        <button
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 hover:cursor-pointer
                rounded-lg transition-colors"
            onClick={() => {setShowActions(prev => !prev)}}
        >
            <CircleUserRound  />

        </button>
        {
            showActions && <div className="absolute right-2 bottom-[-120px]
            bg-white shadow p-4 rounded hover:cursor-pointer
            flex flex-col w-[140px] gap-2
            ">
                <span className="hover:text-red-600 px-2 rounded">Ayuda</span>
                <span className="hover:text-red-600 px-2 rounded">Settings</span>
                <span className="hover:text-red-600 px-2 rounded"
                      onClick={() => {
                          setUser(null);
                      }}
                >Logout</span>
            </div>
        }

    </div>
}

export default UserButton;