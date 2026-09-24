const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    title: "Proyecto Poesía",
    autoHideMenuBar: true, // Oculta la barra de menú superior de ventana
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Carga tu archivo index.html principal
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
