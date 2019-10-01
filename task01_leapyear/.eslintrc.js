module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "smells"
    ],
    "rules": {
        "smells/no-switch": 1,
        "smells/no-complex-switch-case": 1,
        "smells/no-setinterval": 1,
        "smells/no-this-assign": 1
    }
};
