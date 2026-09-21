import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const cache = new Map();

/** In-memory loader for source checks; uses the project's existing TypeScript. */
export function loadSource(filename) {
  const file = path.resolve(filename);
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true, jsx: ts.JsxEmit.ReactJSX },
    fileName: file,
  }).outputText;
  const localRequire = spec => {
    if (!spec.startsWith('.')) return require(spec);
    const base = path.resolve(path.dirname(file), spec);
    const resolved = [base, base + '.ts', base + '.tsx', path.join(base, 'index.ts')]
      .find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!resolved) throw new Error('Cannot resolve ' + spec + ' from ' + file);
    return loadSource(resolved);
  };
  new Function('exports', 'require', '__filename', '__dirname', code)(exports, localRequire, file, path.dirname(file));
  return exports;
}
