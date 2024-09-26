import { app, BrowserWindow, ipcMain, desktopCapturer } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = true;
const url = isDev
  ? "http://localhost:3000"
  : `file://${path.join(__dirname, ".next", "server", "pages", "index.html")}`;

//
ipcMain.handle("get-sources", async (event, options) => {
  try {
    const sources = await desktopCapturer.getSources(options);
    return sources;
  } catch (error) {
    console.error("Error getting sources:", error);
    throw error; // 오류를 던짐
  }
});

// Electron 창 생성 함수
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  // Next.js 앱의 URL 로드

  win.loadURL(url); // Next.js 서버가 실행되는 주소
}

app.whenReady().then(createWindow);

// 모든 창이 닫히면 종료
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
  console.log("콘솔");
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
