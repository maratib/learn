# Hardhat

## Install
```bash 
# Install hardhat locally 
npm install --global hardhat-shorthand

AVAILABLE TASKS:

  check              	Check whatever you need
  clean              	Clears the cache and deletes all artifacts
  compile            	Compiles the entire project, building all artifacts
  console            	Opens a hardhat console
  coverage           	Generates a code coverage report for tests
  flatten            	Flattens and prints contracts and their dependencies. If no file is passed, all the contracts in the project will be flattened.
  gas-reporter:merge 	
  help               	Prints this message
  node               	Starts a JSON-RPC server on top of Hardhat Network
  run                	Runs a user-defined script after compiling the project
  test               	Runs mocha tests
  verify             	Verifies a contract on Etherscan or Sourcify


AVAILABLE TASK SCOPES:

  ignition           	Deploy your smart contracts using Hardhat Ignition
  vars               	Manage your configuration variables

To get help for a specific task run: npx hardhat help [SCOPE] <TASK>
```

## Test
```javascript
//1 . Add the following to vs-code settings.json
    "mochaExplorer.files": "test/**/*.{js,ts}",
    "mochaExplorer.require": "hardhat/register"
```

