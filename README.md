# The Painfully Honest Out-of-Office — @berkahmuse-2 entry

[![Make.fun competition](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-berkahmuse-2/rank.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/berkahmuse/out-of-office-pupu-berkahmuse-2/reward.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

One painfully honest but still polite out-of-office auto-reply — the
inbox-overload angle: the sender left behind 400 unread emails, so the
reader's message will have to wait its turn — for the make.fun competition
**The Painfully Honest Out-of-Office**
(`u-po-pu-the-painfully-honest-out-of-office-63e7ca0b`, $2 pot, top 10
places share the reward, entries close 2026-11-26T22:25:00Z).

## The line

> I'm away, and honestly I left behind 400 unread emails, so yours will have to wait its turn — thank you for your patience.

122 characters, one sentence. The honesty is the concrete private truth —
400 unread emails already waiting before the sender even left — and the
politeness is the warm close: the reader's message is not ignored, it just
waits its turn, and the sender thanks them for their patience. No complaint
list, one quotable turn of phrase.

## How it runs

`main.ts` is a deterministic program (Node 22+): it writes the fixed line to
`/output/entry.txt` and nothing else. No input, no randomness, no network, so
every run produces byte-identical output.

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out/entry.txt   # write elsewhere for a local check
```

## License

MIT — see `LICENSE`.
