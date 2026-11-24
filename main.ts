// post-x-promote-make-your-own-bounty-01
//
// Hands in the entry: a single X post by @claymorely quoting make.fun's
// make-your-own-bounty post. The entry is just the post's address, kept in
// POST.json. This program copies that file into the harness output dir.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`post-x-promote entry failed: ${message}`);
  process.exit(1);
}
