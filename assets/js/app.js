const state = {
  categories: [],
  filtered: []
};

const container = document.querySelector("#commandContainer");
const categoryTemplate = document.querySelector("#categoryTemplate");
const commandTemplate = document.querySelector("#commandTemplate");
const searchInput = document.querySelector("#searchInput");

async function loadData() {
  try {
    const response = await fetch("data/commands.json");
    if (!response.ok) {
      throw new Error(`Failed to load command data (${response.status})`);
    }

    const data = await response.json();
    state.categories = data.categories ?? [];
    state.filtered = [...state.categories];
    renderCategories(state.filtered);
  } catch (error) {
    console.error(error);
    showError("Unable to load Git commands. Please refresh or check your server.");
  }
}

function showError(message) {
  container.innerHTML = "";
  const block = document.createElement("div");
  block.className = "empty-state";
  block.textContent = message;
  container.appendChild(block);
}

function renderCategories(categories) {
  container.innerHTML = "";

  if (!categories.length) {
    showEmptyState();
    return;
  }

  for (const category of categories) {
    const categoryNode = categoryTemplate.content.cloneNode(true);
    const title = categoryNode.querySelector(".category-title");
    const commandsHost = categoryNode.querySelector(".commands");

    title.textContent = category.name;

    for (const command of category.commands) {
      const commandNode = commandTemplate.content.cloneNode(true);
      const nameNode = commandNode.querySelector(".command-name");
      const commandText = commandNode.querySelector(".command-text");
      const descriptionNode = commandNode.querySelector(".command-description");
      const copyButton = commandNode.querySelector(".copy-btn");

      nameNode.textContent = command.name;
      commandText.textContent = command.command;
      descriptionNode.textContent = command.description;
      copyButton.dataset.command = command.command;
      copyButton.addEventListener("click", onCopyClicked);

      commandsHost.appendChild(commandNode);
    }

    container.appendChild(categoryNode);
  }
}

function showEmptyState() {
  const block = document.createElement("div");
  block.className = "empty-state";
  block.textContent = "No commands matched your search. Try another keyword.";
  container.appendChild(block);
}

function onSearchInput(event) {
  const query = event.target.value.trim().toLowerCase();

  if (!query) {
    state.filtered = [...state.categories];
    renderCategories(state.filtered);
    return;
  }

  const filtered = state.categories
    .map((category) => {
      const matches = category.commands.filter((command) => {
        return (
          command.name.toLowerCase().includes(query) ||
          command.command.toLowerCase().includes(query) ||
          command.description.toLowerCase().includes(query)
        );
      });

      return matches.length
        ? {
            ...category,
            commands: matches
          }
        : null;
    })
    .filter(Boolean);

  state.filtered = filtered;
  renderCategories(state.filtered);
}

async function onCopyClicked(event) {
  const button = event.currentTarget;
  const command = button.dataset.command;

  try {
    await copyToClipboard(command);
    button.classList.add("copied");
    button.textContent = "Copied!";
    setTimeout(() => {
      button.classList.remove("copied");
      button.textContent = "Copy";
    }, 1500);
  } catch (error) {
    console.error("Clipboard write failed", error);
    button.textContent = "Error";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1500);
  }
}

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((error) => console.warn("Service worker registration failed:", error));
  }
}

function init() {
  loadData();
  searchInput.addEventListener("input", onSearchInput);
  registerServiceWorker();
}

window.addEventListener("DOMContentLoaded", init);
