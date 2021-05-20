module.exports = {
  extends: ['universe/shared/typescript-analysis', './.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}
