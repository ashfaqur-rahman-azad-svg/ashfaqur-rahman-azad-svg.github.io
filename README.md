# UX Portfolio

Built with [Astro](https://astro.build), hosted free on GitHub Pages. Every push to `main` rebuilds and publishes the site in about two minutes.

## Where things live

| What | Where |
|---|---|
| Your name, email, links, resume | `src/site.config.ts` |
| Case studies | `src/content/projects/<project-name>/index.md` + its images |
| Screen designs | `src/content/screens/<design-name>/index.md` + its images |
| About page text | `src/pages/about.astro` |
| Colors, type, spacing | `src/styles/tokens.css` |

## Add a case study

1. Copy the folder `src/content/projects/sample-case-study-one` and rename it, for example `food-delivery-checkout`. The folder name becomes the web address: `/work/food-delivery-checkout`.
2. Replace the PNGs with your own. Export from Figma at **2x**, PNG. Don't compress them yourself; the build makes AVIF and WebP versions at every screen size with no visible quality loss.
3. Edit `index.md`. The part between the two `---` lines is the project info (title, role, summary, metrics). Below it is the case study, written in plain Markdown:
   - `## Heading` for a section (these build the "On this page" menu)
   - `![What the image shows](./my-image.png)` for an image
   - `*Caption text*` on the line after an image for a caption
   - `> quote` for a user quote
4. Set `order: 1` for the project you want first.
5. Delete the sample folders when your real projects are in.

**Writing it in Google Docs or Notion first?** Paste it below the `---` lines and fix the headings to `##`.

## Add an interactive prototype

1. In Figma, open the prototype, click **Share prototype**, set access to **Anyone with the link can view**, and copy the link.
2. In the case study's `index.md`, under `prototypes:`, add:

```yaml
prototypes:
  - title: Checkout flow
    url: https://www.figma.com/proto/....   # the link you copied
    device: mobile                          # or desktop
```

Visitors see a "Load prototype" button. Figma loads only when they click it, so the page stays fast.

## Add a screen design

Copy `src/content/screens/sample-mobile-app`, rename it, swap the images, and edit `index.md`. Each image needs an `alt` line describing it, so screen-reader users (and Google) know what it shows. The build stops with a clear message if one is missing.

## Hide something without deleting it

Set `draft: true`. It stays visible in your local preview and disappears from the live site.

## Editing without installing anything

On github.com, open the repository, go to the folder, then **Add file > Upload files** to drag in a whole project folder, or click any file and the pencil icon to edit it. Commit, and the site updates in about two minutes. The **Actions** tab shows whether the build passed; a red X means a field is missing, and clicking it shows which one.

## Previewing on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:4321. Changes appear as you save.
