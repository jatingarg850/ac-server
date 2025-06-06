import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check if all required files exist
const requiredFiles = [
  'index.js',
  'package.json',
  'ecosystem.config.js',
  'db/index.js',
  'routes/ac-listings.js',
  'routes/users.js',
  'middleware/auth.js'
];

console.log('Verifying build configuration...');

let allFilesExist = true;
for (const file of requiredFiles) {
  const filePath = join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing required file: ${file}`);
    allFilesExist = false;
  }
}

if (allFilesExist) {
  console.log('All required files are present.');
  process.exit(0);
} else {
  console.error('Build verification failed: Missing required files');
  process.exit(1);
} 