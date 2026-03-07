import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Import plugin baru

export default defineConfig({
  // Hapus bagian integrations: [tailwind()] jika masih ada
  vite: {
    plugins: [tailwindcss()], // Pasang Tailwind sebagai plugin Vite
  },
});
