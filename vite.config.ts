import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./dataSCSS/color";
        @import "./dataSCSS/fonts";
        @import "./dataSCSS/mixin";
        `,
      },
    },
  },
  base: '/pasha-test-spa-react',
});
