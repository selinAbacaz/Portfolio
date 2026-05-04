import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contentCollections from '@content-collections/vite'
import { cloudflare } from '@cloudflare/vite-plugin'


const config = defineConfig({
  plugins: [
    devtools(),
    contentCollections(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }), 
    viteReact(),
    
  ],
  base: "/Portfolio/"
})

export default config

// vite.config.ts

