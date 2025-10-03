import { Hono } from "hono";
import { db, usersTable } from "../db";
import z from "zod";
import { eq } from "drizzle-orm";

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

  await db.insert(user).values(user);
  return c.json({ message: "User created", user }, 201);
});

const idSchema = z.string().transform((val) => {
  const parsed = parseInt(val, 10);
  if (isNaN(parsed)) {
    throw new Error("Invalid ID");
  }
  return parsed;
});

app.get("/:id", async (c) => {
  const id = await idSchema.parseAsync(c.req.param("id"));
  console.log(`Fetching user with id ${id}`);
  const user = await db.select().from(usersTable).where(eq(usersTable.id, id));

  return c.json(
    {
      user,
      message: "User found",
      status: "success",
    },
    200,
  );
});

export default app;
