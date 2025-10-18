## Git & Git Alias Webapp TODO

### Foundations
- [ ] Initialize React + Vite project structure and configure TypeScript.
- [ ] Set up Tailwind CSS with VS Code-inspired theme tokens.
- [ ] Scaffold PHP (Slim or Laravel Zero) API with Composer autoloading.
- [ ] Configure SQLite schema for aliases, lessons, and progress snapshots.
- [ ] Establish shared contract types between frontend and backend (OpenAPI or TypeScript DTOs).

### Frontend (React)
- [ ] Build VS Code-style layout (sidebar, source control panel, terminal area).
- [ ] Implement alias translator component with side-by-side Git command reveal.
- [ ] Create interactive lesson flow for core Git tasks (init through push).
- [ ] Add progress tracking UI with achievements and shareable cards.
- [ ] Wire copy-to-clipboard buttons and inline tips for each alias example.

### Backend (PHP)
- [ ] Expose REST endpoints for alias packs, lesson content, and progress saves.
- [ ] Implement validation and sanitization for custom alias submissions.
- [ ] Create seed scripts to load default alias sets and lesson playbooks.
- [ ] Integrate logging and basic rate limiting.

### Content & Curriculum
- [ ] Draft concise explanations for foundational Git concepts.
- [ ] Map each alias to real-world scenarios demonstrating time savings.
- [ ] Author shell-specific alias installation guides (Bash, Zsh, PowerShell, Windows Terminal).
- [ ] Curate links to authoritative Git resources and include them contextually.
- [ ] Prepare instructor toolkit (slide deck outline, classroom flow notes, printable cheat sheet).

### Quality & Launch
- [ ] Add unit and integration tests (React Testing Library, PHPUnit).
- [ ] Run accessibility and performance audits (Lighthouse, axe).
- [ ] Document contribution guidelines and code style conventions.
- [ ] Choose and document final license (MIT vs Apache 2.0).
- [ ] Plan beta test with beginner cohort and gather feedback.
