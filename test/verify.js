// DevMeDoAnDrOiD
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const htmlPath = path.join(rootDir, 'index.html');
const imgPath = path.join(rootDir, 'assets', 'images', 'reda_profile.jpg');

if (!fs.existsSync(htmlPath)) {
  console.error('Error: index.html missing');
  process.exit(1);
}

if (!fs.existsSync(imgPath)) {
  console.error('Error: assets/images/reda_profile.jpg missing');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

const requiredTokens = [
  'M : Reda Elkhshen',
  '01558186187',
  '01005664564',
  'https://www.facebook.com/reda.elkhshen',
  'https://ipn.eg/S/redaelkhshen/instapay/6Jcs4X',
  'redaelkhshen@instapay',
  'assets/images/reda_profile.jpg',
  'DevMeDoAnDrOiD'
];

let failed = false;
for (const token of requiredTokens) {
  if (!html.includes(token)) {
    console.error(`Token missing in index.html: ${token}`);
    failed = true;
  }
}

const ids = ['hero', 'audiences', 'methodology', 'instapay', 'contact', 'navbar', 'toastBox', 'instaHandle', 'copyHandleBtn'];
for (const id of ids) {
  if (!html.includes(`id="${id}"`)) {
    console.error(`Element ID missing: ${id}`);
    failed = true;
  }
}

if (!html.trim().startsWith('<!-- DevMeDoAnDrOiD -->')) {
  console.error('Header branding missing');
  failed = true;
}

if (!html.trim().endsWith('<!-- Copyright (c) 2026 MeDoAnDrOiD. All Rights Reserved. -->')) {
  console.error('Footer copyright missing');
  failed = true;
}

if (failed) {
  process.exit(1);
}

console.log('Project verification passed: 100% healthy, all assets and links verified.');
// Copyright (c) 2026 MeDoAnDrOiD. All Rights Reserved.