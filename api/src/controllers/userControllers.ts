import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	res.json(users);
};

const createUser = async (req: Request, res: Response) => {
	const { name, email, clerkId } = req.body;
	try {
		const findUser = await prisma.user.findUnique({
			where: {
				clerkId: clerkId,
			},
		});

		if (!findUser) {
			const user = await prisma.user.create({
				data: {
					name,
					email,
					clerkId,
				},
			});

			res.status(200).json(user);
		} else {
			res.status(200).json(findUser);
		}
	} catch (error: any) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
};

// const deleteUser = async (req: Request, res: Response) => {
// 	try {
// 		const { id } = req.params;
// 		console.log(id);

// 		const user = await prisma.user.delete({
// 			where: {
// 				id: parseInt(id),
// 			},
// 		});
// 		return res.json(user);
// 	} catch (error: any) {
// 		return res.status(500).json({ error: error?.message });
// 	}
// };

export { getAllUsers, createUser };
