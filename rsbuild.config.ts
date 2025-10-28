import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from 'path';


console.log('import.meta.env.PORT', import.meta.env.PORT);

export default defineConfig({
  output: {
    polyfill: 'usage',
  },
  server: {
    port: import.meta.env.PORT,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [pluginVue()],
});
