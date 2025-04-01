import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/test/',
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
  },
  
});
