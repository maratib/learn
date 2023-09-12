# Adding TailwindCSS
```bash
# Add required dependencies
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio @headlessui/tailwindcss tailwindcss-debug-screens

# Create required config files
npx tailwindcss init
```

```javascript
// add or update the following in your tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
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
/* add or update the following in your assets/css/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```javascript
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

### Adding Headless UI
```bash
yarn add -D @headlessui/vue
```