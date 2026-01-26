#!/bin/bash
set -e

echo "🚀 Fixing portfolio deployment..."

# Start fresh from Documents directory
cd /Users/dannickyoung/Documents

# Remove old CV directory
echo "Cleaning up..."
rm -rf CV

# Clone fresh from GitHub
echo "Cloning repository..."
git clone https://github.com/dannickyoung/portfolio.git CV
cd CV

# Switch to source branch
echo "Checking out source branch..."
git checkout 001-dynamic-cv-export

# Build the project
echo "Installing dependencies and building..."
cd client
npm install
npm run build
cd ..

# Verify build exists
if [ ! -d "client/dist" ]; then
    echo "❌ ERROR: Build failed! dist folder not found."
    exit 1
fi

# Verify projects folder exists in dist
if [ ! -d "client/dist/projects" ]; then
    echo "⚠️  Projects folder not in dist, copying from public..."
    if [ -d "client/public/projects" ]; then
        cp -r client/public/projects client/dist/
    else
        echo "❌ ERROR: Projects folder not found in public either!"
        exit 1
    fi
fi

# Switch to gh-pages branch
echo "Switching to gh-pages branch..."
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# Remove all existing files
echo "Cleaning gh-pages branch..."
git rm -rf . 2>/dev/null || true

# Copy everything from dist
echo "Copying build files..."
cp -r client/dist/. .

# Double-check projects folder
if [ ! -d "projects" ]; then
    echo "⚠️  Projects folder missing, copying from source..."
    if [ -d "client/public/projects" ]; then
        cp -r client/public/projects .
    fi
fi

# Verify index.html exists
if [ ! -f "index.html" ]; then
    echo "❌ ERROR: index.html not found!"
    exit 1
fi

# Add and commit
echo "Committing changes..."
git add -A
git commit -m "Deploy portfolio with all assets and images" || echo "No changes to commit"
git push origin gh-pages --force

echo ""
echo "✅ Deployment complete!"
echo "🌐 Portfolio: https://dannickyoung.github.io/portfolio/"
echo ""
echo "Waiting for GitHub Pages to build (this may take 1-2 minutes)..."
echo "Check status at: https://github.com/dannickyoung/portfolio/actions"

