import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      name: 'CompoundInterestCalculator',
      fileName: (format) => `compound-interest-calculator.${format}.js`
    },
    rollupOptions: {
      // Externalizamos dependencias que no deben estar en el bundle
      external: ['react', 'react-dom'],
      output: {
        // Proporciona variables globales para usar en el build UMD
        // para dependencias externalizadas
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
