module.exports = {
    '*.{ts,tsx,js,jsx,html,md,css,json}': [
        'eslint',
        'prettier --write'
    ],
    'package.json': 'sort-package-json',
    'yarn.lock': 'yarn-deduplicate',
};
