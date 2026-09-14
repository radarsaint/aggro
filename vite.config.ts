import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow Cloudflare quick tunnels (and similar) so players can reach the app
    allowedHosts: true,
  },
})
