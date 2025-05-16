import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^(React|StrictMode|App)$',
        args: 'after-used',
        ignoreRestSiblings: true
      }],
      'semi': ['error', 'never'],  // This enforces no semicolons
      'quotes': ['error', 'single'],
      'indent': ['error', 2]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]
