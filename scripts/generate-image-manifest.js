import { readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP']);

function scanDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...scanDir(full));
    } else if (IMAGE_EXTS.has('.' + entry.split('.').pop())) {
      results.push(full);
    }
  }
  return results;
}

function buildManifest(baseDir, publicPrefix) {
  const map = {};
  const files = scanDir(baseDir);
  for (const file of files) {
    const rel = file.replace(baseDir, '').replace(/\\/g, '/').replace(/^\//, '');
    const parts = rel.split('/');
    if (parts.length < 2) continue;
    const category = parts[0];
    const url = `${publicPrefix}/${rel}`;
    if (!map[category]) map[category] = [];
    map[category].push(url);
  }
  for (const cat of Object.keys(map)) {
    map[cat].sort();
  }
  return map;
}

const photosManifest = buildManifest('public/uploads/photos', '/uploads/photos');
const treksManifest = buildManifest('public/uploads/treks', '/uploads/treks');

writeFileSync('src/data/image-manifest.json', JSON.stringify({ photos: photosManifest, treks: treksManifest }, null, 2));
console.log(`Manifest written: ${Object.keys(photosManifest).length} photo categories, ${Object.keys(treksManifest).length} trek folders`);
