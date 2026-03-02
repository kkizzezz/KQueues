import {defineConfig} from 'vite';

export default defineConfig(({mode}) => {
  return {
    base: './',
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
