# Agent Guidelines for Ghosted Repository

## Build/Lint/Test Commands

### Client (Next.js)
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Server (Hono + Drizzle)
- `bun run dev` - Start development server
- `bun run migration` - Generate database migrations
- `bun run migrate` - Run database migrations

## Code Style Guidelines

### TypeScript
- Strict mode enabled
- Use explicit type annotations
- Prefer interfaces over types for object shapes

### Frontend (React/Next.js)
- Import React as `import * as React from "react"`
- Use `@/` path aliases for imports
- Use `class-variance-authority` for component variants
- Use `cn()` utility for conditional classes
- Follow shadcn/ui patterns for UI components

### Backend
- **Server (Hono)**: Zod validation, Drizzle ORM, Hono context (`c`) for requests/responses

### Testing
- Use Jest with supertest for API testing
- Follow `describe/test` structure
- Use `beforeAll/afterAll` for setup/teardown

### Error Handling
- Try/catch blocks with proper error logging
- Return appropriate HTTP status codes
- Use Zod for input validation

### Naming Conventions
- camelCase for variables/functions
- PascalCase for components/types
- kebab-case for file names

### Cursor Rules
- In `server/` directory: Use Bun instead of Node.js, npm, pnpm, or Vite
- Prefer Bun APIs: `Bun.serve()`, `Bun.sql`, `Bun.file`, etc.
- Use `bun test` for testing in server directory</content>
<parameter name="filePath">/Users/lidz/ghosted/AGENTS.md
