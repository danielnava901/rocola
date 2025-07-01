export default class SongsApi {
    async getSongsByPlaylist(playlist: number | string) {
        try {

            const url = `http://localhost:3000/api/playlists${playlist ? `?playlist=${playlist}` : ''}`
            const response = await fetch(url, {
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