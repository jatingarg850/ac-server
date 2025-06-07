import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check if all required files exist
const requiredFiles = [
  'index.js',
  'package.json',
  'ecosystem.config.cjs',
  'db/index.js',
  'routes/ac-listings.js',
  'routes/users.js',
  'middleware/auth.js'
];

console.log('Verifying build configuration...');
console.log('Current directory:', __dirname);

try {
  let allFilesExist = true;
  for (const file of requiredFiles) {
    const filePath = join(__dirname, file);
    try {
      await fs.access(filePath);
      console.log(`✓ Found: ${file}`);
    } catch (err) {
      console.error(`✗ Missing required file: ${file}`);
      console.error(`  Tried path: ${filePath}`);
      allFilesExist = false;
    }
  }

  if (allFilesExist) {
    console.log('✓ All required files are present.');
    process.exit(0);
  } else {
    console.error('✗ Build verification failed: Missing required files');
    process.exit(1);
  }
} catch (err) {
  console.error('✗ Build verification failed with error:', err);
  process.exit(1);
} 