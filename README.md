# Hello World Template

A simple but structured website template built with Node.js and TypeScript.

## Project Structure

```
hello-world-template/
├── app/                  # Application source code
│   ├── components/       # UI components
│   │   └── HelloWorld.ts
│   ├── hooks/            # Custom React hooks (if using React)
│   ├── lib/              # Utility functions, API wrappers
│   ├── services/         # Backend integrations and business logic
│   ├── styles/           # CSS styles
│   │   └── main.css
│   ├── types/            # TypeScript type definitions
│   └── index.ts          # Main application entry point
├── pages/                # Page components (for Next.js)
├── public/               # Public static assets
│   ├── assets/           # Images, fonts, etc.
│   ├── styles/           # Public CSS files
│   │   └── main.css
│   └── index.html        # Main HTML file
├── routes/               # Express route definitions
├── tests/                # Test files
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started

To get started with this template, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd hello-world-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Open your browser and navigate to http://localhost:3000

## Available Scripts

- `npm run dev` - Starts the development server using ts-node
- `npm run build` - Compiles TypeScript code to JavaScript
- `npm start` - Runs the compiled JavaScript code

## Adding Features

This template provides a structured foundation for building web applications:

- Add React components in the `app/components` directory
- Create utility functions in the `app/lib` directory
- Define TypeScript interfaces in the `app/types` directory
- Create API services in the `app/services` directory
- Add styles in the `app/styles` directory
- Store static assets in the `public/assets` directory

## License

ISC

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Build the project**:
   ```
   npm run build
   ```

4. **Run the project**:
   ```
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000` to see the "Hello World" message.

## Files Overview

- **app/components/HelloWorld.ts**: Contains the function to render the "Hello World" message.
- **app/styles/main.css**: Contains the CSS styles for the website.
- **app/index.ts**: The entry point of the application that sets up the HTML structure.
- **public/index.html**: The main HTML file that links to the CSS and JavaScript files.
- **package.json**: Contains project metadata and scripts for building and running the project.
- **tsconfig.json**: TypeScript configuration file.
- **.gitignore**: Specifies files to be ignored by Git.

## License

This project is licensed under the MIT License.