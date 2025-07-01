import { Song, Playlist } from '../types/music';

export const mockSongs: Song[] = [
    {
        id: '1',
        title: 'Bohemian Rhapsody',
        playlist_id: 1,
        artist: 'Queen',
        album: 'A Night at the Opera',
        duration: '5:55',
        albumArt: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: '2',
        title: 'Hotel California',
        playlist_id: 2,
        artist: 'Eagles',
        album: 'Hotel California',
        duration: '6:30',
        albumArt: 'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: '3',
        title: 'Stairway to Heaven',
        playlist_id: 1,
        artist: 'Led Zeppelin',
        album: 'Led Zeppelin IV',
        duration: '8:02',
        albumArt: 'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: '4',
        title: 'Sweet Child O\' Mine',
        playlist_id: 2,
        artist: 'Guns N\' Roses',
        album: 'Appetite for Destruction',
        duration: '5:03',
        albumArt: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: '5',
        title: 'Imagine',
        playlist_id: 1,
        artist: 'John Lennon',
        album: 'Imagine',
        duration: '3:07',
        albumArt: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: '6',
        title: 'Billie Jean',
        playlist_id: 2,
        artist: 'Michael Jackson',
        album: 'Thriller',
        duration: '4:54',
        albumArt: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
];

export const mockPlaylists: Playlist[] = [
    {
        id: '1',
        name: 'Rock Classics',
        songs: mockSongs.slice(0, 4),
        coverImage: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: '2',
        name: 'Favorites',
        songs: mockSongs.slice(2, 6),
        coverImage: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
];

