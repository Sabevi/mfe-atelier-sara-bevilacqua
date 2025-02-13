import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  server: {
    origin: 'http://localhost:3000',
    port: 3000,
  },
  base: 'http://localhost:3000',
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        header: {
          type: 'module',
          name: 'header',
          entry: 'http://localhost:3001/remoteEntry.js',
        },
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  build: {
    target: 'chrome89',
  },
});
