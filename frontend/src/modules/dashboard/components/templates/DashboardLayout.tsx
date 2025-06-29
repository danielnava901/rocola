import DashboardTemplate from "@/modules/dashboard/components/templates/DashboardTemplate";
import {Outlet} from "react-router-dom";
import {ProtectedRoute} from "@/app/routes/ProtectedRoute";

const DashboardLayout = () => {
    return <ProtectedRoute>
        <DashboardTemplate>
            <Outlet />
        </DashboardTemplate>
    </ProtectedRoute>
};

export default DashboardLayout;