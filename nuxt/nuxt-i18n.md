# Nuxt i18n support

```bash
yarn add -D @nuxtjs/i18n@next
```

```javascript
// add the module to nuxt.config.ts
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'de',
        name: 'Deutsche',
        file: 'de-DE.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
  },
  
```