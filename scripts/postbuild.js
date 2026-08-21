import fs from 'node:fs';

// Prevent Wrangler from attempting to upload the _worker.js server bundle as a static public asset
fs.writeFileSync('dist/.assetsignore', '_worker.js\n');
console.log('Created dist/.assetsignore successfully');
