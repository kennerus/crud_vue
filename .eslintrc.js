module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    "vue/html-indent": ["error", 2, {
      "attribute": 3,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": ['script']
    }],
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 0,
      "ignores": ['script']
    }],
    'vue/html-self-closing': ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
    }

    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
