---
name: lab-news-post
description: >
  Use this skill whenever the user wants to add a new post to the lab website's news section.
  Triggers include: "add a news post", "create a post about", "write a farewell post", "add to
  the website", "post about [event/person]", "we had a [party/event/talk/award]", or any request
  to document a lab event, farewell, welcome, award, publication milestone, or outing on the website.
  Always use this skill — don't just write markdown freehand — because it ensures the post matches
  the repo's conventions, places photos correctly, and produces a ready-to-commit file.
---

# Lab News Post Skill

This skill creates a new `_posts/` entry for the lab website, matching the existing post format,
and produces a git commit message. The website uses the
[Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs).

---

## Step 1 — Gather inputs

You need:
1. **Event description** — what happened, who was involved (usually already in the user's message)
2. **Photos** — either uploaded directly by the user, or file paths they provide
3. **Repo location** — ask if not already known (e.g. `/Users/.../lab_website`)

If the user gave a person's name, **look them up in the repo** before writing the post:
```bash
grep -r "PersonName" <repo>/  --include="*.md" -l
```
Check `_members/` or any team/people pages for their role, research focus, and next destination.
Use that info to personalize the post body naturally (e.g. mention their research topic or where
they're heading next). Don't make up facts — only use what's in the repo.

---

## Step 2 — Study existing posts

Read 2–3 recent posts from `_posts/` to confirm conventions:
```bash
ls -t <repo>/_posts/ | head -10
cat <repo>/_posts/<recent-post>.md
```

Pay attention to:
- Frontmatter fields used (`title`, `author`, `tags`, `image`, etc.)
- How figures are included (`{% include figure.html ... %}`)
- Image path conventions (e.g. `images/gallery/LabLife/...`)
- Tone: warm, brief, first-person plural ("we")

---

## Step 3 — Handle photos

### If the user uploaded photos directly:
Save them to the correct gallery folder in the repo:
```bash
cp <uploaded_file> <repo>/images/gallery/LabLife/<EventName_DDMMYYYY>.<ext>
```

### If the user gave file paths:
Use those paths as-is (confirm they're already inside the repo's `images/` tree).

### Naming convention:
Match the pattern seen in existing posts. Typically: `EventDescription_DDMMYYYY.jpeg`

If **multiple photos**, include multiple `figure.html` blocks stacked vertically.

---

## Step 4 — Write the post file

**Filename format:** `YYYY-MM-DD-short-slug.md`  
Use today's date unless the user specifies the event date.

**Frontmatter** (match exactly what existing posts use — no extra fields):
```yaml
---
title: <descriptive title>
author: <author username, if known from repo — otherwise omit>
tags: <match tags from similar posts, e.g. "students", "lab-life">
---
```

**Body:**
- 2–5 sentences, warm and personal tone
- Mention the person's name, their role/research if found in repo, and where they're going next
- End with a well-wish
- Then include figure block(s) for each photo:

```liquid
{%
  include figure.html
  image="images/gallery/LabLife/<filename>"
  height="300px"
%}
```

---

## Step 5 — Write the file to disk

```bash
cat > <repo>/_posts/YYYY-MM-DD-short-slug.md << 'EOF'
<full post content>
EOF
```

Then confirm it looks right:
```bash
cat <repo>/_posts/YYYY-MM-DD-short-slug.md
```

---

## Step 6 — Produce a git commit message

Output a ready-to-use commit message following this pattern:
```
Add news post: <title>

- Created _posts/YYYY-MM-DD-short-slug.md
- Added photo(s): images/gallery/LabLife/<filename(s)>
```

Show the user the post content, the file path, and the commit message.
Ask if they'd like any changes before they commit.

---

## Notes

- **Tone:** Posts are always warm, brief, celebratory. Never formal or dry.
- **Author field:** Only include if you can find the author's username in `_members/` or existing posts. If unsure, omit it.
- **Tags:** Look at what tags similar posts use. Common ones: `students`, `lab-life`, `awards`.
- **Don't invent facts** about the person — only use what's in the repo or what the user tells you.
- If the user says "similar to older posts", always read at least two older posts of the same type first.
