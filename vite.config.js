import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define path aliases here
const aliases = {
  '@components': '/src/components',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
