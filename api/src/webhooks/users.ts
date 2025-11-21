import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Webhook } from "svix";

const prisma = new PrismaClient();

// Define types for Clerk webhook events
interface ClerkEmailAddress {
  email_address: string;
}

interface ClerkUser {
  id: string;
  email_addresses: ClerkEmailAddress[];
  firstName?: string;
}

interface ClerkWebhookEvent {
  data: ClerkUser;
  type: string;
}

const userClerkWebHook = async (req: Request, res: Response) => {
  try {
    const payloadString = JSON.stringify(req.body);
    const svixHeaders = {
      "svix-id": req.headers["svix-id"] as string,
      "svix-timestamp": req.headers["svix-timestamp"] as string,
      "svix-signature": req.headers["svix-signature"] as string,
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
    const evt = wh.verify(payloadString, svixHeaders) as ClerkWebhookEvent;
    console.log("here works 3");
    const { id, ...attributes } = evt.data;
    const eventType = evt.type;
    if (eventType === "user.created") {
      console.log(`User ${id} was ${eventType}`);

      const email = attributes.email_addresses[0].email_address;

      await prisma.user.create({
        data: {
          clerkId: id,
          email: email,
          name: attributes.firstName,
        },
      });
    }
    res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export default userClerkWebHook;
