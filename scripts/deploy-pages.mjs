import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    ...options,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run('git', ['add', 'index.html', '404.html', 'assets']);

const diff = spawnSync('git', ['diff', '--cached', '--quiet'], {
  cwd: root,
  shell: process.platform === 'win32',
});

if (diff.status === 1) {
  run('git', ['commit', '-m', 'Publish portfolio update']);
} else if (diff.status !== 0) {
  process.exit(diff.status ?? 1);
} else {
  console.log('No Pages file changes to commit.');
}

run('git', ['push', 'origin', 'main']);
