import {userStore} from "@/app/store/userStore";


const useUser = () => {
    const user = userStore((state) => state.user);

    return {
        user,
        isAuthenticated: !!user,
    };

}

export default useUser;