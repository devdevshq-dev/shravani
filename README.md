# Shravani Umale's portfolio

A Powerpuff Girls inspired portfolio made with static HTML, CSS, and JavaScript. No backend, package installation, build tool, or API key is required.

Features include Blossom/Bubbles/Buttercup color modes, expandable project details, a mobile menu, email copying, contact links, and a PDF resume download. The content is based on Shravani's resume and confirmed professional Java system design work at Cognizant.

## Deploy to GitHub Pages

1. Create a GitHub repository with `main` as its default branch. Put the **contents of this portfolio folder** at the repository root, including the hidden `.github` folder. Do not upload the parent workspace or nest this folder inside the repository.
2. In the repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Commit and push the files to `main`. The included `.github/workflows/deploy.yml` automatically publishes the portfolio.
4. Open the repository's **Actions** tab and select **Deploy portfolio to GitHub Pages**. The deployment URL appears after a successful run.

Every subsequent push to `main` triggers deployment, regardless of which files changed. No additional secrets or personal access tokens are needed by the workflow. You can also use **Actions → Deploy portfolio to GitHub Pages → Run workflow** to deploy manually.

If your deployment branch has a different name, change `main` in `.github/workflows/deploy.yml` and ensure the `github-pages` environment permits that branch.

The workflow publishes only `index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/`. Development documentation and configuration are excluded from the deployed artifact.

This setup follows [GitHub's automatic deployment guide](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically).

## Push from this local folder

After creating an empty GitHub repository, run the following in this portfolio folder. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with the actual repository values:

```sh
git init -b main
git add .
git commit -m "Add static portfolio and automatic Pages deployment"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If this folder is already a Git repository, skip `git init`. If `origin` is already configured, skip `git remote add`. Push using your normal GitHub authentication.

To publish later edits:

```sh
git add .
git commit -m "Update portfolio"
git push
```

## Preview and edit

Open `index.html` directly, or run:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. On macOS, `Open_Portfolio.command` opens the page in your browser.

- `index.html`: portfolio content and links.
- `styles.css`: layout, colors, typography, and responsive behavior.
- `script.js`: color themes, menu, and email copying.
- `assets/`: illustration, favicon, and resume PDF.

All local links are relative, so the site works at both `https://YOUR-USERNAME.github.io/` and `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. Google Fonts are optional external resources with local font fallbacks. Clipboard copying works on GitHub Pages HTTPS; direct file viewing may show the manual-copy fallback.

The resume download is the original supplied PDF. Replace `assets/shravani-resume.pdf` when a compiled updated resume is available.

The frontend and local asset references were checked. The deployment workflow has not yet run on GitHub; it becomes active after these files are pushed and Pages is configured.
