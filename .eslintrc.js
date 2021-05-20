module.exports = {
  extends: ['universe/web', 'react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  plugins: ['unused-imports', 'react-hooks'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'internal'],
        pathGroups: [
          {
            pattern: '{react}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@{{config/**,helpers/**,services/**,hooks/**},{hooks}}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@{api}/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
