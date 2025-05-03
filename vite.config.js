
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/Portfolio_v1.0',
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: [
      '@react-three/drei',
      '@react-three/fiber',
      'three'
    ]
  }, 
})