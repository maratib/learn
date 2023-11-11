# Add additional types to d.ts

### Create file `src/types.d.ts`
and past the following (e.g addEventListener to window object)


```javascript 
interface Window {
  addEventListener(string, any, any);
}

declare var window: Window

```
## other samples
```javascript
import { SomeObj, Versions } from "./electron/preload/pre-types";

declare global {
  declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
  declare const MAIN_WINDOW_VITE_NAME: string;
  const versions: typeof Versions
  const someObj: typeof SomeObj

  // interface Window { versions: typeof Versions }
```