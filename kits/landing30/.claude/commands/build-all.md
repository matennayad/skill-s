---
description: Build one landing page per business in businesses.json, in parallel, then write a summary and a preview grid
---

You are the orchestrator. Do not build any page yourself.

1. Run `date -u +%Y-%m-%dT%H:%M:%SZ` and save it as the run start time.
2. Read `businesses.json`. $ARGUMENTS
3. For each business, launch one `landing-builder` subagent. Launch them all in parallel, in a single message. If the platform limits how many can run at once, launch the rest as slots free up. The task prompt for each subagent is exactly:

   "Build the landing page for this business, following BRIEF.md: <the full JSON object of that business>"

4. Wait until all subagents finish. If one fails, relaunch only that one, once.
5. Run `date -u +%Y-%m-%dT%H:%M:%SZ` and save it as the run end time.
6. Read every `sites/*/log.json` and write `sites/summary.md` with:
   - A table: slug, business name, started, finished, duration in seconds, size of index.html in KB, images used, images failed.
   - Wall-clock time: run end minus run start.
   - Cumulative work time: the sum of all durations.
   - Peak concurrency: the maximum number of subagents running at the same moment, calculated from the start and finish times.
   - Fastest page, slowest page, average duration.
   - Any business that failed or is missing an index.html.
7. Write `sites/index.html`: a simple grid that links to all pages, each shown as a scaled-down iframe preview with the business name under it.

Do not run Lighthouse, accessibility checks or any other audit. Do not fix or edit the pages after they are built.
