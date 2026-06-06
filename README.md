# Greymatter Accountancy Website

A modern, professional website for Greymatter Accountancy - a London-based accounting firm. Built with EJS templating and compiles to vanilla HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Web3-inspired, professional color scheme (navy, teal, gold)
- **Responsive Layout**: Mobile-first design that works on all devices
- **EJS Templating**: Clean, maintainable template structure
- **Zero Dependencies at Runtime**: Compiles to vanilla HTML/CSS/JS
- **Smooth Animations**: CSS animations and Intersection Observer effects
- **Interactive Elements**: Form handling, smooth scrolling, hamburger menu

## Color Scheme

- **Primary**: #1e7a8f (Professional Teal)
- **Primary Dark**: #0f4c5c (Deep Navy)
- **Secondary**: #d4a574 (Premium Gold)
- **Dark**: #0f1419 (Charcoal)
- **Light**: #f8f9fa (Soft White)

## Project Structure

```
greymatter/
├── src/
│   ├── views/
│   │   └── index.ejs         # Main HTML template
│   └── assets/
│       ├── css/
│       │   └── styles.css    # All styling
│       └── js/
│           └── main.js       # Interactive features
├── dist/                      # Compiled output
├── build.js                   # Build script
├── package.json               # Dependencies
└── README.md
```

## Setup

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

This generates vanilla HTML/CSS/JS in the `dist/` directory.

### Development with Watch Mode

```bash
npm run watch
```

Automatically rebuilds when you change files in `src/`.

### Local Preview

After building, open `dist/index.html` in your browser:

```bash
npm run dev
```

## Sections

1. **Navigation** - Fixed navbar with smooth scrolling links
2. **Hero** - Eye-catching headline with CTAs and animated chart
3. **About** - Company mission with team avatars and statistics
4. **Services** - 6 core accounting services with icons
5. **Industries** - 5 target industries in London
6. **Why Us** - 3 key differentiators
7. **How It Works** - 3-step process visualization
8. **Pricing** - Transparent pricing cards
9. **Testimonials** - 3 client reviews
10. **Team** - Key team members
11. **Contact** - Contact form and location details
12. **Footer** - Quick links and legal info

## Customization

### Colors
Edit the CSS variables in `src/assets/css/styles.css`:
```css
:root {
  --color-primary: #1e7a8f;
  --color-secondary: #d4a574;
  /* ... */
}
```

### Content
Edit `src/views/index.ejs` to update:
- Headlines and descriptions
- Contact information
- Team member details
- Service descriptions
- Pricing tiers

### Phone Number
Replace `020 1234 5678` throughout the template with your actual phone number.

### Contact Email
Replace `hello@greymatteraccountancy.co.uk` with your email.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive down to 320px width

## Performance

- No external dependencies in compiled output
- Optimized CSS with minimal repaints
- Smooth animations using `requestAnimationFrame`
- Image placeholders ready for optimization

## License

© 2026 Greymatter Accountancy. All rights reserved.
