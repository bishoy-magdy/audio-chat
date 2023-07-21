module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'standard-with-typescript',
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname

    },
    rules: {
        'max-len': 'off',
        indent: ['error', 4],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        'require-jsdoc': 'off',
        eqeqeq: ['error', 'always'],
        quotes: ['error', 'single'],
        semi: [2, 'always'],
        'linebreak-style': 0
    }

};
