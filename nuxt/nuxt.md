# Nuxt

### Create project 
```bash
npx nuxi@latest init my-app

# run typecheck support
npx nuxi@latest typecheck

# or add typescript typecheck support locally
yarn add -D typescript vue-tsc

# add to script section of package.json
"typecheck": "vue-tsc --noEmit"


```

### First page
```javascript
// add index.vue to pages folder
// change <NuxtWelcome /> to <NuxtPage />
```