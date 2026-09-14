#!/usr/bin/env node
/**
 * Apply unique line banks onto existing banter ScriptNode files.
 * Preserves ids/beats/flags/weights; rewrites lines only.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BANKS } from './banks.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '../../src/data/banterScripts');

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function applyFile(creatureId) {
  const bank = BANKS[creatureId];
  if (!bank) throw new Error(`No bank for ${creatureId}`);
  const filePath = path.join(dir, `${creatureId}.ts`);
  let text = fs.readFileSync(filePath, 'utf8');
  const prefix = bank.name; // display name for "Name: " prefix

  // Replace each lines: [ ... ] block that follows id: 'creatureId_SUFFIX'
  for (const [suffix, pair] of Object.entries(bank.lines)) {
    const nodeId = `${creatureId}_${suffix}`;
    const re = new RegExp(
      `(id: '${nodeId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?lines: \\[)[\\s\\S]*?(\\],)`,
      'm'
    );
    if (!re.test(text)) {
      console.warn(`MISSING node ${nodeId}`);
      continue;
    }
    const a = `${prefix}: ${pair[0]}`;
    const b = `${prefix}: ${pair[1]}`;
    const linesBlock = `\n    '${esc(a)}',\n    '${esc(b)}',\n  `;
    text = text.replace(re, `$1${linesBlock}$2`);
  }
  fs.writeFileSync(filePath, text);
  console.log('wrote', creatureId);
}

const targets = process.argv.slice(2);
for (const id of targets) applyFile(id);
