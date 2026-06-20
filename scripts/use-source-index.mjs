import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));

copyFileSync(resolve(root, 'source-index.html'), resolve(root, 'index.html'));
