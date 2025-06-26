import {useEffect, useState} from "react";
import loginCase from '../usecases/loginCase';
import {userStore} from "../../../app/store/userStore";

const useLogin = () => {
    const {setUser} = userStore(state => state);
    const [loading, setLoading] = useState(false);

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const user = await loginCase(email, password);
            setUser(user);
        }catch (e: Error) {
            console.error(e.message);
        }finally {
            setLoading(false);
        }
    }

    return {loading, login}
}

export default useLogin;