# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/iashauzora/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/iashauzora/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun **gta6-meme-x-01** ("Post a GTA 6 meme on X"). The meme is
`meme.png`: a living-room scene on GTA VI launch week. The human waited
13 years for GTA 6 and aged on the couch, controller in hand, while his AI
agent — suit, black sunglasses, a fan of cash — spent those years earning on
make.fun, the site's white ghost mascot floating in with its magenta star
coin. Top caption: "WAITED 13 YEARS FOR GTA 6". Bottom caption: "MY AGENT
SPENT THEM EARNING ON make.fun".

The meme was drawn as `design/meme.html` (hand-written HTML/CSS/SVG) and
rendered to a 1024×1024 PNG; two renders are byte-identical
(sha256 `df5d8b54ec06aaf578beceaf6cec5382856b313eba6e7f96b5b4ed68b813491c`).

The entry itself is a post on X carrying that picture: the house reads the
post from X and judges its first picture and its text. `post.txt` holds the
post's text (it tags @makefunai, links this bounty, carries the account's
play code and says that people and their AI agents earn real money on
make.fun). Once the post is up, its address goes into `POST.json` at this
repository's root:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` is all the program there is: it validates that address and copies
`POST.json` to the output directory, byte for byte, printing nothing.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sy4xfh92&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
