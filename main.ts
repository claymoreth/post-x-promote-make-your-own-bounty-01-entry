// Copies POST.json (the entry's X post address) into the grader's output directory.
import * as fs from 'node:fs';
import * as path from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = path.join(botDir, 'POST.json');
const dest = path.join(outputDir, 'POST.json');

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(src, dest);
