const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Create dist directory if it doesn't exist
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist', { recursive: true });
}

// Create dist subdirectories
['css', 'js', 'pages'].forEach(dir => {
  if (!fs.existsSync(`./dist/${dir}`)) {
    fs.mkdirSync(`./dist/${dir}`, { recursive: true });
  }
});

// Copy CSS files
const cssDir = './src/assets/css';
if (fs.existsSync(cssDir)) {
  fs.readdirSync(cssDir).forEach(file => {
    fs.copyFileSync(path.join(cssDir, file), path.join('./dist/css', file));
  });
}

// Copy JS files
const jsDir = './src/assets/js';
if (fs.existsSync(jsDir)) {
  fs.readdirSync(jsDir).forEach(file => {
    fs.copyFileSync(path.join(jsDir, file), path.join('./dist/js', file));
  });
}

// Copy root assets
const assetsDir = './assets';
if (fs.existsSync(assetsDir)) {
  const distAssets = './dist/assets';
  if (!fs.existsSync(distAssets)) {
    fs.mkdirSync(distAssets, { recursive: true });
  }
  fs.readdirSync(assetsDir).forEach(file => {
    fs.copyFileSync(path.join(assetsDir, file), path.join(distAssets, file));
  });
}

// Pages to build
const pages = [
  { template: 'index.ejs', output: 'index.html' },
  { template: 'services.ejs', output: 'pages/services.html' },
  { template: 'industries.ejs', output: 'pages/industries.html' },
  { template: 'about.ejs', output: 'pages/about.html' },
  { template: 'team.ejs', output: 'pages/team.html' },
  { template: 'pricing.ejs', output: 'pages/pricing.html' },
  { template: 'resources.ejs', output: 'pages/resources.html' }
];

// Render all pages
let completed = 0;
pages.forEach(page => {
  const templatePath = `./src/views/${page.template}`;
  if (fs.existsSync(templatePath)) {
    ejs.renderFile(templatePath, {}, (err, str) => {
      if (err) {
        console.error(`Error rendering ${page.template}:`, err);
        process.exit(1);
      }
      fs.writeFileSync(`./dist/${page.output}`, str);
      console.log(`✓ Built dist/${page.output}`);
      completed++;
      if (completed === pages.length) {
        console.log('✓ Build complete!');
      }
    });
  }
});
