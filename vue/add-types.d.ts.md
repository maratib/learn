# Add additional types to d.ts

```javascript 
# Create file src/types.d.ts
and past the following (e.g addEventListener to window object)

interface Window {
  addEventListener(string, any, any);
}

declare var window: Window

```