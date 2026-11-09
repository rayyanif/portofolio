# Portfolio checks

Checked on 9 November 2026. Anti Slop was applied during design and implementation, using the user's explicit reference choices and dithered files. The scope is the complete local static website, not a deployment.

## Results

| Check | Result | Evidence |
| --- | --- | --- |
| Local execution | PASS | Served with a local HTTP server; the main page returned HTTP 200. |
| JavaScript syntax | PASS | `node --check script.js` completed successfully. |
| Local assets and anchors | PASS | `verify_site.py` found no missing HTML, CSS, or JavaScript asset paths; no missing anchor targets; no empty or `#` links. |
| HTML structure | PASS | One `h1`, unique IDs, language, viewport, description, header/nav/main/footer landmarks, and labeled dialogs. |
| Original certificates | PASS | SHA-256 comparisons confirm that both copied PDFs match the supplied originals. |
| Image dimensions | PASS | Every HTML image has width, height, and alt attributes. Dynamic project images receive those values in JavaScript. |
| Responsive page width | PASS | Each Projects / Certificates / Tools state had `scrollWidth == clientWidth` at 320, 390, 768, 1024, and 1440px viewport widths. |
| Phone layout | PASS | Single-column hero and projects, compact labeled menu, two-column tool grid, single active certificate, readable modal, no page-width overflow. |
| Tablet layout | PASS | Dedicated stacked hero below 900px; two-column About/project composition where space permits; three-column tools on tablet and desktop. |
| Console | PASS | Browser developer logs returned no errors or warnings during the local interaction checks. |
| Photos | PASS | No personal photo or downloaded profile avatar is included in the delivered site. |
| Runtime dependencies | PASS | Local stylesheet, deferred local JavaScript, local fonts, local project images, local certificate previews and PDFs. No runtime API or package installation. |
| Camera/password features | PASS | No password input, login flow, `getUserMedia`, or `mediaDevices` use in the page or script. |

The underlying recorded results are in `static-checks.json` and `previews/browser-checks.json`.

### Tool-logo update

- PASS: Nine owner-supplied logos load successfully, one for each displayed tool. Images preserve their original aspect ratios and have reserved dimensions.
- PASS: SmartPLS, LaTeX, and Canva are omitted from the tools section because no corresponding logos were supplied.
- PASS: The summary and Tools tab both show `09`.
- PASS: Tools layout has no horizontal overflow at 320, 390, 768, and 1280px; all nine logos were loaded at each size.
- PASS: Browser console has no errors or warnings during these checks.
- PASS: Tool names remain visible text; duplicate decorative logos use empty alt text, and unavailable logos have a text fallback.
- PASS: The SPSS card uses `spss-transparent.png`; transparent alpha was verified and the circular logo was visually checked on its dark card.

Current logo checks are recorded in `previews/tools-update-checks.json`. The earlier full-site interaction record predates this focused update.

## Interaction checks

### CV download update

- PASS: The supplied resume was copied unchanged into `assets/documents/rayyan-ilyas-fadani-cv.pdf`, confirmed by matching SHA-256 hashes.
- PASS: The About section's CV link completed a browser download as `Rayyan-Ilyas-Fadani-CV.pdf`. Its current label is **Download CV**.
- PASS: The download action is a native link with a 48px-high button; About actions wrap on phones, with no page-width overflow at 390px.
- PASS: No browser errors or warnings were reported during the CV check. The updated About preview is `previews/about-cv.jpg`.
- PASS: Download CV and View project now sit beneath the About heading, replacing the repeated university label. The longer analysis link is removed. Download CV was retested, and View project switches from Certificates to Projects before navigating to `#portfolio`; the 390px layout has no horizontal overflow.

