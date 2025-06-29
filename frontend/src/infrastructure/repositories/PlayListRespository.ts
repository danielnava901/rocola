import PlaylistsApi from "../api/PlayListsApi";
import type IPlayListRepository from "@/modules/dashboard/repositories/IPlayListRepository";

const playListsApi = new PlaylistsApi();

export class PlayListRespository implements IPlayListRepository {
    async getPlayLists(): Promise<any> {
        const playListsResponse = await playListsApi.getPlayLists();

        const {data: {playlists}} = playListsResponse;
        return playlists;
    }

}