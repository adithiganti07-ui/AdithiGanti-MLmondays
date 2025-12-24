# Eleventy Blog

## Introduction
This is a personal blog built using **Eleventy (11ty)**, a static site generator.  
It uses **Nunjucks (`.njk`)** for templates and **Markdown (`.md`)** for blog posts.  
The site is lightweight, fast, and deployed on **Netlify**.

---

## Basic Code Structure

- **`.njk` files**  
  Page templates (home, about, write, etc.) written using Nunjucks.

- **`_includes/`**  
  Contains layouts and reusable components like headers and footers.

- **`posts/`**  
  Blog posts written in Markdown. Eleventy converts these into HTML.

- **`.eleventy.js`**  
  Configuration file for Eleventy.

- **`_site/`**  
  Auto-generated output folder containing final HTML/CSS/JS.  
  This folder is created during build and is **not pushed to GitHub**.

---

## How to Run Locally

### Prerequisites
- Node.js
- npm

### Steps

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the site:
   ```bash
   npx eleventy
   ```

3. Run development server:
   ```bash
   npx eleventy --serve
   ```

4. Open in browser:
   ```
   http://localhost:8080
   ```

---

## Deployment
The site is deployed using **Netlify**.

- Build command: `npx eleventy`
- Publish directory: `_site`

---

## Version Control
The following folders are ignored using `.gitignore`:
```
node_modules/
_site/
```

GitHub contains only source files. Netlify handles the build.

---

## Tech Stack
- Eleventy (11ty)
- Nunjucks
- Markdown
- HTML / CSS
- Netlify
## Live Demo
https://adithiganti-neuralhive-mlmondays.netlify.app/

