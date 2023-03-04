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
      '@styles': path.resolve(__dirname, './src/styles'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@services': path.resolve(__dirname, './src/services'),
      '@context': path.resolve(__dirname, './src/context'),
      '@moduleStyled': path.resolve(__dirname, './src/moduleStyled'),
      '@typesProyect': path.resolve(__dirname, './src/types')
    }
  }
})
