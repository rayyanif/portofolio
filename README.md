# Rayyan Ilyas Fadani · Portfolio

A complete static portfolio built around your supplied projects, certificates, biography, and social profiles. The entry point is **index.html**. No package installation, build step, account, or API key is required.

## Open the website

Double-click `index.html` to open it in a modern browser. Keep `styles.css`, `script.js`, and the `assets` folder beside it. All images, fonts, and certificate PDFs are local; interactive sections work without an internet connection. Internet access is needed only when following external project, demo, or social links.

For a local server, run the following from this folder if Python is installed:

```text
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Included

- Reference A's overall structure: floating navigation, split hero with an identity card, About, summary counts, a tabbed portfolio, and Contact.
- Reference B's certificate presentation: centered focused card, receding neighbor, pagination, previous/next controls, and keyboard support. No automatic advancement.
- A dithered visual treatment, using the supplied design direction, locally bundled fonts, a dot-shaded mathematical surface, and a typographic card. No personal photo is used.
- Four project cards with detailed project-note dialogs, repository links, and a catalogue-demo link for the library system.
- Both original MySkill PDFs, preview images, enlarged views, and PDF downloads.
- Nine tools with your supplied local logos: R, Python, SQL, Power BI, SPSS, Minitab, Word, Excel, and PowerPoint.
- LinkedIn, GitHub, and Instagram links, plus the supplied Universitas Padjadjaran biography.
- Your original CV PDF, available through **Download CV** beneath the About heading, beside **View project**.
- Responsive layouts, visible keyboard focus, arrow-key tabs, Escape-to-close dialogs, a mobile menu, and reduced-motion support.

## Files

```text
index.html                   Main page and portfolio content
styles.css                   Layout, typography, responsive states
script.js                    Tabs, project notes, carousel, dialogs
assets/
  documents/                 Your downloadable CV PDF
  projects/                  Your four original project images
  certificates/              Original PDFs and rendered preview images
  fonts/                     Local fonts and their open-source licenses
  tools/                     Your nine supplied tool logos
docs/
  DESIGN-DECISIONS.md         Visual direction and reasons for choices
  CONTENT-SOURCES.md          Content provenance and update notes
  QA-REPORT.md                Checks, click-through, and limitations
  previews/                  Browser screenshots
  ...                        Supplied design files and public source snapshots
```

## Edit your content

- **Biography, social profiles, project card summaries, tools:** edit `index.html`.
- **CV:** replace `assets/documents/rayyan-ilyas-fadani-cv.pdf` to update the download without changing its link.
- **Detailed project notes and repository URLs:** edit the `projects` object at the beginning of `script.js`.
- **Certificate names, hours, and file paths:** update `certificateData` in `script.js` and the corresponding certificate cards in `index.html`.
- **Colors, spacing, fonts:** edit the variables and styles in `styles.css`.
- **Add a new project:** add its card in `index.html`, add a matching key in the `projects` object, and place its image in `assets/projects`. Update the visible project count.

The project content is bundled, so the page does not depend on GitHub's API and does not automatically change when a repository is updated.

## Publish when ready

Upload this folder's website files to a static host, or copy them into the root of a GitHub Pages repository and enable Pages for that branch. Preserve the relative asset paths. The `docs` directory is supporting documentation and can be excluded from deployment.

No deployment or modification to your existing GitHub repositories was performed. Social sites may show their own login screens after a visitor follows a link. The portfolio itself has no login, password fields, camera access, tracking scripts, or form submissions.

See `docs/QA-REPORT.md` for the actual checks performed. No Lighthouse or field-performance score is claimed.
