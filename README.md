# London College of Advanced Studies Website

Welcome to the official repository for the London College of Advanced Studies (LCAS) website. This is a modern, responsive educational website built with Next.js, featuring information about courses, admissions, and the college itself.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About the Project

This website serves as the digital presence for the London College of Advanced Studies, a private college in East London offering high-quality, career-focused education in Health and Social Care. The site provides prospective students with information about courses, admissions process, and college policies.

## Features

- Responsive design that works on all devices
- Comprehensive course listings organized by level
- Admissions information and application process
- News and events section
- Contact information and inquiry form
- SEO optimized with metadata and structured data
- Accessibility features

## Tech Stack

- [Next.js 13+](https://nextjs.org/) - React-based framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible UI components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

## Project Structure

```
.
├── app/                    # Next.js App Router pages and layouts
│   ├── about/             # About page
│   ├── admissions/        # Admissions information
│   ├── apply/             # Application form
│   ├── contact/           # Contact page with form
│   ├── courses/           # Course listings by level
│   ├── faqs/              # Frequently asked questions
│   ├── news/              # News and announcements
│   └── ...                # Other static pages (privacy, terms, etc.)
├── components/            # Reusable UI components
│   ├── ui/                # Radix UI primitives
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   └── ...                # Other components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets (images, etc.)
```

### Key Directories

- `app/` - Contains all the pages using Next.js App Router. Each subdirectory represents a route.
- `components/` - Reusable UI components including Radix UI primitives and custom components.
- `components/ui/` - Pre-built accessible UI components from shadcn/ui.
- `lib/` - Utility functions and helpers.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd londoncas-website
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

The page will reload automatically when you make changes to the code.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To serve the production build locally:

```bash
npm run start
# or
yarn start
```

## Deployment

This site is configured for static export and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

To generate the static site:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is proprietary and confidential. All rights reserved by London College of Advanced Studies.