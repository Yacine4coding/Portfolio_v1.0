
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    force: true, // <--- force re-optimization
    include: [
      '@react-three/drei',
      '@react-three/fiber',
      'three'
    ]
  },
  server: {
    fs: {
      strict: false
    }
  },
  ssr: {
    noExternal: ['three', '@react-three/fiber', '@react-three/drei']
  }  
})