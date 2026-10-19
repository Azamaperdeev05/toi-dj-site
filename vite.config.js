import { defineConfig } from 'vite';

export default defineConfig({
  // shaders (WebGPU) chunk ~2.5 MB: it loads lazily after the page, only on WebGPU browsers.
  build: { chunkSizeWarningLimit: 3000 },
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
  preview: {
    port: 3000,
    host: '127.0.0.1',
  }
});
