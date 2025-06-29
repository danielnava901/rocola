
export class AuthApi {
    async loginApi(username: string, password: string) : Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Error in server: not ok');
            }

            return await response.json();
        }catch (e: any) {
            throw new Error("Communication error")
        }

    }
}