import {userStore} from "@/app/stores/userStore";
import {Navigate, Outlet} from "react-router-dom";

export const AuthRoute = ({children}) => {
    const {isAuthenticated} = userStore(state => state);

    if(isAuthenticated) {
        return <Navigate to="/dashboard/playlist" replace />
    }
    return <Navigate to="/login" replace />;
}