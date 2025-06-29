import {PlayListRespository} from "@/infrastructure/repositories/PlayListRespository";
import type IPlayListRepository from "../repositories/IPlayListRepository";

const playListsRepository: IPlayListRepository = new PlayListRespository();
const getPlayListCase = async () : Promise<any[]> => {
    const resp = await playListsRepository.getPlayLists();

    return resp;
}

export default getPlayListCase;