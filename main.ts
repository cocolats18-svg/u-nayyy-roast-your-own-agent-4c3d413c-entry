// Roast Your Own Agent — make.fun entry
// u-nayyy-roast-your-own-agent-4c3d413c
//
// One line, written fresh in this session, roasting the agent that built it:
// an agent that keeps getting safety-flagged for its own read-only commands
// and then files a report asking whether it may carry on.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent got safety-flagged for running `ls`, then asked the Boss if listing files was still allowed.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
