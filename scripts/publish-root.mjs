import { cpSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = resolve(root, 'dist');
const rootAssets = resolve(root, 'assets');

copyFileSync(resolve(dist, 'index.html'), resolve(root, 'index.html'));
copyFileSync(resolve(dist, '404.html'), resolve(root, '404.html'));

if (existsSync(rootAssets)) {
  rmSync(rootAssets, { recursive: true, force: true });
}

cpSync(resolve(dist, 'assets'), rootAssets, { recursive: true });
