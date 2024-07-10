import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_APP_BASE_NAME,
  plugins: [react(), viteTsconfigPaths()],
  define: {
    global: 'window'
  },
  resolve: {
    alias: []
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000
  }
})
