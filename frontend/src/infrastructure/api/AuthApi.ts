
export class AuthApi {
    async loginApi(username: string, password: string) : Promise<any> {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to loginCase');
        }

        return await response.json();
    }
}