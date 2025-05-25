module.exports = {
    'env': {
        'browser': true,
        'es2022': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2022,
        'sourceType': 'module'
    },
    'globals': {
        'localStorage': 'readonly',
        'document': 'readonly',
        'window': 'readonly',
        'console': 'readonly'
    },
    'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': 'warn',
        'no-undef': 'error',
        'eqeqeq': 'error'
    }
};
