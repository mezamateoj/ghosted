import { Hono } from "hono";
import { logger } from "hono/logger";
import users from "./routes/users";

const app = new Hono();
app.use(logger());

app.route("/users", users);

const server = Bun.serve({
  port: 3001,
  fetch:
});

console.log(`Server running on http://localhost:${server.port}`);
