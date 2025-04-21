#!/bin/bash

# Build the Next.js app
npm run build

# Create .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
touch out/.nojekyll

# Copy the index.html file to the root of the out directory if it doesn't exist
if [ ! -f out/index.html ]; then
  cp public/index.html out/index.html
fi

# Initialize git in the out directory
cd out
git init
git add .
git commit -m "Deploy website"

# Replace with your GitHub repository URL and branch
git push -f https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git main:gh-pages

echo "Deployment complete!"
