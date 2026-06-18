(function () {
  const regionalLanguageCodes = {
    bengali: "bn",
    gujarati: "gu",
    hindi: "hi",
    kannada: "kn",
    malayalam: "ml",
    marathi: "mr",
    odia: "or",
    tamil: "ta",
    telugu: "te"
  };

  function currentCourse() {
    if (document.body.dataset.course) return document.body.dataset.course;
    return location.pathname.toLowerCase().endsWith("/kannada.html") ? "kannada" : "";
  }

  function setDocumentLanguage() {
    const course = currentCourse();
    const regionalButton = document.querySelector('[data-text-mode]:not([data-text-mode="en"])');
    document.documentElement.lang = regionalButton?.classList.contains("active")
      ? regionalLanguageCodes[course] || "en"
      : "en";
  }

  function enhanceDynamicContent(root = document) {
    root.querySelectorAll(".section-quiz-feedback, .writing-feedback, .proof-feedback").forEach((element) => {
      element.setAttribute("role", "status");
      element.setAttribute("aria-live", "polite");
      element.setAttribute("aria-atomic", "true");
    });

    root.querySelectorAll(".single-practice-body").forEach((element) => {
      element.setAttribute("role", "group");
      element.setAttribute("aria-live", "polite");
      element.setAttribute("aria-atomic", "true");
    });

    root.querySelectorAll(".language-toggle").forEach((toggle) => {
      toggle.setAttribute("role", "group");
      toggle.querySelectorAll("button").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.classList.contains("active")));
      });
    });

    root.querySelectorAll("[data-chart-filter]").forEach((button) => {
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(button.classList.contains("active")));
      button.setAttribute("tabindex", button.classList.contains("active") ? "0" : "-1");
    });

    setDocumentLanguage();
  }

  function setupDialog() {
    const modal = document.querySelector("#summaryModal");
    if (!modal) return;
    let returnFocus = null;

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-summary]");
      if (trigger) returnFocus = trigger;
    }, true);

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Tab" || modal.hidden) return;
      const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
        .filter((element) => !element.hidden);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    new MutationObserver(() => {
      if (modal.hidden && returnFocus?.isConnected) {
        returnFocus.focus();
        returnFocus = null;
      }
    }).observe(modal, { attributes: true, attributeFilter: ["hidden"] });
  }

  function setupSkipLink() {
    const main = document.querySelector("main");
    if (!main || document.querySelector(".skip-link")) return;
    if (!main.id) main.id = "main-content";
    main.setAttribute("tabindex", "-1");
    const link = document.createElement("a");
    link.className = "skip-link";
    link.href = `#${main.id}`;
    link.textContent = "Skip to main content";
    document.body.prepend(link);
    link.addEventListener("click", () => main.focus());
  }

  function setupSandboxDescription() {
    const input = document.querySelector("#kannadaInput");
    if (!input || document.querySelector("#sandboxHelp")) return;
    const help = document.createElement("p");
    help.id = "sandboxHelp";
    help.className = "sr-only";
    help.textContent = "Enter text. The corresponding Bharati Braille appears after this field and is available to a screen reader and refreshable Braille display.";
    input.insertAdjacentElement("afterend", help);
    input.setAttribute("aria-describedby", help.id);
    document.querySelector("#brailleOutput")?.setAttribute("role", "status");
    document.querySelector("#brailleOutput")?.setAttribute("aria-live", "polite");
  }

  function addBrailleDisplayNotice() {
    if (!currentCourse() || document.querySelector("#brailleDisplayNotice")) return;
    const heading = document.querySelector("#hero-title");
    if (!heading) return;
    const notice = document.createElement("p");
    notice.id = "brailleDisplayNotice";
    notice.className = "sr-only";
    notice.textContent = "Refreshable Braille display users: each visual Braille cell is followed by its Unicode Braille character and dot numbers. Use your screen reader's reading and routing commands to explore lessons and exercises.";
    heading.insertAdjacentElement("afterend", notice);
  }

  function initializeAccessibility() {
    setupSkipLink();
    setupDialog();
    setupSandboxDescription();
    addBrailleDisplayNotice();
    enhanceDynamicContent();

    document.addEventListener("keydown", (event) => {
      const current = event.target.closest("[data-chart-filter]");
      if (!current || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const tabs = [...document.querySelectorAll("[data-chart-filter]")];
      const index = tabs.indexOf(current);
      let nextIndex = index;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      event.preventDefault();
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) enhanceDynamicContent(node);
        });
      });
      enhanceDynamicContent();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAccessibility);
  } else {
    initializeAccessibility();
  }
}());
