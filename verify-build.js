import fs from 'fs';
import path from 'path';

console.log('Verifying build configuration...');
console.log('Current directory:', process.cwd());

const requiredFiles = [
  'index.js',
  'ecosystem.config.cjs',
  'package.json',
  'package-lock.json',
  'routes/ac-listings.js',
  'routes/users.js',
  'db/index.js',
  'middleware/auth.js'
];

const errors = [];

requiredFiles.forEach(file => {
  console.log(`Checking for ${file}...`);
  try {
    const stats = fs.statSync(path.join(process.cwd(), file));
    console.log(`✓ Found: ${file} (${stats.size} bytes)`);
  } catch (err) {
    console.error(`✗ Missing: ${file}`);
    errors.push(`Missing required file: ${file}`);
  }
});

// Check ecosystem.config.cjs content
try {
  const ecosystemConfig = fs.readFileSync(path.join(process.cwd(), 'ecosystem.config.cjs'), 'utf8');
  console.log('Ecosystem config content:', ecosystemConfig);
} catch (err) {
  console.error('Error reading ecosystem.config.cjs:', err);
  errors.push('Error reading ecosystem.config.cjs');
}

// Check if routes directory exists and is accessible
try {
  const routesDir = fs.readdirSync(path.join(process.cwd(), 'routes'));
  console.log('Routes directory contents:', routesDir);
} catch (err) {
  console.error('Error accessing routes directory:', err);
  errors.push('Error accessing routes directory');
}

if (errors.length > 0) {
  console.error('\nBuild verification failed:');
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
} else {
  console.log('\nBuild verification successful!');
  process.exit(0);
} 