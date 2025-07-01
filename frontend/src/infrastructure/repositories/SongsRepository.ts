import type ISongsRepository from "@/modules/dashboard/repositories/ISongsRepository";
import SongsApi from "@/infrastructure/api/SongsApi";

const songApi = new SongsApi();

export default class SongsRepository implements ISongsRepository {
    async getSongsByPlayList(playlist: number | string): Promise<any> {
        const songsResponse = await songApi.getSongsByPlaylist(playlist);
        console.log({songsResponse});
        const {data: {playlists}} = songsResponse;

        return playlists;
    }
}