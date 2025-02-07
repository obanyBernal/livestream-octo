import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url';
import path from 'path';

// Configuración de __dirname para ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
})
