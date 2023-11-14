module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // TypeScript 파일 확장자 추가
      parser: '@typescript-eslint/parser', // TypeScript parser 사용
      extends: [
        'plugin:@typescript-eslint/recommended', // TypeScript 규칙 사용
        // 'prettier/@typescript-eslint', // TypeScript와 Prettier 통합
        'prettier',
      ],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
          2,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ], // 타입스크립트 파일 확장자 추가
        'no-var': 'error',
        'no-multiple-empty-lines': 'error',
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        'import/no-unresolved': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