| Control | Observed result |
| --- | --- |
| Brand / Home | Navigates to `#home`. |
| About navigation | Navigates to `#about`. |
| Portfolio navigation | Navigates to `#portfolio`. |
| Contact navigation | Navigates to `#contact`. |
| Phone Menu | Opens the navigation; choosing a section closes it. |
| Menu + Escape | Closes the menu and restores focus to its button; `aria-expanded` becomes false. |
| Scroll to meet me | Targets About. |
| About's work link | Targets Portfolio. |
| Back to top | Targets Home. |
| Projects tab | Shows the four project cards and hides the other panels. |
| Certificates tab | Shows the manual certificate carousel. |
| Tools tab | Shows the nine tools with owner-supplied logos. |
| Tab keyboard Home | Activates Projects and focuses its tab. |
| Tab keyboard Right | Moves from Projects to Certificates. Left/End are implemented with the same roving-tab pattern and inspected in source. |
| Currency image button | Opens Currency clustering against the SDR notes. |
| Time-series image button | Opens Time-series anomaly detection notes. |
| Hantavirus image button | Opens Hantavirus outcome modeling notes. |
| Library image button | Opens Library management system notes. |
| Four project text buttons | Each opens its corresponding project notes. |
| Project Close button | Closes the notes dialog. |
| Project Escape | Closes the dialog and restores focus to its opener. |
| Certificate Next | Changes the status from `01 / 02` to `02 / 02`. |
| Certificate Previous | Changes the status back to `01 / 02`. |
| First pagination control | Selects Data Analysis. |
| Second pagination control | Selects Data Science. |
| Carousel Right/Left keys | Advance and return the selected certificate. |
| Data Analysis preview | Opens an enlarged certificate with correct title and 16-hour / 16-course details. |
| Data Science preview | Opens an enlarged certificate with correct title and 18-hour / 18-course details. |
| Certificate Close button / Escape | Both close the certificate dialog. |
| Data Analysis Download PDF | Browser download completed as `data-analysis.pdf`. |
| Data Science Download PDF | Browser download completed as `data-science.pdf`. |
| Original PDF links | Relative paths checked against the intact local PDFs. |
| LinkedIn social link | Opens LinkedIn; the service redirects unauthenticated visitors to its own sign-in wall. No sign-in was attempted. |
| GitHub social link | Opens the public `rayyanif` profile. |
| Instagram social link | Opens Instagram; the service redirects unauthenticated visitors to its own login page. No sign-in was attempted. |
| Catalogue demo link | Opened the `Demo Katalog / Perpustakaan Terpadu` page at the repository's documented GitHub Pages URL. |
| Project repository and README links | Inspected against the public repository metadata and downloaded READMEs. Further external browsing stopped after the user questioned social login screens; no external accounts or permissions were used. |

## Contrast and accessibility checks

Calculated with the WCAG relative-luminance formula:

| Foreground / background | Ratio | Use |
| --- | --- | --- |
| `#F2F3F0` / `#101113` | 16.96:1 | Main text |
| `#B0B4BD` / `#101113` | 9.09:1 | Supporting copy |
| `#979DA8` / `#191B1F` | 6.33:1 | Muted panel labels |
| `#8BB4FF` / `#101113` | 9.06:1 | Accent text and focus |
| `#101113` / `#8BB4FF` | 9.06:1 | Primary-button text |
| `#777F8E` / `#191B1F` | 4.28:1 | Control outlines, exceeding 3:1 non-text contrast |

Native buttons and links are used, controls have names, image buttons have explicit labels, and hover-only information is not needed to operate the page. Focus outlines are retained. Native modal dialogs provide modal focus containment, and focus restoration was observed. Interactive controls use at least 44px touch areas; icon glyphs may be smaller inside those areas.

The decorative canvas is hidden from assistive technology. It draws once. The initial desktop badge animation lasts 2.8 seconds; phone screens use a settled card. Reduced-motion CSS disables animations and transitions and removes smooth scrolling. No autoplay carousel or endless animation is included.

These are implementation and browser checks, not a full third-party WCAG conformance audit. No Lighthouse score or field Web Vitals number was measured or claimed.

## Anti Slop delivery gate

The following reports the applied gate for this site, with concrete evidence and exclusions where a pattern is absent.

