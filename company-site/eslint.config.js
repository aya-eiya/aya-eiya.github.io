const eslintConfigPrettier = require('eslint-config-prettier')
const globals = require('globals')
const js = require('@eslint/js')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const typescriptEslint = require('typescript-eslint')
const eslintPluginImport = require('eslint-plugin-import')

module.exports = [
  {
    ignores: [
      '**/.next/**',
      '**/build/**',
      '**/coverage/**',
      '**/dist/**',
      '**/generated/**',
      '**/node_modules/**',
      '**/public/**',
      'eslint.config.js',
      'next-*.js',
      'next.*.js',
      'postcss.config.js',
      'tailwind.config.js',
    ],
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
      import: eslintPluginImport,
    },
    languageOptions: {
      parser: typescriptEslint.parser,

      parserOptions: {
        allowAutomaticSingleRunInference: true,
        cacheLifetime: {
          glob: 'Infinity',
        },
        project: ['tsconfig.json', 'tests/tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/prefer-interface': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
    },
  },
  js.configs.recommended,
  ...typescriptEslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
  {
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parser: typescriptEslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
]
