import {mockSongs} from "../dataset/mockData";

export type Song = {
    id: string,
    title: string,
    playlist_id: string | number,
    artist: string,
    album: string,
    duration: string,
    albumArt: string
}

export type Playlist = {
    id: string,
    name: string,
    songs: Song[],
    coverImage: string
}