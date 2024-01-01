import request from 'supertest'
import { app } from '../../../index'
import { describe } from 'node:test'
import { PrismaClient } from '@prisma/client'

const JOBS_ROUTE = '/api/jobs'
const prisma = new PrismaClient();


beforeAll(async () => {
    await prisma.$connect()
})

afterAll(async () => {
    await prisma.$disconnect()
    console.log('Disconnected from the database.')
})


describe('Jobs controllers /api/jobs', () => {

    test(':clerkId/all should return all users jobs', async () => {
        const response = await request(app).get(`${JOBS_ROUTE}/:clerkId/all`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toHaveProperty('email');
        
        
    })
})