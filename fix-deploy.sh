#!/bin/bash
set -e
cd /Users/dannickyoung/Documents && rm -rf CV && git clone https://github.com/dannickyoung/portfolio.git CV && cd CV && git checkout 001-dynamic-cv-export && cd client && npm install && npm run build && cd .. && [ -d client/dist/projects ] || cp -r client/public/projects client/dist/ && git checkout gh-pages 2>/dev/null || git checkout -b gh-pages && git rm -rf . 2>/dev/null && cp -r client/dist/. . && [ -d projects ] || cp -r client/public/projects . && git add -A && git commit -m "Deploy portfolio" && git push origin gh-pages --force && echo "✅ Deployed! https://dannickyoung.github.io/portfolio/"

