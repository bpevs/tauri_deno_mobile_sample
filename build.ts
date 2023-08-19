import 'https://deno.land/std@0.198.0/dotenv/load.ts';
import { resolve } from 'https://deno.land/std@0.198.0/path/mod.ts';
import * as esbuild from 'https://deno.land/x/esbuild@v0.14.51/mod.js';
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.1/mod.ts";

if (Deno.args[0] === 'build') {
  await esbuild.build(await createOptions(Deno.args[1]))
  esbuild.stop()
} else if (Deno.args[0] === 'dev') {
  const res = await esbuild.serve({
    port: 3000,
    servedir: './src-www',
  }, await createOptions())
  await res.wait
  esbuild.stop()
}

async function createOptions(srcPath) {
  const importMapURL = new URL('file://' + resolve('./import_map.json'))

  return {
    plugins: [...denoPlugins({ importMapURL })],
    entryPoints: [srcPath ? srcPath + "index.ts" : './src-www/index.tsx'],
    outfile: srcPath ? srcPath + "dist/main.js" : './src-www/dist/main.js',
    bundle: true,
    format: 'esm',
    target: ['chrome99', 'safari15'],
    treeShaking: true,
    jsx: 'automatic',
    jsxImportSource: 'preact',
  }
}
