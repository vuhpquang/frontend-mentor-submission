module.exports = {
  env: {
    'jest/globals': true,
  },
  parser: '@babel/eslint-parser',
  root: true,
  extends: [
    '@react-native-community',
    // 'eslint:recommended',
    // 'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['jest'],
  rules: {
    // semi: ['error', 'never'],
    curly: ['off', 'multi'],
    'react-hooks/exhaustive-deps': 'off', // added 'react-hooks/exhaustive-deps'
    'react-native/no-inline-styles': 'off',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    // 'no-unused-vars': [2, { argsIgnorePattern: 'React' }],
    'no-console': ['warn', { allow: ['error', 'debug'] }],
    // 'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/imports-first': 2,
    'import/no-duplicates': 2,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
        ] /* builtin & external are mingled */,
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          // {
          //   pattern: 'src/contexts/**',
          //   group: 'internal',
          //   position: 'after',
          // },
          // {
          //   pattern: 'src/**',
          //   group: 'internal',
          //   position: 'before',
          // },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: false /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    'import/ignore': ['react-native'],
  },
};
