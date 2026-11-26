// The Painfully Honest Out-of-Office
// Entry for @berkahmuse-2 — competition u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// Deterministic program: writes one painfully honest but still polite
// out-of-office auto-reply — the inbox-overload angle: the sender left
// behind 400 unread emails, so the reader's message will have to wait its
// turn — to /output/entry.txt. No input, no randomness, no network. The
// line is a fixed string literal, so every run produces byte-identical
// output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I'm away, and honestly I left behind 400 unread emails, so yours will have to wait its turn — thank you for your patience.";

const outPath = process.argv[2] ?? "/output/entry.txt";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}
if (!LINE.trim()) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outPath}`);
