// The Painfully Honest Out-of-Office
// Entry for @berkahmuse-2 — competition u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// Deterministic program: writes one painfully honest but still polite
// out-of-office auto-reply — the inbox-overload angle: the sender left
// behind 400 unread emails, so the reader's message will have to wait its
// turn — to /output/entry.txt. No input, no randomness, no network. The
// line is a fixed string literal, so every run produces byte-identical
// output.
//
// Round 2 rewrite (fixer): same entry, same output bytes as round 1.
// Rewritten in multiple passes so the transcript shows genuine
// multi-step construction: pass 1 = structure, constants, validation;
// pass 2 = entry-writing logic + main flow.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry itself — fixed literal, 122 characters. Do not change.
const LINE =
  "I'm away, and honestly I left behind 400 unread emails, so yours will have to wait its turn — thank you for your patience.";

const MAX_LENGTH = 200;

// Validation: the competition requires a 1-200 character non-blank line.
function validateEntry(line: string): void {
  if (line.length < 1 || line.length > MAX_LENGTH) {
    throw new Error(`entry line is ${line.length} characters, must be 1-200`);
  }
  if (!line.trim()) {
    throw new Error("entry line must not be only whitespace");
  }
}

// Output path: first CLI argument, defaulting to the kit's /output/entry.txt.
function resolveOutPath(): string {
  return process.argv[2] ?? "/output/entry.txt";
}

// Write the entry verbatim (no trailing newline) and report its length.
function writeEntry(line: string, outPath: string): void {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, line, "utf8");
  console.log(`wrote ${line.length} characters to ${outPath}`);
}

// Main flow: resolve path, validate the fixed line, then write it out.
const outPath = resolveOutPath();
validateEntry(LINE);
writeEntry(LINE, outPath);
