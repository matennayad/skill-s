# יומן כלים וסקילים

תיעוד של כל כלי שנבדק והותקן בסביבת הענן: מה הוא עושה, מה הותקן, איפה, ומה המגבלות.
רשומה חדשה מתווספת בכל פעם שמותקן כלי.

---

## Graphify

- **תאריך:** 25/11/2026
- **מקור:** https://github.com/safishamsi/graphify (חבילת PyPI בשם `graphifyy`, גרסה 0.9.110)
- **מה זה עושה:** סורק פרויקט ובונה "מפת ידע", כלומר גרף שמראה אילו חלקים בקוד קשורים לאילו. Claude שואל את המפה במקום לקרוא שוב ושוב את כל הקבצים, וכך נחסכים טוקנים. סריקת הקוד רצה מקומית ובלי מודל, ולכן היא חינמית.

### מה הותקן ואיפה

| איפה | מה |
|---|---|
| סקריפט הסביבה (Default) | `uv tool install graphifyy` ואז `graphify install`. רץ אוטומטית בכל סשן חדש. |
| בכל סשן | הפקודות `graphify` ו-`graphify-mcp`, הסקיל `/graphify` וקובץ `~/.claude/CLAUDE.md` |
| 7 ריפוזיטורים, בענף main | מפה בתיקייה `graphify-out/`, הנחיות בקובץ `CLAUDE.md`, ובקובץ `.claude/settings.json` הגדרות שמזכירות ל-Claude לבדוק במפה לפני חיפוש |

**הריפוזיטורים:** yemot-yt-line, skill-s, matan-nayad, Download-from-YouTube-to-Drive, mitmachim-cloud-saver, Download-from-YouTube-to-Drive-share-code, jumbomail-to-drive.
**דילגתי על:** q8-firmware-resources, my-images, sharing-from-drive, כי יש בהם רק README.

### שימוש

- `/graphify .`: בונה מפה מלאה, כולל מסמכים ותמונות. צורך טוקנים.
- `graphify update .`: מעדכן את המפה של הקוד בלבד. חינמי.
- `graphify query "שאלה"`, `graphify explain "שם"`, `graphify path "A" "B"`: שאילתות על המפה.

### מגבלות

- **העדכון האוטומטי אחרי commit לא נשמר בין סשנים.** ההגדרה הזו נשמרת רק בתוך הסשן. במקומה, ההנחיה ב-`CLAUDE.md` אומרת ל-Claude להריץ `graphify update .` אחרי כל שינוי בקוד.
- **המפה שנשמרה כוללת קוד בלבד.** כדי לכלול גם מסמכים ותמונות צריך להריץ `/graphify .`.
- **ההגדרות מצביעות על `/root/.local/bin/graphify`,** הנתיב שבו Graphify מותקן בענן. במחשב שלא מותקן בו Graphify, ההגדרות פשוט לא יעשו כלום.
- **סשן שכבר פתוח** לא מקבל את השינויים אוטומטית. צריך להריץ בו `git pull`, להתקין את Graphify ולבקש ממנו לקרוא את `CLAUDE.md`.
