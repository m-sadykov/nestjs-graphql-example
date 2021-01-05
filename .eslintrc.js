module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
		"plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': [ "warn", { overrides: { constructors: 'no-public' } } ],
    'quotes': ['warn','double'],
    'indent': ['warn', 4],
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/semi": ["error"],
    "max-len": ["error", { "code": 100, "comments": 140, "ignoreUrls": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true, "ignoreStrings": true }],
    "eol-last": ["error", "always"]
  },
};
