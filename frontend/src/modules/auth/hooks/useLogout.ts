import {userStore} from "@/app/stores/userStore";

const useLogout = () => {
    const {setUser} = userStore(state => state);
    setUser(null);
}

export default useLogout;