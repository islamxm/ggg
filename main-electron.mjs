import { app, BrowserWindow, shell, dialog } from 'electron';
import serve from 'electron-serve';
const loadWebApp = serve({ directory: 'dist' });

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    minWidth: 900, // Устанавливаем разумный минимум
    minHeight: 600,
    title: 'Goşun Gulluk',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      allowRunningInsecureContent: false,
      webSecurity: false,
      //   preload: path.join(__dirname, 'preload.js'), 
    },
  });

  if (app.isPackaged) {
    loadWebApp(win).then(() => {
      // Загрузка главной страницы
      win.loadURL('app://index.html');
    });
  }
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});