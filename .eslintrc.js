module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 4],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "single" ],
    "semi": [ "error", "always"],
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
  },
  "plugins": ["import"],
  root: true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
};
