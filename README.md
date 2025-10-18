# Git Intro Webapp

A fast static web reference for common Git commands — built as a teaching aid and quick lookup tool.

## Purpose

This project serves as a personal and classroom cheat sheet for Git basics. It presents grouped commands with short explanations that are easy to copy and remember.

## Quick Start

```bash
git clone <your-repo-url> git-intro-webapp
cd git-intro-webapp
python -m http.server 8000
````

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Structure

```
index.html      # Main page
assets/         # Styles and scripts
data/           # JSON with git commands and notes
```

## Features

* Searchable Git command reference
* Copy-to-clipboard buttons
* Works offline (optional PWA support)
* Minimal design for fast loading

## Deployment

Host directly with GitHub Pages, Netlify, or any static web server.

## License

MIT
