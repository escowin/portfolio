# PWA Update Guide

This guide explains how the PWA (Progressive Web App) update system works and how to manage cache updates.

## How It Works

### Automatic Updates
- **Version Tracking**: The PWA uses version numbers from `package.json` to track updates
- **Cache Invalidation**: Each build generates a new cache name based on the version
- **Auto-Refresh**: When a new version is detected, the app automatically refreshes
- **Stale-While-Revalidate**: The service worker serves cached content immediately while fetching updates in the background

### Update Process
1. **Build Time**: The build script automatically updates version numbers in:
   - `public/manifest.json` (version + timestamp)
   - `public/sw.js` (CACHE_VERSION)
2. **Runtime**: The service worker checks for updates on every page load
3. **Installation**: New service workers skip waiting and activate immediately
4. **Cache Cleanup**: Old caches are automatically deleted when new ones are created

## Commands

### Normal Build (with version update)
```bash
npm run build
```
This will:
- Update PWA version numbers
- Build the application
- Generate new cache names

### Force Cache Clear (for immediate updates)
```bash
npm run clear-cache
```
This will:
- Generate a timestamp-based version number
- Force all clients to download fresh content
- Use this when you need immediate cache invalidation

### Deploy
```bash
npm run deploy
```
This will:
- Build with updated versions
- Deploy to GitHub Pages

## Testing Updates

### In Development
1. Make changes to your code
2. Run `npm run build`
3. Open the app in a browser
4. Check the console for service worker messages
5. The app should automatically refresh when updates are detected

### In Production
1. Push changes to your repository
2. Run `npm run deploy`
3. Users will automatically receive updates on their next visit
4. The app will refresh automatically when new content is available

## Troubleshooting

### If Updates Don't Appear
1. **Check Console**: Look for service worker messages in browser dev tools
2. **Force Clear**: Run `npm run clear-cache` and rebuild
3. **Manual Clear**: In dev tools, go to Application > Storage > Clear storage
4. **Hard Refresh**: Use Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### If Service Worker Won't Update
1. **Check Registration**: Ensure the service worker is properly registered
2. **Check Version**: Verify the version numbers are updating correctly
3. **Check Network**: Ensure the service worker file is accessible
4. **Check Console**: Look for any JavaScript errors

## File Structure

```
public/
├── manifest.json          # PWA manifest with version info
├── sw.js                  # Service worker with cache management
└── index.html             # Main HTML file

scripts/
├── update-version.js      # Updates version numbers during build
└── clear-cache.js         # Forces cache invalidation

src/
└── main.jsx               # Service worker registration and update handling
```

## Version Management

- **Package Version**: Controlled by `package.json` version field
- **Manifest Version**: Automatically synced with package version
- **Cache Version**: Automatically synced with package version
- **Timestamp**: Added to manifest for additional cache busting

## Best Practices

1. **Increment Version**: Always increment the version in `package.json` before deploying
2. **Test Updates**: Test the update process in development before deploying
3. **Monitor Console**: Check browser console for service worker messages
4. **Use Clear Cache**: Use `npm run clear-cache` when you need immediate updates
5. **Document Changes**: Keep track of what changes in each version

## Technical Details

### Service Worker Strategy
- **Install**: Caches static assets and skips waiting
- **Activate**: Cleans up old caches and claims clients
- **Fetch**: Implements stale-while-revalidate strategy
- **Message**: Handles communication with main thread

### Cache Management
- **Cache Names**: Include version numbers for easy identification
- **Cache Cleanup**: Old caches are automatically deleted
- **Cache Strategy**: Stale-while-revalidate for optimal performance
- **Cache Invalidation**: Version-based cache busting

### Update Detection
- **Registration**: Service worker registers on page load
- **Update Check**: Checks for updates on every page load
- **Update Found**: Listens for new service worker installations
- **Controller Change**: Handles service worker controller changes
