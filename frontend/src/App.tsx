import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './modules/auth/pages/LoginPage';
import DashboardPage from './modules/dashboard/pages/DashboardPage';


const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </BrowserRouter>
);



export default App;