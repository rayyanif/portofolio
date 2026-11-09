# Design decisions

Anti Slop mode: **during**, explicitly selected by the user for this session.

Reading this as: a personal statistics portfolio for recruiters, research collaborators, and people reviewing analytical work, using Reference A's dark spatial layout, Reference B's credential display, and the supplied dithered visual direction. **ENERGY 3 / RHYTHM 3 / MOTION 2**.

## Direction and foundations

The supplied `dithered/SKILL.md` and `dithered/DESIGN.md` establish a limited-palette dot treatment, Space Grotesk display type, Open Sans body type, IBM Plex Mono labels, explicit interaction states, and accessible contrast. The font choices are retained. Blue is retained as the single interface accent. The neutral foundation is adapted to the explicitly requested dark Reference A layout; the other semantic colors are not needed in this site.

| Decision | Reason |
| --- | --- |
| Near-black background, off-white text | Preserves Reference A's overall atmosphere and gives the supplied analytical charts a distinct foreground. |
| Light blue `#8BB4FF` text/accent | A lighter derivative of the supplied `#3B82F6` supports contrast on dark surfaces. No blue-purple gradient is used. |
| Space Grotesk headings | The broad geometric forms connect the dithered direction to the large role heading in Reference A. |
| Open Sans body copy | Long project notes need readable, familiar letterforms at smaller sizes. |
| IBM Plex Mono metadata | Aligns section indices, methods, and counts without turning the main copy into a terminal imitation. |
| Fine grid only behind the opening | Refers to statistical coordinates and the chosen Reference A, then fades to avoid competing with project plots. |
| Ordered dither dots | Dot sizes shade a mathematical surface and repeat inside the identity card, giving the requested dithered direction a specific motif. |
| Text-only identity card | Replaces the reference portrait while honoring the user's instruction that no personal photo is needed. The card is a typographic composition, not a real credential. |
| Brief initial card swing | References the suspended badge without an endless animation competing with reading. It settles within 2.8 seconds. |
| Fixed dark theme | The user explicitly selected Reference A's dark layout. A second, unrequested theme would add a separate design scope. |
| Floating rounded navigation | Carries over the requested reference and separates persistent navigation from page content. |
| 4 / 2 / 9 summary counts | Counts the four supplied project images, two PDFs, and nine tools with owner-supplied logos. No invented experience or audience metrics. |
| Two-column project cards | Four actual projects fit a readable 2×2 desktop arrangement; phone cards stack and charts remain visible. |
| Contained original charts | Preserves axes, annotations, and original data colors instead of recoloring evidence into the interface palette. |
| Project-note dialogs | Provide the question, approach, findings, and source without needing a server or additional routes. |
| Centered credential focus | Adapts Reference B to two genuine certificates without duplicating cards to simulate a larger collection. |
| Manual carousel | Keeps document reading stable and provides clear previous/next and pagination controls. |
| Different corner treatments | The header is a pill, cards use 8–12px radii, supplied tool logos retain their original shapes, and directional carousel controls are circular. |
| Supplied tool logos | Uses the nine supplied tool identities without cropping their shapes. SPSS uses a transparent-background variant documented in `ASSET-EDITS.md`. Tools without a supplied logo are omitted. |
| Selective shadows | Only the floating header, suspended card, and modal need elevation; most content surfaces remain flat. |
| External-link arrows | Mark links that leave the portfolio. Downward arrows mark in-page movement; project dialogs use a plus. |
| Direct social contact | The user supplied three social profiles but no email endpoint. Real links provide contact without a nonfunctional form. |
| No copied comments | The references' sample comments are not the user's content, so none are fabricated. |
| About actions | Download CV and View project sit beneath the About heading in place of the repeated university label. The resume is local, and View project selects Projects before scrolling to the portfolio. |
| Local fonts and assets | Keeps the delivered folder independent of font CDNs, runtime data APIs, and package installation. |

## Component behavior

- Main navigation follows visible sections; the menu collapses at widths below 800px.
- Portfolio tabs support click, Left/Right, Home, and End with a roving keyboard tab stop.
- Dialogs use native `dialog` and `showModal`, restore focus, close with Escape or Close, and accept a backdrop click outside their bounds.
- Certificate previews use original rendered PDF pages. PDF links and downloads point to unchanged copies of the supplied PDFs.
- On a narrow screen, only the selected certificate is shown; previous/next and pagination remain available.
- Image loading has a reserved layout, loading feedback where applicable, and a text fallback on failure. Image failure does not remove source links.
- No continuous movement runs. The decorative canvas draws once, and reduced motion removes entrance and transition animations.

## Content tone

Keep personal copy direct and first-person. Describe methods and questions rather than claiming expertise levels, employment history, or impact metrics. Project findings cite repository READMEs and keep the limitations of their analyses attached.
