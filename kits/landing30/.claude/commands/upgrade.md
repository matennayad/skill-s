---
description: Add a sample price list and a WhatsApp contact form to chosen landing pages (pass slugs, e.g. biz-01 biz-11)
---

Upgrade the landing pages in sites/<slug> for each of these slugs: $ARGUMENTS

For each page, keep its existing design, fonts and colors, and add two sections before the footer:

1. Price list: 4 to 6 services that are typical for this business category, each with a sample price in ₪. Under the list add this note in small text: "המחירים להמחשה בלבד. יש לעדכן לפי מחירון העסק."
   This step overrides the "do not invent prices" rule in BRIEF.md, for the price list only.

2. Contact form: full name, phone, service (a select with the services from the price list), optional message. No backend. On submit: validate name and phone, then open
   https://wa.me/<the business phone in international format, digits only>?text=<URL-encoded Hebrew message that includes the form values>
   in a new tab.

Do not change any other section. Do not add testimonials, ratings or awards.
