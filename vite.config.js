import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'


/* Serve per utilizzare file .svg come componente React in Vite */
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ]
})