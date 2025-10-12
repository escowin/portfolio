#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get current timestamp
const now = new Date();
const timestamp = now.toISOString();

// Read package.json to get current version
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Generate a new version with timestamp for cache busting
const newVersion = `${packageJson.version}-${Date.now()}`;

// Update manifest.json
const manifestPath = path.join(__dirname, '..', 'public', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

manifest.version = newVersion;
manifest.timestamp = timestamp;

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

// Update service worker version
const swPath = path.join(__dirname, '..', 'public', 'sw.js');
let swContent = fs.readFileSync(swPath, 'utf8');

// Update CACHE_VERSION
swContent = swContent.replace(
  /const CACHE_VERSION = '[^']*';/,
  `const CACHE_VERSION = '${newVersion}';`
);

fs.writeFileSync(swPath, swContent);

console.log(`Cache busted! Updated PWA version to ${newVersion} with timestamp ${timestamp}`);
console.log('This will force all clients to download fresh content.');
