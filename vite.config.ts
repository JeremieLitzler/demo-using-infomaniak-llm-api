import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.infomaniak.com/2/llm/701/chat/completions',
        changeOrigin: true, // Optional: Change origin header to match frontend
        secure: false, // Optional: Disable checks for https on target
      },
    },
  },
});
