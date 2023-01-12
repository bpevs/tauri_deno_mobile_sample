import * as esbuild from "https://deno.land/x/esbuild@v0.16.12/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.5.2/mod.ts";
import { resolve } from 'https://deno.land/std@0.142.0/path/mod.ts';

const importMapURL = new URL('file://' + resolve('./import_map.json'));

try {
  console.info("serving...");
  const res = await esbuild.serve({
    port: 3000,
    servedir: "./src-www",
  }, {
    plugins: [denoPlugin({ importMapURL })],
    entryPoints: ["./src-www/index.tsx"],
    outfile: "./src-www/dist/main.js",
    bundle: true,
    format: "esm",
  });

  console.info("waiting...");
  await res.wait;

  console.info("stopping...");
  esbuild.stop();
} catch(e) {
  console.error(e);
}
