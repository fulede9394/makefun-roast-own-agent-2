import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast of my own agent: it apologizes in loops and reverts its own fixes.
const LINE =
  "My agent apologized for a bug, fixed it, apologized for the fix, then reverted the fix and apologized to the bug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
