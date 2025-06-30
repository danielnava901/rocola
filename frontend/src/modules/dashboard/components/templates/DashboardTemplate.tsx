import {Outlet} from "react-router-dom";
import Header from "@/modules/dashboard/components/organisms/Header";
import LeftSide from "@/modules/dashboard/components/organisms/LeftSide";
import PlayingSongFooter from "@/modules/dashboard/components/organisms/PlayingSongFooter";

const DashboardTemplate = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <LeftSide />
                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 p-6 overflow-auto">
                        <Outlet />
                    </div>
                    <div className="w-80 p-6 border-l border-gray-200">
                        dashboard song already playing
                    </div>
                </div>
            </div>
            <PlayingSongFooter />
        </div>
    )
}

export default DashboardTemplate;