// electron.d.ts
import { DesktopCapturerSource } from "electron";

declare global {
  interface Window {
    electron: {
      getSources: (
        options: Electron.SourcesOptions
      ) => Promise<DesktopCapturerSource[]>;
    };
  }
}
