import { app, BrowserWindow, ipcMain, desktopCapturer } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // preload.js 파일을 사용하여 보안 설정
      contextIsolation: true, // 보안 설정
      enableRemoteModule: false, // 보안 설정
    },
  });

  win.loadURL("https://localhost:3000"); // Next.js 서버 URL
}
// IPC 통신 설정
ipcMain.handle("get-sources", async (event, options) => {
  try {
    const sources = await desktopCapturer.getSources(options);
    return sources;
  } catch (error) {
    console.error("Error getting sources: ", error);
    return [];
  }
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
