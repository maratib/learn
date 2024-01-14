# Add Nuxt UI

```bash
# Add NuxtUI dependencies
yarn add @nuxt/ui
```

### nuxt.config.ts
```javascript
// Add to nuxt.config.ts

modules: ['@nuxt/ui'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
  },
```

### tailwind.config.ts

```javascript
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  },
  plugins: [
  ]
}
```

### tailwind.css
```css
/* Add ~/assets/css/tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
