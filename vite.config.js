import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import global from 'global'; // Ensure the global object is available

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window', // Use 'window' instead of Node.js' global
  },
  plugins: [react()],
});
