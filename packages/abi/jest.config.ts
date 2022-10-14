import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  testTimeout: 30000,
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx$': [
      'ts-jest',
      {
        tsConfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
}

export default config
