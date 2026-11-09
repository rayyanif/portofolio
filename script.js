"use strict";

const projects = {
  currency: {
    title: "Currency clustering against the SDR",
    image: "assets/projects/currency-clustering.png",
    alt: "K-means scatterplot of five-year and one-month exchange-rate Z-scores for 155 currencies.",
    size: [2160, 2016],
    summary: "I compared the cost of one Special Drawing Right (SDR) in 155 currencies. A Z-score tells me how far each rate sits from its own average in a given period.",
    tools: ["R", "K-means", "Z-scores", "Cluster diagnostics"],
    question: "Which currencies share similar standardized exchange-rate profiles, and where does the Indonesian rupiah sit among them?",
    method: "I fit K-means to each currency’s five-year and one-month Z-scores. The two-cluster fit had the highest average silhouette among the solutions I tested.",
    findings: ["The two groups contain 60 and 95 currencies. Their average silhouette was 0.4938, indicating moderate separation.", "The rupiah fell in the larger group. Its five-year score was +2.5193 and its one-month score was +1.3437.", "The Indian rupee and Bhutanese ngultrum tied as the rupiah’s nearest neighbors on these two scores. Establishing a shared economic cause would require other evidence."],
    repo: "https://github.com/rayyanif/currency-clustering"
  },
  timeseries: {
    title: "Forecasting the rupiah",
    image: "assets/projects/time-series-anomaly-detection.png",
    alt: "Individuals control chart of ARIMA residuals, highlighting observations outside the two-standard-deviation limits.",
    size: [963, 405],
    summary: "I fit an exchange-rate model to daily IDR per US dollar from 1 January to 28 May 2026. I checked the days when the observed rate was unusually far from the fit.",
    tools: ["R", "ARIMA", "Forecasting", "Control charts"],
    question: "What does the exchange-rate model miss, and which residuals deserve a closer look?",
    method: "Of the ten models I compared on 148 observations, ARIMA(0,1,3) with drift had the lowest AIC and BIC. I plotted the observed rate minus the fitted rate and drew limits two sample standard deviations above and below the mean error.",
    findings: ["Five errors fell below the lower limit, on 22 January, 23 and 25 February, and 10 and 25 March. Four exceeded the upper limit, on 29 April and 12, 18 and 26 May.", "The 30-step forecast has wider prediction intervals at longer horizons.", "The flags identify dates for investigation. Measuring forecast accuracy on new dates requires a separate test. Linking a crossing to a market event would require independent evidence."],
    repo: "https://github.com/rayyanif/time-series-anomaly-detection"
  },
  hantavirus: {
    title: "Hantavirus outcome modeling",
    image: "assets/projects/hantavirus-outcome-logit.png",
    alt: "Holdout confusion matrices comparing the default 0.50 cutoff with the training-derived Youden cutoff.",
    size: [1980, 1320],
    summary: "I fit a logistic regression for recovery, then counted how many deaths the model missed at two different cutoffs.",
    tools: ["R", "Logistic regression", "ROC / PR evaluation", "Threshold analysis"],
    question: "How does a classification cutoff change the balance between missed deaths and false alerts?",
    method: "I used 7,999 records for training and held out 2,001 for evaluation. The final model uses severity and syndrome. I selected the second cutoff on the training data and compared it with the default on the held-out cases.",
    findings: ["The model’s ROC AUC on the held-out records was 0.8654.", "The default 0.50 recovery cutoff flagged 91 of 213 deaths and 69 recovered patients. The training-derived cutoff of about 0.9321 flagged 169 deaths and 349 recovered patients.", "This exploratory comparison covers one workbook. Clinical use would require a separate validation cohort and a defined time for making each prediction."],
    repo: "https://github.com/rayyanif/hantavirus-outcome-logit"
  },
  library: {
    title: "Library management system",
    image: "assets/projects/sistem-perpustakaan-demo.png",
    alt: "Book-management screen with a library catalogue and navigation for loans, fines, and members.",
    size: [1917, 1077],
    summary: "A PHP and MySQL/MariaDB library application connecting a public book catalogue with staff workflows.",
    tools: ["PHP", "SQL", "MySQL / MariaDB", "Database design"],
    question: "How can book records, members, and lending transactions be organized into a usable library workflow?",
    method: "The PHP application connects books and members with loans, returns, and fines in MySQL or MariaDB. The repository includes the SQL schema and setup steps.",
    findings: ["The public demo lets a visitor search four fictional books and filter by availability.", "The screenshot shows the staff interface in the full application. Recording loans and returns requires running PHP with the database configured."],
    repo: "https://github.com/rayyanif/sistem-perpustakaan-demo",
    demo: "https://rayyanif.github.io/sistem-perpustakaan-demo/"
  }
};

