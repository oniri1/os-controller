import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = true;
const url = isDev
  ? "http://localhost:3000"
  : `file://${path.join(__dirname, ".next", "server", "pages", "index.html")}`;

// Electron 창 생성 함수
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 필요 시, node 통합 여부 설정
      contextIsolation: false,
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
