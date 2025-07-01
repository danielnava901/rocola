export default interface ISongsRepository {
    getSongsByPlayList: (playlist: number | string) => Promise<any>
}
