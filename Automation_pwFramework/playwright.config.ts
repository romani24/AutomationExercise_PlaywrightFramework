import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/test/apis',
  testMatch: '**/*.ts',
  timeout: 30000,
  retries: 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    baseURL: 'https://automationexercise.com',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  },
});
