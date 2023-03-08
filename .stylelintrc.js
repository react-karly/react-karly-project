module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'declaration-colon-newline-after': 'always-multi-line',
    // 정규식 참고: https://stylelint.io/user-guide/regex/#enforce-a-case
    'selector-class-pattern': '^[A-Z][a-zA-Z0-9]+$',
    'declaration-block-trailing-semicolon': [
      'always',
      {
        ignore: ['single-declaration'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['content-visibility'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
  ignoreFiles: ['build/**', 'coverage/**', 'dist/**', '**/*.js', '**/*.jsx'],
};
