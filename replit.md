# Regulus Films - Video Production Company Website

## Overview

This is a professional video production company website for Regulus Films & Entertainment, specializing in music videos and corporate video production services in Miami. The application showcases the company's portfolio, services, and provides a contact form for potential clients. Built as a modern full-stack web application with a React frontend and Express backend, it features a responsive design optimized for both desktop and mobile viewing.

## Recent Changes (August 22, 2025)

✓ **MAJOR FIX**: Resolved video display issues on homepage and corporate pages
✓ Fixed VideoCard CSS rendering problems causing white space instead of videos
✓ Enhanced VideoCard component with explicit display styles and proper flexbox layout
✓ Confirmed all featured videos ("Don't Be Shy", "Benz Friends") displaying correctly on homepage
✓ Confirmed corporate video ("Russian Artist") displaying correctly on corporate page
✓ All Vimeo video embeds now working with proper hash parameter handling
✓ Cleaned up debugging code and finalized video display functionality

## User Preferences

- Communication style: Simple, everyday language
- Design preference: Clean, modern, corporate styling with Miami-inspired colors (teal and navy)
- Structure preference: Traditional multi-page website with individual pages for each section

## System Architecture

### Frontend Architecture
The client-side application is built with React and TypeScript, utilizing a modern component-based architecture:

- **UI Framework**: React with TypeScript for type safety and component reusability
- **Styling**: Tailwind CSS with custom design tokens for consistent theming, featuring a Miami-inspired color palette (teal and navy)
- **Component Library**: Radix UI components with shadcn/ui for accessible, customizable UI elements
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **State Management**: React Query (@tanstack/react-query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for robust form management and validation

### Backend Architecture
The server-side follows a REST API pattern with Express.js:

- **Framework**: Express.js with TypeScript for type-safe server development
- **API Design**: RESTful endpoints with standardized response formats
- **Request Handling**: Built-in Express middleware for JSON parsing and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development Tools**: Hot reloading with Vite integration for seamless development experience

### Data Storage Solutions
Currently implements a hybrid approach with flexibility for future scaling:

- **Session Storage**: PostgreSQL with connect-pg-simple for session management
- **In-Memory Storage**: Custom MemStorage implementation for user data during development
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema Management**: Centralized schema definitions with Zod for runtime validation

### Frontend-Backend Integration
- **API Communication**: Custom fetch-based API client with proper error handling and credentials support
- **Type Safety**: Shared TypeScript types between client and server via the `/shared` directory
- **Development Setup**: Vite proxy configuration for seamless API integration during development

### Build and Development Workflow
- **Bundling**: Vite for fast development builds and optimized production bundles
- **TypeScript**: Strict TypeScript configuration with path mapping for clean imports
- **Hot Reloading**: Real-time development updates for both frontend and backend changes
- **Production Build**: Separate build processes for client and server with proper asset handling

## Company Information

### Contact Details
- **Phone**: 786-429-4511
- **Location**: Barclay's Business Center, 555 NE 15th St, Miami, FL 33132
- **Service Area**: Worldwide
- **Company**: Regulus Films & Entertainment

### Special Offers
- Price match guarantee + 10% off any written quote from reputable companies
- Crypto payment accepted with bonus shooting hours
- Custom packages available for all budgets
- Over 200 REAL 5-star Google reviews

### Services
- **Music Videos**: Creative storytelling and cutting-edge cinematography for all genres
- **Corporate Videos**: Professional content including commercials, training videos, promotional content
- **Event Coverage**: Corporate events, conferences, product launches
- **Brand Storytelling**: Authentic brand stories and customer testimonials

## External Dependencies

### Core Frameworks and Libraries
- **@neondatabase/serverless**: PostgreSQL database connectivity optimized for serverless environments
- **drizzle-orm & drizzle-zod**: Type-safe ORM with automatic schema validation
- **@tanstack/react-query**: Powerful data synchronization and caching for React applications

### UI and Styling
- **@radix-ui/***: Complete set of accessible, unstyled UI primitives for building design systems
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Utility for creating type-safe component variants with Tailwind

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Integration adapters for various validation libraries
- **zod**: TypeScript-first schema validation for both client and server

### Development and Build Tools
- **vite**: Next-generation frontend build tool with lightning-fast HMR
- **tsx**: TypeScript execution environment for Node.js development
- **esbuild**: Fast JavaScript/TypeScript bundler for production builds

### Additional Utilities
- **wouter**: Minimalist routing library for React applications
- **date-fns**: Modern JavaScript date utility library
- **clsx & tailwind-merge**: Utilities for conditional className composition
- **lucide-react**: Beautiful and consistent SVG icon library