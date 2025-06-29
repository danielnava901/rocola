import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '@/modules/auth/pages/LoginPage';
import DashboardLayout from '@/modules/dashboard/components/templates/DashboardLayout';
import {ProtectedRoute} from "@/app/routes/ProtectedRoute";
import {AuthRoute} from "@/app/routes/AuthRoute";
import PlayListPage from "@/modules/dashboard/pages/PlayListPage";


const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthRoute />}>
                <Route path="login" element={<LoginPage />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="playlist" element={<PlayListPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);



export default AppRoutes;