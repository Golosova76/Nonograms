import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/dist/', 'dist'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
};

export default config;
