import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



// export default defineConfig({
//   server: {
//     port: 5173,  // Default port for Vite
//   },
//   plugins: [react()],
// });