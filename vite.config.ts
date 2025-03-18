import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-React/', // Add this line, replace 'your-repo-name' with your actual repo name
})
