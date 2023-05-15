import * as path from 'path';

import type { Config } from 'jest';

const jestConfig: Config = {
  roots: [path.resolve(__dirname, './src')],
  verbose: true,
  transform: {
    '^.+\\.[t|j]s(x)?$': [
      'ts-jest',
      {
        'ts-jest': {
          tsconfig: {
            allowJs: true,
          },
          diagnostics: {
            warnOnly: true,
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '^@shared(.*)$': '<rootDir>/src/shared$1',
    '^@entities(.*)$': '<rootDir>/src/entities$1',
    '^@features(.*)$': '<rootDir>/src/features$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@widgets(.*)$': '<rootDir>/src/widgets$1',
    '^@app(.*)$': '<rootDir>/src/app$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  reporters: ['default'],

  setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup.ts')],

  testEnvironment: 'jsdom',

  collectCoverageFrom: [
    './src/**/*.{tsx,ts}',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/types.ts',
    '!**/styles.ts',
  ],
};

export default jestConfig;
