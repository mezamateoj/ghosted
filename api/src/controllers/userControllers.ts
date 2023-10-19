import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	res.json(users);
};

const createUser = async (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password,
		},
	});
	res.json(user);
};

const deleteUser = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		console.log(id);

		const user = await prisma.user.delete({
			where: {
				id: parseInt(id),
			},
		});
		return res.json(user);
	} catch (error: any) {
		return res.status(500).json({ error: error?.message });
	}
};

export { getAllUsers, createUser, deleteUser };
