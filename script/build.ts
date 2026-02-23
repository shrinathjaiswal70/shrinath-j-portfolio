import { build as viteBuild } from 'vite';
import { build as esbuildBuild } from 'esbuild';

// Paths
const clientRoot = './client';
const serverEntry = './server/index.ts';
const outputDir = './dist';

// Vite build for client
viteBuild({
    root: clientRoot,
    outDir: `${outputDir}/public`,
}).then(() => {
    console.log('Client built successfully!');
}).catch((err) => {
    console.error('Error during the Vite build:', err);
});

// Esbuild build for server
esbuildBuild({
    entryPoints: [serverEntry],
    bundle: true,
    platform: 'node',
    target: 'node14',
    outfile: `${outputDir}/index.cjs`,
}).then(() => {
    console.log('Server built successfully!');
}).catch((err) => {
    console.error('Error during the esbuild build:', err);
});
