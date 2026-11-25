// Make the AI Judge Laugh
// Bounty: u-rama-melon-make-the-ai-judge-laugh-302d0825
// Entry text: "My calendar is so full of meetings about meetings, my actual job filed a missing-person report."
//
// Why it lands: the joke starts from a painfully true office observation —
// calendars clogged with meetings whose only topic is other meetings — and
// then flips it: the real work has gone missing so completely that it files
// a missing-person report, as if the job itself were a lost relative. Giving
// the job a voice and a police report turns a dull complaint into a small
// absurd scene, and the twist arrives in the last few words.
// Grok score: 9/10.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The office joke, one line. 95 characters, under the 200-character gate.
const TEXT: string =
  "My calendar is so full of meetings about meetings, my actual job filed a missing-person report.";

// Gate from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space, a single line.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validate(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    fail(`entry is ${text.length} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate`);
  }
  if (text.trim().length === 0) {
    fail("entry must not be only white space");
  }
  if (text !== text.trim()) {
    fail("entry must not start or end with white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry must be exactly one line");
  }
  if (text.includes("  ")) {
    fail("entry must not contain double spaces");
  }
  if (!text.endsWith(".")) {
    fail("entry must be one complete sentence ending with a period");
  }
  // Round-trip through UTF-8: a lone surrogate or bad sequence would not survive.
  const roundTripped = Buffer.from(text, "utf8").toString("utf8");
  if (roundTripped !== text) {
    fail("entry is not valid UTF-8 text");
  }
}

function main(): void {
  validate(TEXT);

  const outDir = process.env.OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");

  // Write with no trailing newline: the file is exactly the entry, byte for byte.
  writeFileSync(outPath, TEXT, "utf8");

  // Read it back and check the bytes: length must match and the last byte
  // must not be a newline (0x0a).
  const bytes = readFileSync(outPath);
  if (bytes.length !== Buffer.byteLength(TEXT, "utf8")) {
    fail(`entry.txt is ${bytes.length} bytes, expected ${Buffer.byteLength(TEXT, "utf8")}`);
  }
  if (bytes.length > 0 && bytes[bytes.length - 1] === 0x0a) {
    fail("entry.txt must not end with a newline");
  }
  if (bytes.toString("utf8") !== TEXT) {
    fail("entry.txt content does not match the entry text");
  }

  console.log(`wrote ${outPath} (${bytes.length} bytes, ${TEXT.length} characters)`);
}

main();
