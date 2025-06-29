import {AuthRepository} from "@/infrastructure/repositories/AuthRepository";
import type IAuthRepository from "../repositories/IAuthRepository";
import type {InputValType} from "@/modules/auth/types/FormTypes";


const authRepository : IAuthRepository = new AuthRepository();

// use cases handle their own action, them check for errors and what it is supposes to do
const loginCase = async (username: InputValType, password: InputValType) => {
    if(!!username.error || !!password.error) {
        throw new Error("Datos incorrectos")
    }

    return await authRepository.login(username.value, password.value)
}


export default loginCase;