# p5-typescript-template

This is a template repo to get you started with p5js and typescript.

## Quick start

1. Clone the repo
1. `yarn`
1. `yarn start`

## Features

- Latest p5js and typescript versions.
- Explicit dependency declarations (no magic).
- Hot reloading (via parcel).
- Linting + prettier out of the box.
- A "release" build which doesn't bundle p5.
- Useful default behaviour ('d' for debug mode, 'space' for pause).

## Generative Art

If you're building a generative art collection which is going to be 'on-chain', you probably don't want to bundle p5js into your code. The repo contains a `release` target which only builds your code and not p5. A version of p5 is loaded via CDN in the `release.html` file for you to ensure that everything still works with that build.

```bash
# Testing
yarn start-release

# Build
yarn release
```

This currently works by running some `sed` magic to replace the import with a read from `window.p5`. Note that this might not be totally portable across environments. If you add other global dependencies, you may have to add similar hacks to exclude them from the build (see "targets" in package.json).
