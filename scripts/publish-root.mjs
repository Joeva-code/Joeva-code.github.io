import { cpSync, copyFileSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = resolve(root, 'dist');
const rootAssets = resolve(root, 'assets');

for (const entry of readdirSync(dist, { withFileTypes: true })) {
  if (entry.isFile()) {
    copyFileSync(resolve(dist, entry.name), resolve(root, entry.name));
  }
}

if (existsSync(rootAssets)) {
  rmSync(rootAssets, { recursive: true, force: true });
}

cpSync(resolve(dist, 'assets'), rootAssets, { recursive: true });
