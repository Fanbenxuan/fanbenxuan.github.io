// Hugo's native Tailwind integration expects a Node.js entry point.
// Some pnpm versions generate a shell launcher which Hugo does not recognize.
// Point the local executable at the already-installed official CLI instead.
import { readFile, rm, symlink, mkdir, writeFile } from 'node:fs/promises';
import { resolve, relative, dirname } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const packagePath = require.resolve('@tailwindcss/cli/package.json');
const pkg = JSON.parse(await readFile(packagePath, 'utf8'));
const cli = resolve(dirname(packagePath), typeof pkg.bin === 'string' ? pkg.bin : pkg.bin.tailwindcss);
const launcher = resolve('node_modules/.bin/tailwindcss');
await mkdir(dirname(launcher), { recursive: true });
await rm(launcher, { force: true });
if (process.platform === 'win32') {
  const target = cli.replaceAll('\\', '/');
  await writeFile(launcher, `#!/usr/bin/env node\nimport(${JSON.stringify('file:///' + target)});\n`);
} else {
  await symlink(relative(dirname(launcher), cli), launcher);
}
console.log('Tailwind CLI entry point ready.');
