import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: "https://fakestoreapi.com/",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   }
    port: 5000
  },
}
)