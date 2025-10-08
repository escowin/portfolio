#!/bin/bash

# Portfolio Migration to Vite Script
# This script migrates the portfolio from react-scripts to Vite

echo "🚀 Starting Portfolio Migration to Vite + React 19..."

# Backup current package.json
echo "📦 Backing up current package.json..."
cp package.json package-react-scripts.json

# Replace package.json with Vite version
echo "🔄 Replacing package.json with Vite configuration..."
cp package-vite.json package.json

# Remove old build directory
echo "🧹 Cleaning old build directory..."
rm -rf build

# Install new dependencies
echo "📥 Installing new dependencies..."
npm install

# Test the build
echo "🔨 Testing Vite build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Migration successful! Vite build completed."
    echo "🎉 You can now run:"
    echo "   npm run dev    # Start development server"
    echo "   npm run build  # Build for production"
    echo "   npm run deploy # Deploy to GitHub Pages"
else
    echo "❌ Migration failed. Check the errors above."
    echo "🔄 Restoring original package.json..."
    cp package-react-scripts.json package.json
    exit 1
fi

echo "🎯 Migration complete! Your portfolio is now running on Vite + React 19"
