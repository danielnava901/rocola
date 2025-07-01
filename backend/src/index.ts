// project-electron/backend/src/index.ts
import express from 'express';
import cors from 'cors';
import {mockPlaylists, mockSongs} from "./dataset/mockData";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_, res) => {
    res.json({ status: 'Backend is running' });
});

app.post('/api/login', (_, res) => {
    res.status(201).json({
        data: {
            user: {id: 1, name: "DanielN"}
        }
    });
});

app.get('/api/playlists', (req, res) => {
    const playlist = req.query?.playlist || -1;

    let playlists = mockPlaylists;
    if(+playlist > 0) {
        playlists = playlists.filter(_playlist => +_playlist.id === +playlist)
    }

    res.status(201).json({
        data: {
            playlists: playlists
        }
    });
});

app.get('/api/songs', (req, res) => {
    const playlist = req.query?.playlist || -1;

    let songs = mockSongs;
    if(+playlist > 0) {
        songs = songs.filter(song => +song.playlist_id === +playlist)
    }
    res.status(201).json({
        data: {
            songs: songs
        }
    })
})

app.listen(PORT, () => {
    console.log(`API listening at http://localhost:${PORT}`);
});
