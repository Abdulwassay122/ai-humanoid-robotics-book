# AI-Humanoid-Robotics Book - Modern UI

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator with enhanced UI/UX features.

## Features

- **Modern UI Design**: Clean, contemporary interface with improved typography and color scheme
- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop devices
- **Enhanced Navigation**: Improved navigation with collapsible menus and better organization
- **Accessibility Focused**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading times with optimized assets and efficient code
- **Cross-Browser Compatible**: Works consistently across all modern browsers
- **SEO Optimized**: Proper meta tags, sitemap, and structured data for search engines

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.