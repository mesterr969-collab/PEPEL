'use strict';
const { contextBridge, ipcRenderer } = require('electron');
// The official Rust+ login page posts a JSON auth result through this bridge after Steam redirects back.
// This isolated auth window gets no filesystem, shell, or Node access.
contextBridge.exposeInMainWorld('ReactNativeWebView', {
  postMessage: (message) => {
    const raw = typeof message === 'string' ? message : JSON.stringify(message ?? null);
    if (raw.length <= 12000) ipcRenderer.send('pepel:rustplus-auth-token', raw);
  }
});
