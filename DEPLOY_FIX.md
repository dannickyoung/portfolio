# Quick Fix for GitHub Pages 404

Run these commands in your terminal:

```bash
cd /Users/dannickyoung/Documents

# Remove old CV directory if it exists
rm -rf CV

# Clone fresh from GitHub
git clone https://github.com/dannickyoung/portfolio.git CV
cd CV

# Switch to source branch
git checkout 001-dynamic-cv-export

# Build the project
cd client
npm install
npm run build
cd ..

# Create/switch to gh-pages branch
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# Remove everything and copy build
git rm -rf . 2>/dev/null || true
cp -r client/dist/. .

# Make sure projects folder is there
if [ ! -d "projects" ]; then
    echo "Copying projects folder..."
    cp -r client/public/projects .
fi

# Commit and push
git add -A
git commit -m "Deploy portfolio with all assets"
git push origin gh-pages --force

echo "✅ Done! Check: https://dannickyoung.github.io/portfolio/"
```

