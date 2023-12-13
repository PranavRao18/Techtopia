// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       'swiper/react': 'swiper/react',
//       'swiper/swiper-bundle.min.css': 'swiper/swiper-bundle.min.css',
//     },
//   },
// });

 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})