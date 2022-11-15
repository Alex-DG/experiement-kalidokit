import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

const extensions = ['**/*.glb', '**/*.fbx', '**/*.gltf', '**/*.png', '**/*.jpg']

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    https: true,
  },
  server: {
    https: true,
  },
  plugins: [basicSsl()],
  assetsInclude: extensions,
})
