# Electron React

## Setup
```bash
# Create 
yarn create @quick-start/electron

# Add tailwindcss and daisyUI
yarn add -D tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio  tailwindcss-debug-screens daisyui@latest 

# Create required configuration files for tailwindcss
npx tailwindcss init -p

```
## Update tailwindcss.config.ts
```javascript
/// add or update the following in your tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    debugScreens: {
      position: ['bottom', 'right']
    }
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
    require('daisyui')
  ]
}

```
## Update index.css
```css
/* add or update the following in your assets/style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
