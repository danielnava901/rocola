// project-electron/backend/src/index.ts
import express from 'express';
import cors from 'cors';
import {mockPlaylists} from "./dataset/mockData";


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

app.get('/api/playlists', (_, res) => {
    res.status(201).json({
        data: {
            playlists: mockPlaylists
        }
    });
});

app.listen(PORT, () => {
    console.log(`API listening at http://localhost:${PORT}`);
});
