import type { BuildConfig } from 'bun';
import dts from 'bun-plugin-dts';

const buildConfig: BuildConfig = {
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
}

await Promise.all([
  Bun.build({
    ...buildConfig,
    naming: '[dir]/[name].mjs',
    target: 'browser',
    format: 'esm'
  }),
  Bun.build({
    ...buildConfig,
    naming: '[dir]/[name].cjs',
    minify: true,
    target: 'node',
    format: 'cjs',
    plugins: [
      dts()
    ]
  }),
]);
