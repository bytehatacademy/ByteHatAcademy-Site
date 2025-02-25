import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/courses', // Matches your repo name—good!
  optimizeDeps: {
    exclude: ['lucide-react'], // Fine for dev, no change needed
  },
  server: {
    port: 3000, // Works locally, no change needed
  },
  build: {
    outDir: 'dist', // Default, but explicitly set for clarity
    assetsDir: 'assets', // Default, ensures assets are bundled correctly
    sourcemap: false, // Disable sourcemaps for production (optional, saves space)
  },
});