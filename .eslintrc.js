module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        /* --- OVERWRITES --- */
        "@typescript-eslint/no-empty-function": "off",
        /* ------------------ */
        /* --- TEMP --- */
        "react/prop-types": "off",
        /* ------------ */
        "linebreak-style": ["error", "unix"],
        "no-constructor-return": "error",
        "no-duplicate-imports": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unmodified-loop-condition": "warn",
        "no-use-before-define": "error",
        // "camelcase": "error",
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": "error",
        "eqeqeq": ["error", "always"],
        "id-length": ["error", {max: 32, min: 3, "exceptions": ["x", "i", "e", "w", "h", "id"]}], // 
        "max-depth": ["error", 4],
        "max-lines": ["error", 300],
        "max-nested-callbacks": ["error", 3],
        "max-params": ["error", 5],
        // "multiline-comment-style": ["error", "starred-block"],
        "no-alert": "error",
        "no-bitwise": "error",
        "no-case-declarations": "error",
        "no-else-return": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-boolean-cast": ["error", {"enforceForLogicalOperands": true}],
        "no-extra-label": "error",
        "no-extra-semi": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-mixed-operators": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-nested-ternary": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": ["error", {"allowForLoopAfterthoughts": true}],
        "no-proto": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": process.env.NODE_ENV === 'production'
            ? 'error'
            : 'warn',
        "no-with": "error",
        "one-var": ["error", "never"],
        "operator-assignment": ["error", "always"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error", // additional options
        "prefer-named-capture-group": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        // prefer-regex-literals
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "quote-props": ["error", "consistent"],
        "radix": ["error", "always"],
        "require-await": "error",
        // "sort-imports": "error", TODO: fix this
        // "sort-keys": "error",
        "yoda": ["error", "never", {"exceptRange": true}],
        "array-bracket-newline": ["error", {"minItems": 3}],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "array-element-newline": ["error", {"multiline": true, "minItems": 3}],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": ["error", "stroustrup", {"allowSingleLine": true}],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "dot-location": ["error", "property"],
        "func-call-spacing": ["error", "never"],
        "function-paren-newline": ["error", {"minItems": 3}],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4],
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": ["error", {"before": true, "after": true}],
        "lines-around-comment": ["error", {"beforeBlockComment": false}],
        "lines-between-class-members": ["error", "always"],
        "max-len": [
            "error",
            {"code": 120, "ignoreStrings": true, "ignoreUrls": true}
        ],
        // https://eslint.org/docs/rules/multiline-ternary,
        "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 2}],
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", {"max": 3}],
        "nonblock-statement-body-position": ["error", "beside"],
        // "object-curly-newline": ["error", {"minProperties": 3}],
        "object-curly-spacing": [
            "error", "always",
            {"arraysInObjects": true, "objectsInObjects": true}
        ],
        // https://eslint.org/docs/rules/object-property-newline
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["error", "never"],
        // possibly configure further: https://eslint.org/docs/rules/padding-line-between-statements
        "padding-line-between-statements": [
            "error",
            {blankLine: "always", prev: "*", next: "return"}
        ],
        "quotes": [
            "error",
            "double",
            // { "avoidEscape": true }, 
            // { "allowTemplateLiterals": true }
        ],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": ["error", {"before": false}],
        "semi-style": ["error", "last"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "always", {"exceptions": ["empty"]}], // https://eslint.org/docs/rules/space-in-parens
        "switch-colon-spacing": ["error", {"after": true, "before": false}],
        "template-curly-spacing": ["error", "always"],
        "template-tag-spacing": "error",
    }
}
