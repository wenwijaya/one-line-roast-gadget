// One-Line Roast: The Gadget You Use Every Day.
// Writes one original roast line to /output/entry.txt.
// The line is a single line, well under the 200-character gate.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My phone won't unlock with my face before coffee; apparently I'm not myself until I've had caffeine.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", ROAST, "utf8");
  } catch (error) {
    // Retry once after ensuring the directory exists; never crash.
    try {
      mkdirSync("/output", { recursive: true });
      writeFileSync("/output/entry.txt", ROAST, "utf8");
    } catch {
      // Nothing more we can do; still exit 0 below.
    }
  }
}

main();
