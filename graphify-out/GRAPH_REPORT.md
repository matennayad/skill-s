# Graph Report - skill-s  (2026-11-25)

## Corpus Check
- 10 files · ~3,692 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 1, .zip 1)

## Summary
- 54 nodes · 59 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8eb11c56`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- hook.cjs
- entry
- Mission: נהיגה ברכב פרטי בישראל (דרגה B)
- נהיגה ברכב פרטי בישראל: מקורות
- render
- skill-s
- liveFiles
- best
- 0001-starting-from-zero.md
- NOTES.md
- .trail/README.md

## God Nodes (most connected - your core abstractions)
1. `entry()` - 6 edges
2. `Mission: נהיגה ברכב פרטי בישראל (דרגה B)` - 5 edges
3. `נהיגה ברכב פרטי בישראל: מקורות` - 5 edges
4. `onPath()` - 4 edges
5. `best()` - 4 edges
6. `render()` - 4 edges
7. `draw()` - 4 edges
8. `fromPkg()` - 3 edges
9. `globalRoot()` - 3 edges
10. `offerTrail()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `entry()` --calls--> `best()`  [EXTRACTED]
  .trail/hook.cjs → .trail/hook.cjs  _Bridges community 7 → community 1_

## Import Cycles
- None detected.

## Communities (12 total, 4 thin omitted)

### Community 0 - "hook.cjs"
Cohesion: 0.18
Nodes (6): fs, os, path, { pathToFileURL }, PKGS, target

### Community 1 - "entry"
Cohesion: 0.33
Nodes (6): entry(), fromPkg(), globalRoot(), onPath(), pkgAbove(), remembered()

### Community 2 - "Mission: נהיגה ברכב פרטי בישראל (דרגה B)"
Cohesion: 0.33
Nodes (5): Constraints, Mission: נהיגה ברכב פרטי בישראל (דרגה B), Out of scope, Success looks like, Why

### Community 3 - "נהיגה ברכב פרטי בישראל: מקורות"
Cohesion: 0.33
Nodes (5): Gaps, Knowledge, Wisdom (Communities), הערה טכנית, נהיגה ברכב פרטי בישראל: מקורות

### Community 4 - "render"
Cohesion: 0.60
Nodes (4): render(), draw(), shuffledLeft(), shuffle()

### Community 5 - "skill-s"
Cohesion: 0.50
Nodes (3): skill-s, חשוב, כלים שמותקנים אוטומטית בכל סשן בענן

### Community 6 - "liveFiles"
Cohesion: 0.50
Nodes (3): flatLine(), liveFiles(), offerTrail()

### Community 7 - "best"
Cohesion: 0.67
Nodes (3): best(), newer(), versionOf()

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `globalRoot()` connect `entry` to `hook.cjs`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `liveFiles()` connect `liveFiles` to `hook.cjs`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._