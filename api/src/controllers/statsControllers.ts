import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const getAllCounts = async (req: Request, res: Response) => {
    const {jobStatus} = req.body;

    const validStatuses = ['READY', 'APPLIED', 'INTERVIEW', 'REJECTED', 'GHOSTED'];
    if (!validStatuses.includes(jobStatus)) {
        return res.status(400).send('Invalid job status');
    }

    try {
        const response = await prisma.$queryRaw`
            SELECT * FROM "Jobs" AS j
            WHERE j.status = ${jobStatus}::"Status";
        `;
        return res.status(200).send(response);
        
    } catch (error: any) {
        return res.status(500).send(error.message);
    }

    

}

export { getAllCounts}