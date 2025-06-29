import {userStore} from "@/app/stores/userStore";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = userStore(state => state);

    if(!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return children;
}