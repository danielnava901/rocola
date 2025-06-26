import PageTemplate from "../../../shared/components/templates/PageTemplate";
import logo from '../../../assets/images/rocola.png';
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <PageTemplate>
            <div className="h-screen flex">
                <div className="w-7/12 bg-white flex justify-center items-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="w-5/12 p-6">
                    <LoginForm />
                </div>
            </div>
        </PageTemplate>
    );
};

export default LoginPage;