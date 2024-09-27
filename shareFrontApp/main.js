import {
  app,
  BrowserWindow,
  ipcMain,
  desktopCapturer,
  session,
} from "electron";

function createWindow() {
  const mainWindow = new BrowserWindow();

  session.defaultSession.setDisplayMediaRequestHandler(
    (request, callback) => {
      desktopCapturer.getSources({ types: ["screen"] }).then((sources) => {
        // Grant access to the first screen found.
        callback({ video: sources[0], audio: "loopback" });
      });
    },
    { useSystemPicker: true }
  );

  mainWindow.loadURL("http://localhost:3000"); // Next.js 서버 URL
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
