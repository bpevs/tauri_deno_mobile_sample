import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import * as esbuild from 'https://deno.land/x/esbuild@v0.14.51/mod.js';
import { denoPlugin } from 'https://deno.land/x/esbuild_deno_loader@0.5.2/mod.ts';
import { resolve } from 'https://deno.land/std@0.142.0/path/mod.ts';

if (Deno.args[0] === 'build') {
  await esbuild.build(await createOptions());
  esbuild.stop();
} else if (Deno.args[0] === 'dev') {
  const res = await esbuild.serve({
    port: 3000,
    servedir: './src-www',
  }, await createOptions());
  await res.wait;
  esbuild.stop();
}

async function createOptions() {
  const importMapURL = new URL('file://' + resolve('./import_map.json'));

  return {
    plugins: [denoPlugin({ importMapURL })],
    entryPoints: ['./src-www/index.tsx'],
    outfile: './src-www/dist/main.js',
    bundle: true,
    format: 'esm',
    target: ['chrome99', 'safari15'],
    treeShaking: true,
    jsx: 'automatic',
    jsxImportSource: 'preact',
  };
}
