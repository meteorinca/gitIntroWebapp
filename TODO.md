## Git & Git Alias Webapp TODO

A fast static web reference for common Git commands - built as a teaching aid and quick lookup tool.

### Quick Start
```
git clone https://github.com/meteorinca/gitIntroWebapp git-intro-webapp
cd git-intro-webapp
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Structure
- `index.html` - Main page
- `assets/` - Styles and scripts
- `data/` - JSON with git commands and notes

### Implementation Checklist
- [x] Scaffold the static site skeleton (`index.html`, `assets/`, `data/`)
- [x] Populate `data/` with grouped Git command JSON and brief notes
- [x] Render command categories and entries dynamically in `index.html`
- [x] Implement client-side search and filtering for commands
- [x] Add copy-to-clipboard buttons for every command snippet
- [x] Apply lightweight styling in `assets/` for readability and speed
- [x] Integrate optional offline/PWA support (manifest and service worker)
- [ ] Test in modern browsers and across key screen sizes
- [ ] Document deployment for GitHub Pages, Netlify, or static hosting
