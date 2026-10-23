'use strict';
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('pepel', {
  platform: process.platform,
  version: '2.4.7',
  launchGame: (address) => ipcRenderer.invoke('pepel:launch-game', address),
  openExternal: (url) => ipcRenderer.invoke('pepel:open-external', url),
  copy: (text) => ipcRenderer.invoke('pepel:copy', text),
  updateGetSettings: () => ipcRenderer.invoke('pepel:update-settings-get'),
  updateSaveSettings: (settings) => ipcRenderer.invoke('pepel:update-settings-save', settings),
  updateCheck: () => ipcRenderer.invoke('pepel:update-check'),
  updateDownload: () => ipcRenderer.invoke('pepel:update-download'),
  updateInstall: () => ipcRenderer.invoke('pepel:update-install'),
  updateGetStatus: () => ipcRenderer.invoke('pepel:update-status-get'),
  onUpdateStatus: (handler) => { const fn = (_event, data) => handler(data); ipcRenderer.on('pepel:update-status', fn); return () => ipcRenderer.removeListener('pepel:update-status', fn); },
  rustPlusStart: (config) => ipcRenderer.invoke('pepel:rustplus-start', config),
  rustPlusStop: () => ipcRenderer.invoke('pepel:rustplus-stop'),
  rustPlusGetMap: () => ipcRenderer.invoke('pepel:rustplus-map'),
  rustPlusTrackDevice: (device) => ipcRenderer.invoke('pepel:rustplus-track-device', device),
  rustPlusRemoveDevice: (entityId) => ipcRenderer.invoke('pepel:rustplus-remove-device', entityId),
  rustPlusAuthStart: () => ipcRenderer.invoke('pepel:rustplus-auth-start'),
  rustPlusAuthStatus: () => ipcRenderer.invoke('pepel:rustplus-auth-status'),
  rustPlusAuthRelisten: () => ipcRenderer.invoke('pepel:rustplus-auth-relisten'),
  onRustPlusAuthUpdate: (handler) => { const fn = (_event, data) => handler(data); ipcRenderer.on('pepel:rustplus-auth-update', fn); return () => ipcRenderer.removeListener('pepel:rustplus-auth-update', fn); },
  onRustPlusPairing: (handler) => { const fn = (_event, data) => handler(data); ipcRenderer.on('pepel:rustplus-pairing', fn); return () => ipcRenderer.removeListener('pepel:rustplus-pairing', fn); },
  onRustPlusDevicePaired: (handler) => { const fn = (_event, data) => handler(data); ipcRenderer.on('pepel:rustplus-device-paired', fn); return () => ipcRenderer.removeListener('pepel:rustplus-device-paired', fn); },
  onRustPlusAlarm: (handler) => { const fn = (_event, data) => handler(data); ipcRenderer.on('pepel:rustplus-alarm', fn); return () => ipcRenderer.removeListener('pepel:rustplus-alarm', fn); },
  onRustPlusDeviceList: (handler) => { const fn = (_event, data) => handler(data); ipcRenderer.on('pepel:rustplus-device-list', fn); return () => ipcRenderer.removeListener('pepel:rustplus-device-list', fn); },
  onRustPlusUpdate: (handler) => {
    const fn = (_event, data) => handler(data);
    ipcRenderer.on('pepel:rustplus-update', fn);
    return () => ipcRenderer.removeListener('pepel:rustplus-update', fn);
  }
});
