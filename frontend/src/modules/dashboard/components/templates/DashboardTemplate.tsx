import {Outlet} from "react-router-dom";
import UserButton from "@/modules/dashboard/components/molecules/UserButton";
import Header from "@/modules/dashboard/components/organisms/Header";

const DashboardTemplate = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
                    dashboard left
                </div>
                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 p-6 overflow-auto">
                        <Outlet />
                    </div>
                    <div className="w-80 p-6 border-l border-gray-200">
                        dashboard song already playing
                    </div>
                </div>
            </div>
            <div className="bg-white border-t border-gray-200 px-6 py-4">
                footer playing song
            </div>
        </div>
    )
}

export default DashboardTemplate;