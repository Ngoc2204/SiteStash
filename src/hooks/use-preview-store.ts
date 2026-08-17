import { create } from "zustand";

export type DeviceType = "desktop" | "tablet" | "mobile";

interface PreviewState {
  device: DeviceType;
  zoom: number;
  isQrModalOpen: boolean;
  isOrderModalOpen: boolean;
  iframeKey: number;
  setDevice: (device: DeviceType) => void;
  setZoom: (zoom: number) => void;
  setQrModalOpen: (open: boolean) => void;
  setOrderModalOpen: (open: boolean) => void;
  reloadIframe: () => void;
}

export const usePreviewStore = create<PreviewState>((set) => ({
  device: "desktop",
  zoom: 100,
  isQrModalOpen: false,
  isOrderModalOpen: false,
  iframeKey: 0,
  setDevice: (device) => set({ device }),
  setZoom: (zoom) => set({ zoom }),
  setQrModalOpen: (isQrModalOpen) => set({ isQrModalOpen }),
  setOrderModalOpen: (isOrderModalOpen) => set({ isOrderModalOpen }),
  reloadIframe: () => set((state) => ({ iframeKey: state.iframeKey + 1 })),
}));
