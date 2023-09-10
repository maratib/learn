# Vue 3 Typescript

#### 1. Creating new project 
```bash
yarn create vite
```

### Adding alias
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

### 2. Adding TailwindCSS
```bash
# Add required dependencies
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio @headlessui/tailwindcss tailwindcss-debug-screens

# Create required config files
npx tailwindcss init -p
```
```javascript
// add or update the following in your tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // fontFamily: { headline: ["Oswald"] },
      colors: {
        bgBody: "#F3F5FD",
        primary: "#2960FF",
        gradient: "#4f71c6",
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
```
```css
/* add or update the following in your assets/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
