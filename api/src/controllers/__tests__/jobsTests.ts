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

    test('wrong clerk Id responds with 404', async () => {
        const response = await request(app).get(`${JOBS_ROUTE}/1/all`)
        expect(response.status).toBe(404)
        expect(response.header['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('message');
                
    })
})