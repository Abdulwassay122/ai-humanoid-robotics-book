# Quickstart Guide: Docusaurus UI Upgrade

## Overview
This guide provides instructions for setting up and working with the upgraded Docusaurus UI.

## Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git for version control
- Basic knowledge of React and Markdown

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Install Additional UI Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Configure Tailwind CSS
Create or update `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./pages/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. Configure Docusaurus
Update `docusaurus.config.js` to include the new styling:
```js
module.exports = {
  // ... existing config
  stylesheets: [
    // ... existing stylesheets
    '/css/custom.css',
  ],
  themes: [
    // ... existing themes
  ],
};
```

### 6. Start Development Server
```bash
npm run start
# or
yarn start
```

## Key Directories and Files

### UI Customization
- `src/css/custom.css` - Main custom styles
- `src/theme/` - Custom theme components
- `src/components/` - Custom UI components
- `static/` - Static assets (images, fonts)

### Configuration
- `docusaurus.config.js` - Main Docusaurus configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Customization Guide

### 1. Color Palette
Update the color scheme in `src/css/custom.css`:
```css
:root {
  --ifm-color-primary: #your-primary-color;
  --ifm-color-primary-dark: #your-darker-shade;
  --ifm-color-primary-darker: #your-even-darker-shade;
  --ifm-color-primary-darkest: #your-darkest-shade;
  --ifm-color-primary-light: #your-lighter-shade;
  --ifm-color-primary-lighter: #your-even-lighter-shade;
  --ifm-color-primary-lightest: #your-lightest-shade;
}
```

### 2. Typography
Customize fonts in `src/css/custom.css`:
```css
html {
  font-family: 'Your Font Family', system-ui, sans-serif;
}
```

### 3. Layout Spacing
Adjust spacing variables in `src/css/custom.css`:
```css
:root {
  --ifm-spacing-vertical: 1.5rem;
  --ifm-spacing-horizontal: 1.5rem;
  --ifm-paragraph-margin-bottom: 1rem;
}
```

## Development Workflow

### 1. Creating New UI Components
1. Create component in `src/components/`
2. Follow Docusaurus theme component patterns
3. Use Tailwind CSS classes for styling
4. Test responsiveness across devices

### 2. Updating Existing Components
1. Check if component can be customized via CSS
2. If not, use Docusaurus swizzling to customize
3. Run: `npm run swizzle @docusaurus/theme-classic [component-name]`
4. Make changes in the swizzled component

### 3. Testing Changes
1. Use `npm run start` to run development server
2. Test on multiple screen sizes
3. Verify accessibility with tools like axe-core
4. Check performance metrics

## Build and Deployment

### Build for Production
```bash
npm run build
```

### Serve Locally for Testing
```bash
npm run serve
```

### Deployment
The built site is in the `build/` directory and can be deployed to any static hosting service or GitHub Pages.

## Troubleshooting

### Common Issues
- **Styles not loading**: Check if CSS files are properly imported in Docusaurus config
- **Responsive design broken**: Verify Tailwind directives are in the main CSS file
- **Component conflicts**: Ensure custom components follow Docusaurus patterns

### Debugging Tips
- Use browser dev tools to inspect CSS classes
- Check console for any errors during build or development
- Verify all dependencies are correctly installed