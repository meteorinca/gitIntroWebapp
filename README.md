# Git Intro Webapp

## Project Vision
This project is a fast, friendly web app that teaches Git fundamentals to brand-new developers. It combines a VS Code-like visual Git experience with a memorable alias system so students can practice real Git flows while using playful commands that stick in their heads.

## What Makes It Different
- **Visual Git Playground:** Recreates familiar VS Code Git panels so students can stage, commit, and resolve conflicts without leaving the browser.
- **Alias Translator:** Every funny alias instantly expands to the full Git command, showing the real syntax side-by-side.
- **Guided Learning Tracks:** Bite-sized lessons walk through workflows like "first commit," "feature branching," and "squash & merge."
- **Instant Feedback:** Inline tips highlight best practices and warn about common mistakes before they happen.
- **Shareable Progress Cards:** Students can export a snapshot of their alias list and completed lessons to share with mentors.

## Sample Alias Set
| Alias | Git Command | When to Use |
| --- | --- | --- |
| `git yeehaw` | `git status` | Quick check before you ride into new changes. |
| `git lasso` | `git add .` | Rope in every file before a commit. |
| `git diary` | `git commit -m "<message>"` | Capture today's journey. |
| `git teleport` | `git push` | Beam your work up to the remote. |
| `git timewarp` | `git log --oneline --graph --decorate` | Review history without the time machine headaches. |

## Tech Stack
- **Frontend:** React + Vite for a snappy SPA that mirrors VS Code interactions.
- **Styling:** Tailwind CSS for rapid UI iteration and theming.
- **Backend:** Lightweight PHP API (Slim or Laravel Zero) to store alias presets, lesson progress, and shareable cards.
- **Data Layer:** SQLite in development, flexible to upgrade to PostgreSQL in production.
- **Tooling:** ESLint, Prettier, and PHPStan to keep both stacks clean.

## Architecture Overview
1. React front end renders the IDE-themed interface and communicates via REST with the PHP backend.
2. PHP service handles user sessions, alias customization, and lesson tracking.
3. Real-world Git scenarios are stored as JSON playbooks that feed interactive components.
4. Optional VS Code extension bridge exposes the same alias dictionary inside the editor.

## Getting Started (Development)
1. **Install prerequisites:** Node.js >= 20, PHP >= 8.2, Composer, and SQLite.
2. **Clone & bootstrap:**
   ```bash
   git clone https://github.com/<your-org>/gitIntroWebapp.git
   cd gitIntroWebapp
   npm install
   composer install
   ```
3. **Run the dev servers:**
   ```bash
   npm run dev
   php -S localhost:8080 -t api/public
   ```
4. **Open the app:** Visit `http://localhost:5173` to explore the React front end wired to the PHP API proxy.

## Content Roadmap
- Launch core lessons focused on committing, branching, merging, and resolving conflicts.
- Add shell-specific setup guides (Bash, Zsh, PowerShell, Windows Terminal) for installing alias packs.
- Build an alias playground that lets instructors create custom, themed command sets for their cohorts.
- Layer in gamified achievements and daily practice prompts.
- Publish instructor resources: slide decks, classroom flow scripts, and printable alias cheat sheets.

## Contributing
Contributions are welcome! Open an issue to discuss lesson ideas, alias suggestions, or UI tweaks. For code contributions, fork the repo, create a feature branch, and submit a PR that describes the interactive piece or content you improved.

## License
TBD - select a permissive license (MIT or Apache 2.0) before the first public release.
