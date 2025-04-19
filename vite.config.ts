import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@vercel/analytics/react', 'framer-motion', 'react-helmet-async'],
      output: {
        globals: {
          '@vercel/analytics/react': 'VercelAnalytics',
          'framer-motion': 'FramerMotion',
          'react-helmet-async': 'ReactHelmetAsync'
        }
      }
    }
  }
})
