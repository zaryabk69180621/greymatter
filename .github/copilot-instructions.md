# Greymatter Accountancy Website - Development Guide

This is a modern, professional website for Greymatter Accountancy built with EJS templating that compiles to vanilla HTML/CSS/JS.

## Quick Start

1. **Install dependencies**: `npm install`
2. **Build the site**: `npm run build`
3. **Open**: `dist/index.html` in your browser

## Development

For automatic rebuilds during development:
```bash
npm run watch
```

## Project Structure

- `src/views/index.ejs` - Main HTML template with all sections
- `src/assets/css/styles.css` - Professional styling (colors, animations, responsive)
- `src/assets/js/main.js` - Interactive features (forms, scrolling, animations)
- `build.js` - Build script that compiles EJS to HTML
- `dist/` - Compiled output (vanilla HTML/CSS/JS)

## Key Features

✓ Modern Web3-inspired design with professional colors (teal, navy, gold)
✓ Fully responsive mobile-first layout
✓ Smooth animations and scroll effects
✓ Interactive contact form and navigation
✓ No runtime dependencies - vanilla HTML/CSS/JS output
✓ EJS templating for maintainable code

## Customization Tips

### Colors
Edit CSS variables in `src/assets/css/styles.css`:
- `--color-primary`: #1e7a8f (teal)
- `--color-secondary`: #d4a574 (gold)
- `--color-dark`: #0f1419 (navy)

### Content
Edit `src/views/index.ejs` to update:
- Company information
- Service descriptions
- Team member details
- Pricing information
- Phone numbers and contact info

### Styling
Global styles in `src/assets/css/styles.css` with:
- Custom animations
- Responsive breakpoints
- Hover effects
- Gradient effects

### Interactivity
JavaScript features in `src/assets/js/main.js`:
- Mobile menu toggle
- Smooth scrolling
- Form submission handling
- Animation on scroll
- Parallax effects

## Build Output

Running `npm run build` generates:
- `dist/index.html` - Compiled HTML page
- `dist/css/styles.css` - Copied stylesheet
- `dist/js/main.js` - Copied JavaScript

All files use vanilla code with no dependencies - ready for hosting anywhere.

## Support

For more information, see README.md in the project root.
