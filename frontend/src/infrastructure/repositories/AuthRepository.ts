import {AuthApi} from "../api/AuthApi";
import type IAuthRepository from "@/modules/auth/repositories/IAuthRepository";

const authApi = new AuthApi();
export class AuthRepository implements IAuthRepository{

    async login(username: string, password: string): Promise<any> {
        const userResponse =  await authApi.loginApi(username, password);
        const {data: {user}} = userResponse;
        return user;
    }

    logout(): void {
    }

}