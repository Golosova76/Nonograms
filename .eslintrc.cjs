module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist'],
  overrides: [
    // TypeScript Files
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', '@angular-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'eslint-config-airbnb-base',
        'plugin:prettier/recommended',
      ],
      rules: {
        // Ваши пользовательские правила для TypeScript
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            scss: 'never',
          },
        ],
        'comma-dangle': ['error', 'always-multiline'],
      },
    },
    // HTML Templates
    {
      files: ['**/*.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        // Ваши пользовательские правила для HTML
        '@angular-eslint/template/no-negated-async': 'error',
      },
    },
    // spec.ts
    {
      files: ['*.spec.ts'],
      env: {
        jasmine: true,
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
      node: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.html', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/prefer-default-export': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        scss: 'never',
      },
    ],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  },
};
