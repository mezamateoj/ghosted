import { Hono } from "hono";
import { db, usersTable } from "../db";
import z from "zod";

const app = new Hono();

app.get("/", async (c) => {
  const users = await db.query.usersTable.findMany();
  return c.json(users);
});

const userSchema = z.object({
  name: z.string().min(2).max(100),
  age: z.number().min(0).max(120),
  email: z.email(),
});

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  const user = await userSchema.parseAsync(body);

  await db.insert(usersTable).values(user);
  return c.json({ message: "User created", user }, 201);
});
app.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
