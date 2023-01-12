import * as esbuild from "https://deno.land/x/esbuild@v0.16.12/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.5.2/mod.ts";
import { resolve } from 'https://deno.land/std@0.142.0/path/mod.ts';

const importMapURL = new URL('file://' + resolve('./import_map.json'));

await esbuild.build({
  plugins: [denoPlugin({ importMapURL })],
  entryPoints: ["./src-www/index.tsx"],
  outfile: "./src-www/dist/main.js",
  bundle: true,
  format: "esm",
});

esbuild.stop();
