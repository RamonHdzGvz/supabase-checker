import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    include: ['src/integration-tests/**/*.spec.ts'],
    setupFiles: ['src/integration-tests/setup.ts'],
    testTimeout: 20000,
  },
});
