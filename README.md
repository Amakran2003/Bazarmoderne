# Le Bazar Moderne

A modern e-commerce experience.

Visit the live site: https://amakran2003.github.io/Bazarmoderne/

## Deployment

This project is deployed on GitHub Pages. There are two ways to deploy:

### Method 1: Push to main branch

When you push to the main branch, GitHub Actions automatically builds and deploys the site to GitHub Pages:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

### Method 2: Manual deployment

To manually deploy without pushing to main:

```bash
npm run deploy
```

This builds the site and pushes only the build output to the gh-pages branch.

### Method 3: Full deployment (code + build)

To update both your source code in main and deploy the build:

```bash
npm run deploy:full
```

This runs the deploy command and pushes your code to main.