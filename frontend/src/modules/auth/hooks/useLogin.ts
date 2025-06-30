import {useEffect, useState} from "react";
import loginCase from '../usecases/loginCase';
import {userStore} from "@/app/stores/userStore";
import type {InputValType} from "@/modules/auth/types/FormTypes";

const useLogin = () => {
    const {setUser} = userStore(state => state);
    const [loading, setLoading] = useState(false);

    // hooks handle what happend when an action occurs around the UI, but not
    // e.g Loading toggle, handle errors and shows them up in UI and update stores
    const doLogin = async (username: InputValType, password: InputValType) => {
        setLoading(true);
        try {
            const user = await loginCase(username, password);
            setUser(user);
            return true
        }catch (e: Error){
            console.log("Error::: ", e.message);
            return false
        }finally {
            setLoading(false);
        }
    }

    return {loading, doLogin}
}

export default useLogin;