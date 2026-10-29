# RJS Stone Tops — website

A one-page website for **RJS Stone Tops**, a custom quartz, natural stone and
Dekton countertop fabricator with a showroom in Richmond, BC. It is built with
[Astro](https://astro.build), which turns the files in `src/` into a plain,
fast HTML page.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 18.20 or newer) installed.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads when you save a file.

To make the final version that goes online: `npm run build` (output goes to `dist/`).

## Where to change things

| What you want to change | File |
| --- | --- |
| Text, phone, emails, materials, services, reviews, quote-form options, photos, social links | `src/data/site.js` |
| Colours, fonts, sizes, spacing | `src/styles/global.css` (colours are at the top) |
| Page layout / sections | `src/pages/index.astro` |

Most edits only need `src/data/site.js`.

## Put it online (Vercel)

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and pick this repository.
3. Vercel detects **Astro** automatically. Keep the default settings and click **Deploy**.
4. Every time you push to the `main` branch, Vercel updates the live site.

## Hook up the quote form

The form currently only shows a thank-you message; it does not send anything yet.

1. Create a form at https://formspree.io and copy its URL (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `src/data/site.js`.
3. Commit and push. Submissions now arrive in your email.

**About the file upload field:** Formspree only accepts file uploads on a paid
plan. On the free plan, either remove the "Sketches, measurements or photos"
field from `src/pages/index.astro` (the line with `type="file"`), or use a
different form service that accepts files.

## Open items before launch

- **Only one photo exists.** The same marble photo is used for the hero and all
  four material cards. Get real material and project photos from the client.
- **Photos and logo are hot-linked** from `rjsstonetops.com/wp-content/uploads/...`.
  Download them into `public/images/` and change the links in `src/data/site.js`
  to `/images/your-file.jpg`, so the site doesn't depend on the old website.
- **Quote form** needs a Formspree URL (see above), and a decision on the file upload field.
- Check the domain in `astro.config.mjs` (`site: 'https://rjsstonetops.com'`) is the final one.

## Undo a change

Every change is saved as a "commit" in git, so nothing is lost.

- See the history: `git log --oneline`
- Undo one commit (makes a new commit that reverses it, safe to push):

```bash
git revert <commit-id>
```
