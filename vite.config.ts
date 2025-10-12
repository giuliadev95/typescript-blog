import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    mdx(),
    tailwindcss(),
    require('@tailwindcss/typography'),
  ]
});
