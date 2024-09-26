import https from "https";
import fs from "fs";
import next from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, "./key.pem")), // 인증서 경로
  cert: fs.readFileSync(path.join(__dirname, "./cert.pem")), // 인증서 경로
};

nextApp.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on https://localhost:3000");
    });
});
