// build.ts

import { defineConfig } from 'vite';
import { resolve } from 'path';

// Build script for Vite client and server-side code bundling
export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        client: resolve(__dirname, 'src/client/main.ts'),
        server: resolve(__dirname, 'src/server/main.ts'),
      },
    },
  },
});
