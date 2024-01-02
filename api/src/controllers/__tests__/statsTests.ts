import request from 'supertest'
import { app } from '../../../index'
import { describe } from 'node:test'
import { PrismaClient } from '@prisma/client'

const JOBS_ROUTE = '/api/stats'
const prisma = new PrismaClient();


beforeAll(async () => {
    await prisma.$connect()
})

afterAll(async () => {
    await prisma.$disconnect()
    console.log('Disconnected from the database.')
})


describe('Jobs controllers /api/stats', () => {

    test('Get all jobs statuses counts', async () => {
        const response = await request(app)
            .get(`${JOBS_ROUTE}/counts`)
            .send({jobStatus: 'READY'})
        expect(response.status).toBe(200)
        expect(response.header['content-type']).toMatch(/json/)
        expect(response.body[0]).toHaveProperty('status');
                
    })
})