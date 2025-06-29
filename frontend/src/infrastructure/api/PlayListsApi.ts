export default class PlayListsApi{

    async getPlayLists(): Promise<any> {
        try {
            const response = await fetch('http://localhost:3000/api/playlists', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error in server: not ok Playlist');
            }

            return await response.json();
        }catch (e: any) {
            throw new Error("Communication error Playlist ")
        }
    }
}