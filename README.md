# Devtraco Plus

A premium real estate website showcasing luxury residential properties in Accra, Ghana. Built with modern web technologies to deliver an exceptional user experience with fast load times and elegant design.

## Features

- **Premium Property Portfolio**: Browse exclusive residential developments including apartments, townhouses, and hotel-managed residences
- **Interactive Project Grid**: Responsive grid layout with dynamic aspect ratios and hover effects
- **Smooth Animations**: Framer Motion-powered transitions and scroll-triggered animations
- **Modern Navigation**: Responsive navigation with mobile-friendly menu
- **Trust-Building Sections**: Ownership journey, payment plans, and site visit scheduling
- **Resource Hub**: Market insights, tax changes, and affiliate program information
- **Optimized Performance**: Sub-second load times with Vite's optimized build system
- **Responsive Design**: Fully responsive across all device sizes

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Phosphor Icons** - Icon library
- **Wouter** - Lightweight routing

### Backend (Monorepo Structure)
- **Express** - API server
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database
- **Orval** - OpenAPI client generation

### Package Management
- **pnpm** - Fast, disk space efficient package manager
- **Workspace** - Monorepo setup with shared dependencies

## Project Structure

```
DevtracoPlus-Limited/
├── artifacts/
│   ├── devtraco-plus/          # Main frontend application
│   │   ├── src/
│   │   │   ├── components/     # React components
│   │   │   ├── pages/          # Page components
│   │   │   ├── lib/            # Utilities and helpers
│   │   │   └── main.tsx        # Entry point
│   │   ├── public/             # Static assets
│   │   └── vite.config.ts      # Vite configuration
│   ├── api-server/              # Backend API server
│   └── mockup-sandbox/         # Mockup preview tool
├── lib/
│   ├── api-client-react/        # React API client
│   ├── api-spec/               # OpenAPI specification
│   ├── api-zod/                # Zod schemas
│   └── db/                     # Database schema and config
├── scripts/                    # Build and utility scripts
├── package.json                # Root package.json
├── pnpm-workspace.yaml         # Workspace configuration
└── tsconfig.json               # TypeScript configuration
```

## Installation

### Prerequisites
- Node.js 18+ 
- pnpm 8+

### Setup

1. Clone the repository:
```bash
git clone git@github.com:ogenci/DevtracoPlus-Limited.git
cd DevtracoPlus-Limited
```

2. Install dependencies:
```bash
pnpm install
```

## Development

### Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Type checking:
```bash
pnpm typecheck
```

### Build for production:
```bash
pnpm build
```

## Building

The project uses a monorepo structure with pnpm workspaces. To build all packages:

```bash
pnpm build
```

This will:
1. Run type checking across all packages
2. Build all workspace packages that have a build script
3. Generate API clients from OpenAPI specifications

## Deployment

### Production Build
```bash
pnpm --filter @workspace/devtraco-plus build
```

The built files will be in `artifacts/devtraco-plus/dist/`

### Environment Variables
Create a `.env` file in the root directory:
```
VITE_API_URL=your_api_url
```

## Pages

- **Home** - Landing page with hero section and featured projects
- **Projects** - Full property portfolio with filtering
- **Buy** - Property acquisition information
- **Rent** - Residential leasing services
- **Sell** - Premium asset brokerage
- **About** - Developer information and company background
- **Contact** - Contact form and office locations
- **Resources**
  - **Insights** - Market reports and investment guides
  - **Tax Changes** - Investment intelligence
  - **Affiliate Program** - Corporate partnerships

## Performance

The website is optimized for fast load times:
- Code splitting with React.lazy()
- Optimized images with proper aspect ratios
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind CSS
- Pre-bundled dependencies with Vite

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Contact

For inquiries about properties or partnerships, visit the contact page on the website.

---

Built with ❤️ for Devtraco Plus
