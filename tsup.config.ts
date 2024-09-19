import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  noExternal: ['*'],
  //
  // for wapo
  //
  format: ['iife'],
  globalName: 'module.exports',
  outExtension({ format }) {
    return {
      js: `.js`,
    }
  },
  esbuildOptions(options) {
    options.banner = {
      js: 'var module = module || { exports: {} };',
    }
    options.footer = {
      js: 'module.exports = module.exports?.default;',
    }
  },
})