- **R-02 PASS:** Agent-written UI copy avoids em dashes and unsupported marketing claims; the title uses a vertical bar.
- **R-03 PASS:** Five viewport widths and all three portfolio panels were measured without horizontal overflow; navigation and content reflow.
- **R-17 PASS:** 4 projects, 2 certificates, and 9 tools are direct content counts; analytical results are tied to repository READMEs.
- **R-18 PASS:** No testimonials or invented reviewers.
- **R-23 PASS:** User-selected references and dithered direction are used; no personal photo; identity is typographic.
- **R-24 PASS:** All in-page navigation targets exist and are checked by the asset verifier.
- **R-25 PASS:** Text/control token pairings were calculated; main text ratios exceed 4.5:1, and control outlines exceed 3:1.
- **R-26 PASS:** Local buttons perform tabs, navigation, modal, carousel, or download actions; external controls have genuine source destinations.
- **R-27 PASS:** Content is bundled rather than asynchronously fetched. Images reserve space and have loading feedback plus a source-preserving error fallback. No fake loading or empty data screen is presented for the fixed dataset.
- **R-28 PASS:** No speculative FAQ.
- **R-32 PASS:** Keyboard tabs, Escape closing, mobile-menu Escape, native modal containment, focus outlines, and focus restoration are implemented; the exercised results are recorded above.
- **R-33 PASS:** UI is implemented directly in HTML/CSS/JavaScript; no external file-rewriting script implements features. The optional Python verifier only reads source and writes its check report.
- **R-34 PASS:** One explicitly requested dark visual direction is shipped; no incomplete second theme.
- **R-35 PASS:** Site served locally, console checked, local widgets exercised, PDF downloads completed, viewport checks recorded. External-link verification is scoped as stated above.
- **R-36 PASS:** No invented employment, testimonials, performance scores, or product-impact metrics.
- **R-37 PASS:** Reference A, Reference B, and dithered direction were read; dials and one-line purposes are in `DESIGN-DECISIONS.md`.
- **R-38 PASS:** Biography and tools come from the user; project evidence comes from the supplied assets and public repositories; certificate details come from the PDFs.
- **R-39 PASS:** Landmarks, one h1, native controls, accessible names, dimensions, pointer/focus states, and reduced-motion styles are present. No unlabeled form fields.
- **R-40 PASS:** Media dimensions reserve space; there is no hero bitmap to fetch; fonts are local and the only script is local and deferred. Performance scores are not claimed.
- **R-01 PASS:** One blue accent derived from the supplied palette; no generic colored glow background or blue-purple gradient.
- **R-04 PASS:** Symbols identify specific actions or services; tools use the owner's supplied logos and their text names.
- **R-06 PASS:** Display/body/metadata fonts each have a documented readability or identity purpose.
- **R-07 PASS:** The opening grid refers to statistical coordinates and Reference A; dither dots are the explicitly requested identity motif.
- **R-08 PASS:** Down arrows mark in-page movement and diagonal arrows mark external destinations; project notes use a plus.
- **R-09 PASS:** No fabricated status or promotional badges.
- **R-10 PASS:** Backdrop blur is confined to the modal backdrop, not spread across every surface.
- **R-12 PASS:** Shadows mark the floating navigation, suspended card, and modal; ordinary content stays flat.
- **R-13 PASS:** No repeated glow system across page elements.
- **R-14 PASS:** Project cards share a format because they represent the same content type; biography, counts, tools, certificates, and contact use other compositions.
- **R-19 PASS:** Brief entrance and state transitions have documented purposes; no endless decorative animation.
- **R-22 PASS:** Supplied analytical images are used as evidence; no stock illustration or invented portrait.
- **R-05 PASS:** Structure follows the requested references and actual portfolio content; no filler pricing, FAQ, or logo bar.
- **R-11 PASS:** Header pill, restrained card radii, rectangular text actions, and circular directional controls have distinct roles.
- **R-15 PASS:** Actions name their purpose: View my work, Read project, Open original PDF, Download PDF, and Connect on LinkedIn.
- **R-16 PASS:** No generic promotional superlatives or AI slogans.
- **R-20 PASS:** Dithered type card, statistical project imagery, and the user's own academic identity connect the design to this portfolio.
- **R-21 PASS:** Dark mode follows the user's explicit Reference A direction.
- **R-29 PASS:** Neutral interface palette plus blue accent; project charts and certificate originals retain source colors.
- **R-30 PASS:** The layout follows the user's selected reference direction, adapted to the supplied portfolio content.
- **R-31 PASS:** Major visual and content decisions each have a one-line reason in `DESIGN-DECISIONS.md`.
- **Liveliness PASS:** ENERGY 3 / RHYTHM 3 / MOTION 2; a dominant hero, readable About split, varied content panels, and a consistent dithered motif.
- **Craft PASS:** Native local interactions work, supplied evidence is preserved, and no account flow or unimplemented form is included.

## Verification limits

- Direct `file://` navigation is blocked by the preview browser's URL policy, so browser execution was verified over local HTTP. The website uses relative local assets and no runtime fetch, and can be opened by the user in a normal browser using `index.html`.
- OS-level reduced-motion settings and full screen-reader output were not changed or audited; their source-level support is documented.
- Source analytical results were not recomputed. Credentials were read and displayed, not authenticated with the issuer.
- External sites may impose their own login requirements. No password was entered, no camera permission was requested, and the portfolio adds no such feature.
- No hosted deployment or changes to existing repositories were made.
