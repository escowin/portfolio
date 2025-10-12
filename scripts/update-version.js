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

// Update manifest.json
const manifestPath = path.join(__dirname, '..', 'public', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

manifest.version = packageJson.version;
manifest.timestamp = timestamp;

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

// Update service worker version
const swPath = path.join(__dirname, '..', 'public', 'sw.js');
let swContent = fs.readFileSync(swPath, 'utf8');

// Update CACHE_VERSION
swContent = swContent.replace(
  /const CACHE_VERSION = '[^']*';/,
  `const CACHE_VERSION = '${packageJson.version}';`
);

fs.writeFileSync(swPath, swContent);

console.log(`Updated PWA version to ${packageJson.version} with timestamp ${timestamp}`);
