# Fashion Brand Matcher - Replit.md

## Overview

This is a full-stack web application that helps users discover fashion brands that match their personal style through an interactive quiz. The application presents 20 questions about style preferences and calculates brand compatibility scores to recommend the best matching fashion brands from a curated list of 30+ popular brands.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

- **Frontend**: React-based SPA using Vite as the build tool
- **Backend**: Express.js server with RESTful API design
- **Database**: PostgreSQL with Drizzle ORM (configured but not fully implemented)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query for server state, React hooks for client state
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth transitions

## Key Components

### Frontend Architecture
- **Component Structure**: Modern React with TypeScript, using functional components and hooks
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling System**: Tailwind CSS with CSS custom properties for theming
- **Internationalization**: Multi-language support (Korean, English, Japanese, Chinese)
- **Theme Support**: Light/dark mode with system preference detection
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints with /api prefix
- **Error Handling**: Centralized error handling middleware
- **Development Setup**: Hot reload with tsx for development
- **Production Build**: ESBuild for server bundling

### Data Layer
- **ORM**: Drizzle with PostgreSQL dialect
- **Schema**: Shared TypeScript schemas between client and server
- **Validation**: Zod schemas for runtime type validation
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Data Flow

1. **Quiz Flow**:
   - User starts quiz → questions shuffled for variety
   - Each answer recorded with brand weight calculations
   - Upon completion → scores calculated for all brands
   - Results displayed with main brand and alternatives

2. **Scoring Algorithm**:
   - Each question option has weighted scores for different brands
   - Final brand scores calculated by summing weights across all answers
   - Results ranked by compatibility percentage

3. **State Management**:
   - Quiz state managed through custom React hooks
   - Server state cached with React Query
   - Theme and language preferences persisted to localStorage

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with modern hooks, React Query for server state
- **UI/UX**: Framer Motion for animations, Radix UI for accessible components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Routing**: Wouter for lightweight client-side routing
- **Icons**: Lucide React, React Icons for social media icons
- **Utilities**: clsx, date-fns, nanoid

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless for database connectivity
- **Session**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution, Vite integration

### Build Tools
- **Vite**: Frontend build tool with React plugin
- **ESBuild**: Server bundling for production
- **PostCSS**: CSS processing with Tailwind
- **TypeScript**: Type checking and compilation

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Both client and server support hot reloading
- **Environment**: Node.js 20 with ES modules

### Production (Cloudflare Pages)
- **Build Process**: Frontend built with Vite to `dist/`
- **Static Site**: Pure client-side application with no server dependencies
- **Routing**: SPA routing handled via `_redirects` file
- **Performance**: Code splitting and asset optimization for fast loading
- **Deployment Target**: Optimized for Cloudflare Pages with CDN distribution

### Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Environment Variables**: NODE_ENV=production
- **Static Assets**: Cached with optimal headers for performance
- **Security**: CORS, CSP, and security headers configured

## Changelog

```
Changelog:
- June 25, 2025. Initial setup
- June 25, 2025. Optimized for Cloudflare Pages deployment
  - Converted to static site architecture
  - Added build optimization with code splitting
  - Configured _redirects for SPA routing
  - Added performance and security headers
  - Updated build scripts for static deployment
- June 25, 2025. Enhanced brand matching accuracy
  - Redesigned scoring algorithm with weighted emphasis
  - Added consistency bonuses for high-score brands
  - Improved question-brand weight alignment
- June 25, 2025. Implemented easy brand logo management system
  - Created local logo system in public/logos/ folder
  - Added BrandLogo component with fallback handling
  - Automated logo path generation and error handling
  - Provided comprehensive brand logo guide
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Logo management: User wants to easily add brand logo images themselves.
```