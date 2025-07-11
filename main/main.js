// main/main.js
require('dotenv').config();
const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    const dev = process.env.NODE_ENV === 'development';
    console.log({dev});

    if (dev) {
        win.loadURL('http://localhost:5173');
        //win.webContents.openDevTools();
    } else {
        win.loadFile(path.join(__dirname, '../frontend/dist/index.html'));
    }
}

app.whenReady().then(() => {
    const backend = spawn('npm', ['run', 'dev'], {
        cwd: path.join(__dirname, '../backend'),
        shell: true,
    });

    backend.stdout.on('data', (data) => console.log(`[backend] ${data}`));
    backend.stderr.on('data', (data) => console.error(`[backend] ${data}`));

    createWindow();
});
