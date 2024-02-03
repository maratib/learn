# Watcher for hardhat compilation

### Install dependency
```bash
npm install hardhat-watcher
```

### Update `hardhat.config.ts`
```javascript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-watcher' //Added for watcher

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  watcher: { // Added for watcher
    compilation: {
      tasks: ['compile'],
      files: ['./contracts'],
      ignoredFiles: ['**/.vscode'],
      verbose: true,
      clearOnStart: true,
      start: 'echo Running my compilation task now..',
    },
    ci: {
      tasks: [
        'clean',
        { command: 'compile', params: { quiet: true } },
        // { command: 'test', params: { noCompile: true, testFiles: ['testfile.ts'] } },
      ],
    },
  }


};

export default config;
```


### Reference 
[hardhat-watcher](https://github.com/xanderdeseyn/hardhat-watcher)