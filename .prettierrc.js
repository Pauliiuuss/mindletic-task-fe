module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  singleQuote: true,
  semi: false,
  importOrder: [
    '<THIRD_PARTY_MODULES',
    '^@/components/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    'prettier-plugin-tailwindcss',
  ],
}
