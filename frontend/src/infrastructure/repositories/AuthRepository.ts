import {AuthApi} from "../api/AuthApi";
import IAuthRepository from "../../modules/auth/repositories/IAuthRepository";

const authApi = new AuthApi();

export class AuthRepository implements IAuthRepository{

    async login(username: string, password: string): Promise<any> {
        const userResponse = await authApi.loginApi(username, password);
        console.log({userResponse});

        return userResponse;
    }

    logout(): void {
    }

}