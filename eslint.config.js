export default [
    {
        "languageOptions": {
            "ecmaVersion": 2022,
            "sourceType": "module",
            "globals": {
                "localStorage": "readonly",
                "document": "readonly",
                "window": "readonly",
                "console": "readonly",
                "habits": "writable"
            }
        },
        "rules": {
            "indent": ["error", 4],
            "linebreak-style": ["error", "unix"],
            "quotes": ["error", "single"],
            "semi": ["error", "always"],
            "no-unused-vars": "warn",
            "no-undef": "error",
            "eqeqeq": "error",
            "no-console": "warn"
        }
    }
];
