import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from "vite-plugin-minify";
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin(),
  ],
  server: {
    port: 3000,
  },
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('src/components')) {
            return 'components';
          }
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        ecma: 2020,
        module: true,
        toplevel: true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    },
  },
});
