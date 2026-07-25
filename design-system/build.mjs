import * as esbuild from 'esbuild';

// JS bundle: ESM, React left external so the host provides it.
await esbuild.build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  target: ['es2020'],
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  logLevel: 'info',
});

// Stylesheet: tokens + component styles flattened into one file.
await esbuild.build({
  entryPoints: ['src/styles.css'],
  outfile: 'dist/allarise.css',
  bundle: true,
  logLevel: 'info',
});
