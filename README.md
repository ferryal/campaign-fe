# Campaign Management Platform

A modern campaign management platform built with React, TypeScript, and Vite. This application provides a comprehensive step-by-step workflow for creating and managing marketing campaigns with intelligent audience targeting and strategic planning capabilities.

## 🛠️ Tech Stack

### Core

- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Vite 6** - Lightning-fast build tool with HMR

### State Management & Data Fetching

- **Zustand** - Lightweight state management
- **TanStack Query (React Query)** - Powerful async state management
- **TanStack Router** - Type-safe routing solution

### Form & Validation

- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between RHF and Zod

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Beautiful icon set
- **class-variance-authority** - CVA for component variants
- **tailwind-merge** - Merge Tailwind classes intelligently

### Additional Features

- **Axios** - HTTP client with request/response interceptors
- **Token-based Authentication** - Secure JWT token authentication

## 📦 Installation

### Prerequisites

- Node.js 23+ (LTS)
- pnpm (recommended) or npm

### Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd campaign-fe
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Build for production:

```bash
pnpm build
```

5. Preview production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
hamah-sa/
├── src/
│   ├── api/              # API client configuration and endpoints
│   ├── components/       # Reusable UI components
│   │   └── ui/          # shadcn/ui components
│   ├── constant/        # Application constants and data
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   ├── routes/          # TanStack Router route definitions
│   │   └── campaign/    # Campaign-related routes and components
│   ├── schemas/         # Zod validation schemas
│   ├── services/        # Business logic and API services
│   ├── stores/          # Zustand state stores
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── public/              # Static assets
└── dist/               # Production build output
```

## 🎯 Application Architecture

### Route Structure

- **Root Route (`/`)** - Main campaign page with step-by-step workflow
- **Campaign Route (`/campaign`)** - Alternative campaign route structure
- **Sidebar Layout** - Collapsible sidebar with navigation

### Campaign Workflow Components

1. **Campaign Basics Step** - Basic campaign information form
2. **Market Intelligence Step** - Audience selection and persona management
3. **Strategic Objectives Step** - Goals and KPI definition
4. **Strategy Step** - Campaign strategy planning
5. **Concept Step** - Creative concept development
6. **Execution Step** - Implementation planning

### Core Services

- **Campaign Service** - Complete campaign CRUD operations (create, read, update, delete, archive, duplicate, share)
- **Audience Service** - Audience management and persona operations
- **API Client** - Centralized Axios client with authentication and error handling

### State Management

- **Campaign Store (Zustand)** - Campaign data, loading states, and error handling with persistence
- **UI Store** - UI state management (modals, tooltips, sidebars)
- **React Query** - Server state caching and synchronization

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration
- `eslint.config.js` - ESLint configuration

## 📝 Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm lint      # Run ESLint
```

### Custom Components

- **Smart Tip** - Contextual tips and recommendations throughout the workflow
- **Stepper** - Multi-step workflow navigator with progress tracking
- **Audience Detail Modal** - Comprehensive audience persona editor with demographics and psychographics
- **Target Audience Selector** - Multi-select interface for audience targeting
- **Sidebar Layout** - Responsive collapsible sidebar with navigation

---

Built with ❤️ using React, TypeScript, and Vite