const certificateData = {
  analysis: { title: "Data Analysis", image: "assets/certificates/data-analysis.png", pdf: "assets/certificates/data-analysis.pdf", hours: 16, courses: 16 },
  science: { title: "Data Science", image: "assets/certificates/data-science.png", pdf: "assets/certificates/data-science.pdf", hours: 18, courses: 18 }
};

const navLinks = [...document.querySelectorAll(".nav-links a")];
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");
function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navLinks.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".navigation")) closeMenu();
});
matchMedia("(min-width: 800px)").addEventListener("change", closeMenu);

const sections = [...document.querySelectorAll("main > section[id]")];
let scrollQueued = false;
function updateNavigation() {
  const threshold = Math.min(innerHeight * .4, 250);
  let current = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section.id;
  }
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 15) current = "contact";
  navLinks.forEach(link => {
    const active = link.hash === `#${current}`;
    link.classList.toggle("is-current", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollQueued = false;
}
addEventListener("scroll", () => {
  if (!scrollQueued) {
    scrollQueued = true;
    requestAnimationFrame(updateNavigation);
  }
}, { passive: true });
updateNavigation();

const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
  });
  updateNavigation();
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", event => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activateTab(tabs[next]);
    tabs[next].focus();
  });
});

document.querySelectorAll("[data-view-projects]").forEach(link => {
  link.addEventListener("click", () => activateTab(document.getElementById("tab-projects")));
});

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
let dialogTrigger = null;
function showDialog(dialog, trigger) {
  dialogTrigger = trigger;
  dialog.showModal();
  dialog.scrollTop = 0;
}
document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("close", () => {
    if (document.activeElement === document.body && dialogTrigger?.isConnected) {
      dialogTrigger.focus({ preventScroll: true });
    }
  });
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});
document.querySelectorAll("[data-close-dialog]").forEach(button => {
  button.addEventListener("click", () => document.getElementById(button.dataset.closeDialog).close());
});

function requestsAlternateNavigation(event) {
  return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0;
}

document.querySelectorAll("[data-project]").forEach(link => {
  link.setAttribute("aria-haspopup", "dialog");
  link.addEventListener("click", event => {
    const project = projects[link.dataset.project];
    if (!project || requestsAlternateNavigation(event)) return;
    event.preventDefault();
    const content = document.getElementById("project-dialog-content");
    content.replaceChildren();
    const grid = element("div", "dialog-project-grid");
    const copy = element("div", "dialog-project-copy");
    const title = element("h2", "", project.title);
    title.id = "project-dialog-title";
    copy.append(title, element("p", "", project.summary));
    const tags = element("div", "dialog-tags");
    project.tools.forEach(tool => tags.append(element("span", "", tool)));
    copy.append(tags);
    const imageBox = element("div", "dialog-project-image");
    const image = element("img");
    image.src = project.image;
    image.alt = project.alt;
    [image.width, image.height] = project.size;
    imageBox.append(image);
    watchImage(image);
    grid.append(copy, imageBox);
    content.append(grid);
    for (const [heading, text] of [["The question", project.question], ["The approach", project.method]]) {
      const note = element("section", "project-note");
      note.append(element("h3", "", heading), element("p", "", text));
      content.append(note);
    }
    const findings = element("section", "project-note");
    findings.append(element("h3", "", project.demo ? "What you can try" : "Results"));
    const list = element("ul");
    project.findings.forEach(finding => list.append(element("li", "", finding)));
    findings.append(list);
    content.append(findings);
    const actions = element("div", "dialog-actions");
    const repository = element("a", "button button-primary", project.demo ? "View library source on GitHub" : "Read the full analysis on GitHub");
    repository.href = project.repo + "#readme";
    repository.target = "_blank";
    repository.rel = "noopener noreferrer";
    actions.append(repository);
    if (project.demo) {
      const demo = element("a", "button button-outline", "Search the demo catalogue");
      demo.href = project.demo;
      demo.target = "_blank";
      demo.rel = "noopener noreferrer";
      actions.append(demo);
    }
    content.append(actions);
    showDialog(document.getElementById("project-dialog"), link);
  });
});

