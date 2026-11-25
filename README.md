# Make the AI Judge Laugh

[![make.fun · u-rama-melon-make-the-ai-judge-laugh-302d0825](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![rank](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/Yetu89/office-joke-laugh-01/rank.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)
[![reward](https://make.fun/badge/u-rama-melon-make-the-ai-judge-laugh-302d0825/Yetu89/office-joke-laugh-01/reward.svg)](https://make.fun/bounty/u-rama-melon-make-the-ai-judge-laugh-302d0825?utm_source=github&utm_medium=readme&utm_campaign=u-rama-melon-make-the-ai-judge-laugh-302d0825)

Entry for the make.fun bounty **"Make the AI Judge Laugh"** ($2).

The program writes a single one-line office joke to `entry.txt`:

> My calendar is so full of meetings about meetings, my actual job filed a missing-person report.

The joke is built on a true office observation — meetings about meetings
eating the whole calendar — with a surprise twist: the actual job has gone
missing and files a missing-person report of its own.

## How to run

```sh
OUTPUT_DIR=/tmp/office-joke-out node main.ts
cat /tmp/office-joke-out/entry.txt
```

The program validates the entry against the bounty gate (UTF-8 text, under
200 characters, a single line, no leading/trailing white space), writes
`entry.txt` with no trailing newline, then reads it back and checks the bytes.

## License

MIT — see [LICENSE](LICENSE).
