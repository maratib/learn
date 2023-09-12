# TailwindCSS Plugins

### 1. Line Clamp
[link](https://tailwindcss.com/docs/line-clamp)  
```require("@tailwindcss/line-clamp"),```  
Now builtin TailwindCSS utility since version 3.3.3, `so you don't need to add it`.  

Use the `line-clamp-*` utilities to truncate a block of text after a specific number of lines.

```html
article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3 lg:line-clamp-none">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
  <div>
    <img src="..." />
    Lindsay Walton
  </div>
</article>
```
### 2. Aspect Ratio
Plugin : `@tailwindcss/aspect-ratio`  
`aspect-auto`, `aspect-square`, `aspect-video`   
Use the `aspect-{ratio}` utilities to set the desired aspect ratio of an element.  

```html
<iframe class="w-full aspect-video ..." src="https://www.youtube.com/..."></iframe>
```

### 3. Forms
[link](https://github.com/tailwindlabs/tailwindcss-forms)  

Plugin : `@tailwindcss/forms`  

A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities

```html
<input type="email" class="form-input px-4 py-3 rounded-full">

<select class="form-select px-4 py-3 rounded-full">
  <!-- ... -->
</select>

<input type="checkbox" class="form-checkbox rounded text-pink-500" />
```

### 4. Typography
[link](https://tailwindcss.com/docs/typography-plugin)  

Plugin : `@tailwindcss/typography`  

A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities

```html
<article class="prose lg:prose-xl">
  {{ markdown }}
</article>
```

### 5. Debug Screens 
[link](https://github.com/jorenvanhee/tailwindcss-debug-screens)  

Plugin : `tailwindcss-debug-screens`  

Use to show the current screen size
```javascript
// add this to your tailwindcss.config.js
 theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
``` 
```html
<body class="debug-screens">
```

