# Agent Guidelines for Ghosted Repository

## Build/Lint/Test Commands

### Server (Hono + Drizzle)
- `bun run dev` - Start development server
- `bun run migration` - Generate database migrations
- `bun run migrate` - Run database migrations

## Code Style Guidelines

### TypeScript
- Strict mode enabled
- Use explicit type annotations
- Prefer interfaces over types for object shapes

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
