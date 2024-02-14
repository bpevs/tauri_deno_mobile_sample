# Tauri Deno Mobile (Android) Sample

For building Android apps on MacOS, using Tauri and Solidjs

Heavy inspiration from [Tauri Deno Starter](https://github.com/marc2332/tauri-deno-starter)!

# Environment Setup

Assuming you have already installed latest `Deno` and `Rust`...

### Install full xcode (Maybe optional?)

I had to install this to run `cargo mobile` and `cargo android`, which I mistakenly used first. So maybe `cargo tauri android` gets around this? I haven't uninstalled it, so not sure if it's actually necessary.

When I was running `cargo mobile`, it made me use the full xcode instead of xcode-select, because it was trying to build for iOS. So maybe that is required as well, not sure.

### Install Tauri Beta Version (with Mobile)

Since it's beta, just make sure to specifically tag the version when installing Tauri: `cargo install tauri-cli@2.0.0-beta.{release version here}`

### Android Stuff

Basically following the [getting started guide](https://tauri.app/v1/guides/getting-started/prerequisites), installing thrigs via cargo when possible, and ignoring the any npm stuff.

Downloaded Android Studio...

The download for NDK was in:
`Android Studio > Tools > SDK Manager > Android SDK > SDK TOOLS`

I installed:
- Android SDK Build-TOols
- NDK (Side by side)
- Android Emulator
- Android SDK Platform-Tools

Then found NDK version via `ls $HOME/Library/Android/sdk/ndk`

My env variables ended up looking like this:
```sh
export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/Contents/Home"
export ANDROID_HOME="$HOME/Library/Android/sdk"
export NDK_HOME="$ANDROID_HOME/ndk/25.1.8937393"
```

# Project Setup

How we got the repo to this point...

- build /gen dir: `cargo tauri init` (recc to delete, rebuild after updating Carto.toml and tauri.conf.json with your app identifiers)
    - points to `../src/www`
    - beforeDevCommand: `deno run -A scripts/main.ts dev`
    - beforeBuildCommand: `deno run -A scripts/main.ts build`
    - host: `http://localhost:3000`
- Added Deno Files
  - `scripts/main.ts`: build script, using esbuild
- Prevent screen rotation by modifying `/gen/android/app/app/src/main/AndroidManifest.xml`:
  - adds `android:screenOrientation`

# Usage

Available tasks are in the `deno.json` file. Run like so:
`deno task dev`
