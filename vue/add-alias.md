# Adding alias

```bash
yarn add -D @types/node
```
```javascript
// add or update the following in your tsconfig.json
"baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
```
```javascript
// add or update the following in your vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  }
})
```


