import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { getDb } = await import("@/server/db");
    const db = await getDb();

    await db.collection("contact_messages").insertOne({
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: new Date(),
    });

    return { success: true as const };
  });
