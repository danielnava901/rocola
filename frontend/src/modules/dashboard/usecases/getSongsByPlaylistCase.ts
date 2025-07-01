import type ISongsRepository from "@/modules/dashboard/repositories/ISongsRepository";
import SongsRepository from "@/infrastructure/repositories/SongsRepository";

const songsRepository : ISongsRepository = new SongsRepository();

const getSongsByPlaylistCase = async (playlist: number | string) => {
    return await songsRepository.getSongsByPlayList(playlist);
}

export default getSongsByPlaylistCase;