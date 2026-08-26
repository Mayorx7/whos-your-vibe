# Who's Your Vibe

A modern web application built with React, Vite, and Tailwind CSS.

## Features
- **Interactive UI**: Built with Radix UI primitives and shadcn/ui components.
- **Animations**: Smooth transitions powered by Framer Motion.
- **Routing**: Client-side navigation handled by React Router.
- **State Management & Data Fetching**: Efficient data handling using TanStack React Query.
- **Form Handling**: Robust form validation using React Hook Form and Zod.
- **Responsive Design**: Fully responsive layout tailored with Tailwind CSS.

## Technologies
- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, pnpm, or bun

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mayorx7/whos-your-vibe.git
   cd whos-your-vibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or yarn install, pnpm install, bun install
   ```

## Environment Setup
Currently, this project does not require any specific environment variables to run locally. If future features require environment configurations, create a `.env` file based on a `.env.example` file (if provided).

## Running Locally

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
# or yarn dev, pnpm dev, bun dev
```
The application will typically be available at `http://localhost:5173`.

## Building for Production

To create a production-ready build:

```bash
npm run build
```
The output will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.

## License
This project is open-source. Please check the repository for specific license details if applicable.
