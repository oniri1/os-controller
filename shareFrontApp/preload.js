// preload.js
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  getSources: async (options) => {
    return await ipcRenderer.invoke("get-sources", options);
  },
});
