# Test settings


### Typescript test settings
There are two ways to make Mocha Test Explorer works with Hardhat typescript testing
```javascript
//1 . Add the following to vs-code settings.json
    "mochaExplorer.files": "test/**/*.{js,ts}",
    "mochaExplorer.require": "hardhat/register"
```
```javascript
//OR add .mocharc.json to root folder and add the following
{
  "require": "hardhat/register",
  "timeout": 40000,
  "_": [
    "test/**/*.ts"
  ]
}

```