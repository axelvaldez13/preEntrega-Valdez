import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@sharedComponents': path.resolve(__dirname, './src/sharedComponents'),
      '@utilities': path.resolve(__dirname, './src/utilities'),
      '@services': path.resolve(__dirname, './src/services'),
      '@typesProyect': path.resolve(__dirname, './src/types')
    }
  }
})
