# Next.js Hello World Template

A modern, responsive web application template built with Next.js 14, TypeScript, and Tailwind CSS.

## Project Structure

```
hello-world-template/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Root page (Home)
│   ├── page1/             # Page 1 route
│   │   └── page.tsx
│   ├── page2/             # Page 2 route
│   │   └── page.tsx
│   ├── page3/             # Page 3 route
│   │   └── page.tsx
│   └── layout.tsx         # Root layout component
├── components/            # Shared components
│   └── TopNav.tsx        # Navigation component
├── types/                # TypeScript type definitions
├── public/               # Static assets
├── styles/               # Global styles
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation
```

## Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Navigation**: Persistent top navigation bar with smooth transitions
- **Page Routing**: Clean URL structure with organized page components
- **Styling**: Custom Tailwind configuration with extensive customizations for:
  - Spacing
  - Animations
  - Component styling
  - Responsive design

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd hello-world-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to http://localhost:3000

## Available Scripts

- `npm run dev` - Starts the Next.js development server
- `npm run build` - Creates a production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint for code quality checks

## Project Pages

- **Home** (`/`): Main landing page with a card layout
- **Page 1** (`/page1`): First content page
- **Page 2** (`/page2`): Second content page
- **Page 3** (`/page3`): Third content page

## Navigation

The application features a persistent top navigation bar (`TopNav` component) that:
- Provides links to all main pages
- Includes hover effects for better user experience
- Maintains consistent styling across all pages

## Styling

The project uses Tailwind CSS with custom configurations for:
- Custom spacing scales
- Animation properties
- Component-specific styling
- Responsive breakpoints

## License

ISC