let selectedCertificate = 0;
const certificateCards = [...document.querySelectorAll("[data-cert-card]")];
const certificateDots = [...document.querySelectorAll("[data-cert-select]")];
function selectCertificate(index) {
  selectedCertificate = (index + certificateCards.length) % certificateCards.length;
  certificateCards.forEach((card, i) => {
    card.classList.toggle("is-active", i === selectedCertificate);
    card.classList.toggle("is-next", i > selectedCertificate);
    card.classList.toggle("is-previous", i < selectedCertificate);
    const preview = card.querySelector(".certificate-image");
    const title = certificateData[preview.dataset.certificate].title;
    preview.tabIndex = i === selectedCertificate ? 0 : -1;
    preview.setAttribute("aria-label", `${i === selectedCertificate ? "Enlarge" : "Select"} ${title} certificate`);
  });
  certificateDots.forEach((dot, i) => {
    dot.classList.toggle("is-active", i === selectedCertificate);
    if (i === selectedCertificate) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
  document.getElementById("certificate-status").textContent = `${selectedCertificate + 1} of ${certificateCards.length}`;
}
document.getElementById("cert-prev").addEventListener("click", () => selectCertificate(selectedCertificate - 1));
document.getElementById("cert-next").addEventListener("click", () => selectCertificate(selectedCertificate + 1));
certificateDots.forEach(dot => dot.addEventListener("click", () => selectCertificate(Number(dot.dataset.certSelect))));
document.querySelector(".certificate-carousel").addEventListener("keydown", event => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  selectCertificate(selectedCertificate + (event.key === "ArrowRight" ? 1 : -1));
  if (event.target.closest("[data-cert-card]")) {
    certificateCards[selectedCertificate].querySelector(".certificate-image").focus({ preventScroll: true });
  }
});
document.querySelectorAll("[data-certificate]").forEach(button => {
  button.addEventListener("click", event => {
    if (requestsAlternateNavigation(event)) return;
    event.preventDefault();
    const cardIndex = Number(button.closest("[data-cert-card]").dataset.certCard);
    if (cardIndex !== selectedCertificate) {
      selectCertificate(cardIndex);
      return;
    }
    const certificate = certificateData[button.dataset.certificate];
    document.getElementById("certificate-dialog-title").textContent = certificate.title;
    const image = document.getElementById("certificate-dialog-image");
    image.src = certificate.image;
    image.alt = `MySkill ${certificate.title} specialization certificate awarded to Rayyan Ilyas Fadani, 7 October 2026.`;
    document.getElementById("certificate-dialog-description").textContent = `MySkill · ${certificate.hours} hours · ${certificate.courses} courses · 7 October 2026`;
    document.getElementById("certificate-download").href = certificate.pdf;
    watchImage(image);
    showDialog(document.getElementById("certificate-dialog"), button);
  });
});

function watchImage(image) {
  if (image.dataset.watched) return;
  image.dataset.watched = "true";
  const isLogo = image.classList.contains("tool-logo");
  const message = element("span", isLogo ? "image-feedback logo-feedback" : "image-feedback", isLogo ? "Loading logo…" : "Loading preview…");
  message.setAttribute("role", "status");
  image.after(message);
  if (isLogo) message.hidden = true;
  function loaded() {
    image.hidden = false;
    message.hidden = true;
  }
  function failed() {
    image.hidden = true;
    message.hidden = false;
    message.textContent = isLogo ? "Logo unavailable" : "Preview unavailable. Open the original document or repository to view the source.";
  }
  image.addEventListener("load", loaded);
  image.addEventListener("error", failed);
  if (image.complete) {
    if (image.naturalWidth > 0) loaded();
    else failed();
  }
}
document.querySelectorAll("img").forEach(watchImage);
selectCertificate(0);
document.documentElement.classList.remove("static-page");
document.getElementById("footer-year").textContent = new Date().getFullYear();
