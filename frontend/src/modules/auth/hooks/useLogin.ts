import {useEffect, useState} from "react";
import loginCase from '../usecases/loginCase';
import {userStore} from "@/app/store/userStore";

const useLogin = () => {
    const {setUser} = userStore(state => state);
    const [loading, setLoading] = useState(false);

    const doLogin = async (email: string, password: string) => {
        setLoading(true);
        try {
            const user = await loginCase(email, password);
            setUser(user);
        }catch (e: any) {
            console.error(e.message);
        }finally {
            setLoading(false);
        }
    }

    return {loading, doLogin}
}

export default useLogin;