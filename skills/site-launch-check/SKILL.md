---
name: site-launch-check
description: Pre-launch check for a website aimed at Israeli users. Runs security (built-in security review + Semgrep), bugs (code review), accessibility (WCAG audit, Israeli standard IS 5568) and an Israeli-law compliance checklist (accessibility statement, privacy, marketing consent, distance-selling details), then writes one Hebrew report of what passes and what is missing. Use when the user asks to check a site before launch, asks if a site is "legal", safe, accessible, or asks for a security/accessibility/compliance audit.
---

# Site launch check (Israel)

You audit one website before it goes live and produce ONE report in Hebrew: `LAUNCH-CHECK.md` in the project root.
You are not a lawyer. You check against public standards and a checklist, and you say clearly that a lawyer should review the legal pages before launch.

## 0. Scope

Ask nothing if it is obvious. Otherwise ask once: where is the site's source, and is there a live or local URL? If there is no URL, serve the folder locally (`python3 -m http.server 8000`) and audit `http://localhost:8000/`.
Note what the site does: does it collect personal data (forms, newsletter), sell online, use analytics/ads pixels? These decide which legal items apply.

## 1. Security

1. Run the built-in `/security-review` style review over the source (read the code; look for XSS such as `innerHTML` with user input, `eval`, open redirects, secrets in code, forms posting over http, missing `rel="noopener"` on `target="_blank"`).
2. Run Semgrep (the `static-analysis` skill from Trail of Bits explains it in depth):
   `semgrep scan --config p/javascript --config p/secrets --config p/html --metrics=off .`
   If `semgrep` is missing: `uv tool install semgrep`. Rules download from semgrep.dev.
3. Check: HTTPS everywhere, no mixed content, no API keys or tokens in client code, third-party scripts pinned to known hosts.

## 2. Bugs

Review the code for broken links, broken images, console errors and JavaScript that fails. If the site runs, open it with Playwright and record console errors and failed requests on each page.

## 3. Accessibility

Run the `claude-wcag-audit` skill (WCAG 2.1/2.2 A+AA, real browser):
`node <plugin>/scripts/audit.mjs <url> --out a11y-report`
Israeli regulations point to Israeli Standard 5568, which is based on WCAG 2.0 level AA. WCAG 2.2 AA covers it. Also check: `<html lang="he" dir="rtl">`, Hebrew screen-reader labels, keyboard use of every menu and form, visible focus, text that survives 200% zoom.

## 4. Israeli law checklist

Mark each item: ✅ present, ❌ missing, ➖ not relevant (say why).

**Accessibility (Equal Rights for Persons with Disabilities Law and its service-accessibility regulations)**
- Accessibility statement page (הצהרת נגישות): what was made accessible, the standard followed, known gaps, the date of the last check, and contact details for the accessibility coordinator or a contact for accessibility requests.
- A visible link to it, usually in the footer.
- Note: some very small businesses may be exempt; say "check with a lawyer" rather than deciding.

**Privacy (Protection of Privacy Law, including Amendment 13)**
- If the site collects any personal data: a privacy policy page that says what is collected, why, who receives it, how long it is kept, and how to ask to see or fix it.
- At each form: a short notice of the purpose, and which fields are required.
- If there are analytics, ad pixels or cookies: say so in the privacy policy; a cookie notice is good practice (and needed if EU visitors are targeted, GDPR).
- Forms submit over HTTPS only.

**Marketing messages (Communications Law, section 30A, "anti-spam")**
- If the site signs people up for newsletters, SMS or WhatsApp marketing: a separate consent checkbox that is NOT pre-checked, and an easy way to unsubscribe.

**Online selling (Consumer Protection Law, distance selling)**
- Only if the site sells: business name, ID/registration number, address and contact details; full price including VAT; delivery terms and time; cancellation policy and how to cancel; terms of use (תקנון).

**General**
- Terms of use if there are user accounts, contests or sales.
- No use of photos, fonts or text without a licence; list the sources of stock photos.

## 5. Report

Write `LAUNCH-CHECK.md` in Hebrew:
1. Summary: ready / not ready, and the 3 most important fixes.
2. A table per area (security, bugs, accessibility, law): finding, severity (קריטי / חשוב / רצוי), where, how to fix.
3. Links to the raw reports (Semgrep output, `a11y-report/report.html`).
4. The last line, always: "הבדיקה הזו אינה ייעוץ משפטי. לפני עלייה לאוויר מומלץ שעורך דין יעבור על מדיניות הפרטיות, התקנון והצהרת הנגישות."

Do not fix anything unless the user asks. When asked to fix, fix critical items first and re-run the relevant check.
