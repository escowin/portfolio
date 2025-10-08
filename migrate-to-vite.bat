@echo off
echo 🚀 Starting Portfolio Migration to Vite + React 19...

REM Backup current package.json
echo 📦 Backing up current package.json...
copy package.json package-react-scripts.json

REM Replace package.json with Vite version
echo 🔄 Replacing package.json with Vite configuration...
copy package-vite.json package.json

REM Remove old build directory
echo 🧹 Cleaning old build directory...
if exist build rmdir /s /q build

REM Install new dependencies
echo 📥 Installing new dependencies...
npm install

REM Test the build
echo 🔨 Testing Vite build...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Migration successful! Vite build completed.
    echo 🎉 You can now run:
    echo    npm run dev    # Start development server
    echo    npm run build  # Build for production
    echo    npm run deploy # Deploy to GitHub Pages
) else (
    echo ❌ Migration failed. Check the errors above.
    echo 🔄 Restoring original package.json...
    copy package-react-scripts.json package.json
    exit /b 1
)

echo 🎯 Migration complete! Your portfolio is now running on Vite + React 19
pause
