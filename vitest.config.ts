/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    setupFiles: ['./node_modules/@phala/wapo-env/dist/testing.js'],
  }
})
