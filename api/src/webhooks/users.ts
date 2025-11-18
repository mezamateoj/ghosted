import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Webhook } from "svix";

const prisma = new PrismaClient();

const userClerkWebHook = async (req: Request, res: Response) => {
  try {
    const payloadString = JSON.stringify(req.body);
    const svixHeaders = req.headers as Record<string, string>;

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
    const evt = wh.verify(payloadString, svixHeaders) as any;
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
