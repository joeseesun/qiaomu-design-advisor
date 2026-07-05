#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};

const selectionFile = path.resolve(getArg('--selection', 'selection.json'));
const timeoutMs = Number(getArg('--timeout', '300000'));
const intervalMs = Number(getArg('--interval', '250'));

async function readSelection() {
  try {
    const raw = await fs.readFile(selectionFile, 'utf8');
    const selection = JSON.parse(raw);
    if (selection && (selection.id || selection.label || selection.name)) return selection;
  } catch {
    return null;
  }
  return null;
}

let done = false;

async function checkOnce() {
  if (done) return;
  const selection = await readSelection();
  if (selection) {
    done = true;
    console.log(`QIAOMU_DESIGN_SELECTION_OBSERVED::${JSON.stringify(selection)}`);
    process.exit(0);
  }
}

await checkOnce();

let watcher;
try {
  watcher = (await import('node:fs')).watch(path.dirname(selectionFile), {persistent: true}, (_event, filename) => {
    if (!filename || filename === path.basename(selectionFile)) checkOnce();
  });
} catch {
  watcher = null;
}

const poll = setInterval(checkOnce, intervalMs);
const timeout = setTimeout(() => {
  done = true;
  if (watcher) watcher.close();
  clearInterval(poll);
  console.error(`QIAOMU_DESIGN_SELECTION_TIMEOUT::${selectionFile}`);
  process.exit(2);
}, timeoutMs);

process.on('SIGINT', () => {
  done = true;
  if (watcher) watcher.close();
  clearInterval(poll);
  clearTimeout(timeout);
  process.exit(130);
});
