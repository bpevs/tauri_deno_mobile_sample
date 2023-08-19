# IPC Repro

Ignore all the deno stuff for this branch; built it into `main.js`.

Breaks on macOS desktop via `cargo tauri dev`, and Android via `cargo tauri android build --debug`

main.js code is built from [`src-www/index.tsx`](https://github.com/bpevs/tauri_deno_mobile_sample/blob/ipc-error-repro/src-www/index.tsx).

If you want to re-build it, you can do that by downloading Deno, and `deno run -A build.ts build`. Or just add other vanilla code to the index.html; the bug should still happen as long as you're using any ipc call. For example, adding `arch` also returns the same error:

```ts
import { arch } from '@tauri-apps/api/os';
(function() {
  const archName = await arch();
})()
```


# Quick Fix

Revert tauri dep to next branch:

```
tauri = { git = "https://github.com/tauri-apps/tauri/", branch = "next" }
```

# To Use Latest Working Version

1. change tauri dep to:
`{ path = "/Users/my_user_name/desktop/tauri/core/tauri", version = "2.0.0-alpha.11" }`

2. cloned https://github.com/tauri-apps/tauri to desktop.

3. checkout to last good commit: `6b81d70a`
