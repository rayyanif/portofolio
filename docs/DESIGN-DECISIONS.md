# Design decisions

Anti Slop mode is **after**, explicitly selected by the owner for this session. Review proposed changes first and implement the items the owner approves.

The portfolio serves recruiters, research collaborators, and readers of Rayyan's analytical work. Its dark layout, readable typography, and real statistical figures establish the visual direction. **ENERGY 3 / RHYTHM 3 / MOTION 2**.

## Visual decisions

| Decision | Reason |
| --- | --- |
| Near-black background and off-white text | Establish the owner's chosen dark appearance and separate analytical figures from the page. |
| One blue interface accent | Identifies selected controls and important actions. |
| Space Grotesk headings | Gives the specialization and name a clear typographic hierarchy. |
| Open Sans body text | Supports extended project notes and publication descriptions. |
| IBM Plex Mono for numerical labels | Makes dates, measurements, and counts easy to scan. |
| Specialization in the hero, name above the biography | Introduces the work first and connects the biography to its author. |
| Rupiah residual calendar | Grounds the opening in the study's 148 observations and nine flagged dates. |
| Transparent full-width header | Keeps navigation available while showing a glimpse of the content beneath it. |
| Large lead project and illustrated supporting rows | Accommodates different chart proportions and establishes a featured study. |
| Publications as reading entries | Provides room for titles, authors, analysis contributions, and source links. |
| Publication chart capped at its native 892px width | Avoids enlarging the supplied raster beyond its resolution. A caption explains the main observation at smaller sizes. |
| Portrait book cover beside its description | Preserves the cover proportions and connects the image to its subject. |
| Manual certificate carousel | Keeps one credential prominent while letting visitors control reading time. |
| Tools grouped by use | Helps visitors scan programming, analysis, and office software. |
| Cursor glow and small image lifts | Provide the owner's requested pointer feedback. Text links use crisp color and underline feedback. |
| Local fonts, images, and CV | Keeps the static website self-contained. |

## Interaction behavior

- The header hides while scrolling down and returns on a small upward scroll. Navigation scrolls smoothly to its section.
- Portfolio tabs list Projects, Publications, Certificates, and Tools. They support arrow keys, Home, and End. Newly selected content fades in over 180ms.
- Project notes open in native dialogs with a 220ms fade and scale. Close, Escape, and backdrop clicks trigger a 180ms exit, followed by the existing focus restoration.
- Each publication entry is one accessible link covering its image, copy, and padding. It opens the original publication in a new tab.
- The book entry stacks vertically below 700px. The chart shrinks proportionally with its container.
- Certificate previews link to the bundled original PDFs. The CV download uses the bundled resume.
- Contact rows link to email, LinkedIn, GitHub, and Instagram.
- Hover effects are limited to fine pointers. Reduced-motion preferences disable decorative animations and smooth scrolling.
- The cursor glow updates on pointer movement and hides when the pointer leaves or the window loses focus.

## Content and maintenance

Project descriptions explain questions, methods, findings, and limitations using repository evidence. Publication metadata comes from the supplied sources. Rayyan confirmed that he performed all analysis for the article. His book contribution covers only part of the analysis; its exact scope has not been specified. The book description is based on the supplied description image. The hero uses the owner's chosen title, Data Scientist & Data Analyst.

Keep copy concrete and first-person where it describes Rayyan's work. Use original analytical images and supplied tool logos. Maintain the owner's English-only presentation and photo-free layout.

Edit the website folder directly. The owner requested removal of the ZIP archive and asks that future updates do not create or refresh one.

Project links use `#project-currency`, `#project-timeseries`, `#project-hantavirus`, and `#project-library`. Direct entry opens the corresponding dialog. Opening a project adds a browser history entry, and Back or Forward synchronizes the dialog with the address. Closing a directly loaded project returns to `#projects` within the site. Portfolio tabs use `#projects`, `#publications`, `#certificates`, and `#tools` for shareable selection.
