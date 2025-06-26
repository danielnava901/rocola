export default interface IAuthRepository {
    login: (username: string, password: string) => Promise<any>,
    logout: () => void
}

