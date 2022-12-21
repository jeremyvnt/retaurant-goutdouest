module.exports = {
  '*.{ts,tsx,js,jsx,html,md,css,json}': 'prettier --write',
  '*.{ts,tsx,js,jsx,html,json}': 'eslint',
  'package.json': 'sort-package-json',
  'yarn.lock': 'yarn-deduplicate',
};
