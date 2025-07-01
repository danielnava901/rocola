import {PlayListRespository} from "@/infrastructure/repositories/PlayListRespository";
import type IPlayListRepository from "../repositories/IPlayListRepository";

const playListsRepository: IPlayListRepository = new PlayListRespository();
const getPlayListCase = async () : Promise<any[]> => {
    return await playListsRepository.getPlayLists();
}

export default getPlayListCase;