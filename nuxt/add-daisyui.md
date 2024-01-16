# Nuxt Tailwind, DaisyUI, Headless with AOS Starter

```bash
# Create new nuxt 3 project 
npx nuxi init nuxt-daisyui

```

## Add Tailwind with (color-mode, daisyui and nuxt-headless)
```bash
yarn add -D @nuxtjs/tailwindcss @nuxtjs/color-mode @tailwindcss/forms @tailwindcss/typography tailwindcss-debug-screens daisyui nuxt-headlessui

```

### Tailwind Config
```javascript
// add or update the following in your tailwind.config.ts

import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
    ],
    logs: false
  }, plugins: [
    "@tailwindcss/forms",
    '@tailwindcss/typography',
    require('daisyui'),
    require("tailwindcss-debug-screens"),
  ],

} satisfies Config

```

## Nuxt Config
```javascript

const isDev = process.env.NODE_ENV === 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // APP Config
  app: {
    head: {
      bodyAttrs: {
        class: isDev ? 'debug-screens' : ''
      }
    }
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-headlessui"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
  },
  colorMode: {
    // preference: 'system', // default value of $colorMode.preference
    dataValue: 'theme',
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  headlessui: {
    prefix: 'H'
  },

  runtimeConfig: {
    private: {
      cookieName: process.env.COOKIE_NAME || "__session",
    },
    public: {}
  },
})

```
### Add Theme Selector Dropdown
```javascript
// Add ~/components/UI/Theme.vue

<template>
  <ClientOnly>
    <select v-model="$colorMode.preference" class="select select-primary md:w-full md:max-w-xs">
      <option disabled selected>Select Theme</option>
      <option v-for="theme in themes" :value="theme" :key="theme">
        <span class="uppercase">{{ theme }}</span>
      </option>
    </select>
  </ClientOnly>
</template>

<script lang="ts" setup>
// const colorMode = useColorMode();
const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
]

</script>

<style></style>
```
## Add AOS
```bash
# Add aos 3 beta
yarn add aos@3.0.0-beta.6

yarn add -D @types/aos
```
### Add plugin 
```javascript
// Add ~/plugin/aos.ts

import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init(); // eslint-disable-line new-cap
  }
});

```
### Add AOS to config
```javascript
// Add to nuxt.config.ts

plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
  ],

```

