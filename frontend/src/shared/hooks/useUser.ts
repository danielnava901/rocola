import {userStore} from "../../app/store/userStore";


const useUser = () => {
    const user = userStore((state) => state.user);
    const login = userStore((state) => state.login);
    const logout = userStore((state) => state.logout);

    return {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };

}

export default useUser;