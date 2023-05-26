module.exports = {
    env: {
        browser: true, // расширяет глобальные переменные браузера
        es2021: true, // включает все новые возможности ES2021
        jest: true, // включает все возможности для тестирования с помощью Jest
    },
    extends: [
        'plugin:react/recommended', // использует рекомендации по написанию кода для React
        'airbnb', // использует рекомендации по написанию кода от Airbnb
        'plugin:i18next/recommended', // использует рекомендации по написанию кода для i18next
    ],
    parser: '@typescript-eslint/parser', // определяет ESLint как парсер для TypeScript
    parserOptions: { // определяет версию ECMAScript
        ecmaFeatures: { // использует возможности JSX
            jsx: true, //
        },
        ecmaVersion: 'latest', // использует последнюю версию ECMAScript
        sourceType: 'module', // использует возможности ES модулей
    },
    plugins: [ // подключает плагины
        'react', // плагин для React
        '@typescript-eslint', // плагин для TypeScript
        'i18next', // плагин для i18next
    ],
    rules: { // правила для ESLint
        'react/jsx-indent': [2, 4], // отступы в JSX
        'react/jsx-indent-props': [2, 4], // отступы в JSX
        indent: [2, 4], // отступы
        'react/jsx-filename-extension': [ // разрешает использовать JSX в файлах с расширением .js
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off', // разрешает импортить модули без указания расширения
        'import/prefer-default-export': 'off', // разрешает экспортировать только по умолчанию
        'no-unused-vars': 'warn', // выводит ворнинги на неиспользуемые переменные
        'react/require-default-props': 'off', // разрешает необязательные пропсы
        'react/react-in-jsx-scope': 'off', // разрешает использовать JSX без импорта React
        'react/jsx-props-no-spreading': 'warn', // выводит ворнинги на использование spread оператора в пропсах
        'react/function-component-definition': 'off', // разрешает использовать функциональные компоненты без типа
        'no-shadow': 'off', // разрешает использовать одинаковые имена переменных в разных областях видимости
        'import/extensions': 'off', // разрешает импортить модули без указания расширения
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off', // разрешает использовать нижнее подчеркивание в именах переменных
        'i18next/no-literal-string': ['error', { markupOnly: true }], // запрещает использовать строки в качестве ключей для i18next
        'max-len': ['error', { ignoreComments: true }], // устанавливает максимальную длину строки
    },
    globals: { // глобальные переменные
        __IS_DEV__: true, // переменная окружения для определения режима сборки
    },
};
