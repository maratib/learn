# Nuxt

### Create project 
```bash
npx nuxi@latest init my-app

# add typescript support
yarn add -D typescript vue-tsc

# add to script section of package.json
"typecheck": "vue-tsc --noEmit"
```

### First page
```javascript
// add index.vue to pages folder
change <NuxtWelcome /> to <NuxtPage />
```