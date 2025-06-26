import {AuthRepository} from "../../../infrastructure/repositories/AuthRepository";
import IAuthRepository from "../repositories/IAuthRepository";


const authRepository : IAuthRepository = new AuthRepository();

const loginCase = async (username: string, password: string) => {
    if(!username || !password) {
        alert("Datos incorrectos");
        return false;
    }

    return await authRepository.login(username, password);

}


export default loginCase;