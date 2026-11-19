// gta6-meme-x-01 entry program.
//
// The entry itself is a post on X: the house reads the post from X and
// judges its first picture and its text. This repository's one job is to
// hand in the post's address, so this program copies POST.json from the
// repository root to the output directory, byte for byte, and prints
// nothing on success.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, nothing read outside the repository: two
// runs always write the same bytes.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "POST.json");
const bytes = readFileSync(source);

// POST.json must be a small JSON object naming the post's address:
//   {"url": "https://x.com/<handle>/status/<id>"}
// Anything else is a broken entry, so fail loudly here instead of
// handing the house a file it would refuse at the gate.
if (bytes.length > 16384) {
  throw new Error("POST.json is larger than 16384 bytes");
}
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/([^/]+\/status\/\d+|i\/web\/status\/\d+)$/;
const post = JSON.parse(bytes.toString("utf8")) as unknown;
if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string" ||
  !POST_URL.test((post as { url: string }).url)
) {
  throw new Error(
    'POST.json must look like {"url": "https://x.com/<handle>/status/<id>"}',
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), bytes);
