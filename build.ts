import 'https://deno.land/std@0.200.0/path/mod.ts';
import { resolve } from 'https://deno.land/std@0.198.0/path/mod.ts';
import * as esbuild from 'https://deno.land/x/esbuild@v0.14.51/mod.js';
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.4/mod.ts";
import { solidPlugin } from 'npm:esbuild-plugin-solid'

const srcPath = Deno.args[1];
const importMapURL = new URL('file://' + resolve('./import_map.json'))
const [denoResolver, denoLoader] = [...denoPlugins({
  importMapURL: new URL('file://' + resolve('./import_map.json')),
})]

const options = {
  plugins: [
    denoResolver,
    solidPlugin({ solid: { moduleName: 'npm:solid-js/web' } }),
    denoLoader,
  ],
  entryPoints: [srcPath ? srcPath + "index.ts" : './src-www/index.tsx'],
  outfile: srcPath ? srcPath + "dist/main.js" : './src-www/dist/main.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  treeShaking: true
}

if (Deno.args[0] === 'build') {
  await esbuild.build(options)
  esbuild.stop()
} else if (Deno.args[0] === 'dev') {
  const res = await esbuild.serve({
    port: 3000,
    servedir: './src-www',
  }, options)
  await res.wait
  esbuild.stop()
}
