module.exports = {
  "extends": [
    "airbnb-base",
    'plugin:vue/recommended',
  ],
  "rules": {
    "eqeqeq": "off",
    "no-new": "off",
    "comma-dangle": "off",
    "import/first": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "arrow-body-style": "off",
    "no-useless-escape": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "default-case": "off",
    "max-len": "off",
    "no-unused-expressions": ["error", { "allowTernary": true }]
  },
  "plugins": [
    "import",
    "html",
    "vue"
  ],
  "globals": {
    "fabric": true,
    "document": true
  }
};
