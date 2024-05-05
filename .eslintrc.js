const OFF = 0;
const WARN = 1;
const ERROR = 2;

// TODO: add FSD lint rules if needed

module.exports = {
  root: true,

  env: {
    es2022: true,
    node: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  extends: ['prettier', 'airbnb-typescript', 'airbnb/hooks'],

  plugins: ['import', '@typescript-eslint', 'react'],

  rules: {
    // Предупреждение о консоль логах
    'no-console': WARN,

    // минимальная длина имен (по-умолчанию от 2 символов)
    'id-length': [
      ERROR,
      { exceptions: ['_', 'i', 'j', 'x', 'y', 'z', 'a', 'b', 'e', 'k', 'v'] },
    ],

    // Переопределение входящих параметров
    'no-param-reassign': [ERROR, { props: false }],

    // Запрет на название переменных начинающихся с _
    'no-underscore-dangle': [ERROR, { allowAfterThis: true }],

    // оператор всегда впереди при переносе выражений на новую строку
    // Отключил, поскольку стилем должен управлять prettier
    'operator-linebreak': OFF,

    // ++ только для for-цикла
    'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],

    // Запрет алертов
    'no-alert': ERROR,

    // При возможности удаление у стрелочных функций излишних скобок
    'arrow-body-style': [ERROR, 'as-needed'],

    // Предупреждение о неиспользуемых переменных
    '@typescript-eslint/no-unused-vars': WARN,

    // Предупреждение о лишних условиях
    '@typescript-eslint/no-unnecessary-condition': ERROR,

    // Отключение отступов тайпскрипт для работы приттиера
    '@typescript-eslint/indent': OFF,

    // в каких файлах может содержаться jsx
    'react/jsx-filename-extension': [ERROR, { extensions: ['.ts', '.tsx'] }],

    // Cамозакрывающиеся компоненты при отсутствии чилдренов
    'react/self-closing-comp': [ERROR, { component: true, html: true }],

    // сортировка пропсов в компонентах
    'react/jsx-sort-props': [
      ERROR,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: false,
      },
    ],

    // сортировка объявлений пропсов в компоненте
    'react/sort-prop-types': [
      ERROR,
      {
        callbacksLast: true,
        ignoreCase: false,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],

    // Автоматическое сокращение булевых тру пропсов
    'react/jsx-boolean-value': ERROR,

    // экспорт по дефолту, отдаём преимущество именованному экспорту
    'import/prefer-default-export': OFF,

    // импорт зависимостей
    'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],

    // обязательное использование расширений при импорте файлов (кроме js)
    'import/extensions': [
      ERROR,
      {
        ts: 'never',
        tsx: 'never',
        svg: 'always',
        png: 'always',
        json: 'always',
      },
    ],

    // порядок импортов
    'import/order': [
      ERROR,
      {
        'alphabetize': { order: 'asc', caseInsensitive: false },
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'unknown',
        ],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': [''],
        'pathGroups': [
          {
            pattern:
              '+(react|react-dom|react-router-dom|react-redux|@reduxjs/toolkit|react-custom-scrollbars|styled-components|react-tooltip|react-hook-form)',
            group: 'external',
            position: 'before',
          },
          // {
          // 	pattern: 'styled-components/**',
          // 	group: 'external',
          // 	position: 'before',
          // },
          {
            pattern: '@app/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@widgets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@entities/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './*.+(css|scss|less|svg)',
            group: 'sibling',
            position: 'after',
          },
        ],
      },
    ],
  },
};
