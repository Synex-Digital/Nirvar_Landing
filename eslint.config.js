module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',                    // Basic ESLint recommended rules
    'plugin:react/recommended',              // React specific rules
    'plugin:react-hooks/recommended',        // React hooks specific rules
    'plugin:jsx-a11y/recommended',           // Accessibility rules for JSX
    'plugin:import/errors',                  // Import/export syntax rules
    'plugin:import/warnings',
    'plugin:import/typescript',              // Import/export rules for TypeScript
    'plugin:prettier/recommended',           // Integrates Prettier with ESLint
    'prettier',                              // Disables ESLint rules that might conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: 12,                         // ES2021 syntax support
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,                             // Enable JSX
    },
  },
  parser: '@typescript-eslint/parser',       // Parses TypeScript files
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    '@typescript-eslint',                    // Adds TypeScript linting rules
    'prettier',                              // Integrates Prettier
  ],
  settings: {
    react: {
      version: 'detect',                     // Detect React version automatically
    },
  },
  rules: {
    // Code quality rules
    'no-unused-vars': 'warn',                // Warns on unused variables
    'no-console': 'warn',                    // Warns on console.log usage
    'react/prop-types': 'off',               // Disable prop-types since TypeScript is used

    // React specific rules
    'react/jsx-uses-react': 'off',           // Not needed for React 17+ (automatic JSX transform)
    'react/react-in-jsx-scope': 'off',       // Not needed for React 17+ (automatic JSX transform)

    // Import rules
    'import/order': ['warn', {               // Organize imports
      groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
    }],

    // Accessibility rules
    'jsx-a11y/no-onchange': 'off',           // Disable specific a11y rule if needed

    // Prettier integration
    'prettier/prettier': ['warn', {
      singleQuote: true,                     // Use single quotes
      trailingComma: 'es5',                  // Add trailing commas
      endOfLine: 'auto',                     // Automatically determine line endings
    }],
  },
};
