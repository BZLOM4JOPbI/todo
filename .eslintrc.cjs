/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        "indent": [ "error", 4, ],
        "comma-dangle": [
            "error", 
            {
                "arrays": "always",
                "objects": "always",
                "imports": "always",
                "exports": "always",
                "functions": "never",
            },
        ],
        "object-curly-spacing" : [
            "error",
            "always",
            {
                "arraysInObjects" : true,
                "objectsInObjects" : true,
            },
        ],
        "array-bracket-spacing" : [
            "error",
            "always",
            {
                "singleValue": true,
                "objectsInArrays" : true,
                "arraysInArrays" : true,
            },
        ],
        "comma-spacing" : [
            "error",
            {
                "before": false,
                "after": true,
            },
        ],
        "space-in-parens": [ "error", "never", ],
        "semi": [ "error", "never", ],
    },
}
