import { build } from 'esbuild';
import { defineConfig, build as viteBuild } from 'vite';

async function viteClientBuild() {
  await viteBuild({
    config: defineConfig({
      // Vite configuration settings
      build: {
        outDir: 'dist/client',
      },
    })
  });
}

async function esbuildServerBundling() {
  await build({
    entryPoints: ['src/server/index.ts'], // Adjust according to your server entry point
    bundle: true,
    platform: 'node',
    target: 'node14', // Specify your node version
    outfile: 'dist/server/index.js',
    format: 'cjs',
  });
}

async function build() {
  await viteClientBuild();
  await esbuildServerBundling();
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
