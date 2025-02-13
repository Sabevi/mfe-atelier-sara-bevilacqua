import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  server: {
    origin: 'http://localhost:3001',
    port: 3001,
  },
  base: 'http://localhost:3001',
  plugins: [
    react(),
    federation({
      name: 'header',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  build: {
    target: 'chrome89',
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
});
