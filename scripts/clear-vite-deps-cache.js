#!/usr/bin/env node

/**
 * Removes Vite's pre-bundled dependency cache (node_modules/.vite).
 * Run after lockfile or dependency changes if the dev server reports
 * missing files under node_modules/.vite/deps/.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteCacheDir = path.join(__dirname, '..', 'node_modules', '.vite');

fs.rmSync(viteCacheDir, { recursive: true, force: true });
console.log('Removed Vite deps cache:', viteCacheDir);
