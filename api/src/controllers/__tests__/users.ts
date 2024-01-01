import request from 'supertest'
import { app } from '../../../index'
import { describe } from 'node:test'
import { PrismaClient } from '@prisma/client'

const USERS_ROUTE = '/api/users/'
const prisma = new PrismaClient();


beforeAll(async () => {
    await prisma.$connect()
})

afterAll(async () => {
    await prisma.$disconnect()
    console.log('Disconnected from the database.')
})


describe('Users Controllers: get all users', () => {

    test('should return a list of users', async () => {
        const response = await request(app).get(USERS_ROUTE)
        expect(response.status).toBe(200)
        expect(response.body[0]).toHaveProperty('clerkId');
        expect(response.body[0]).toHaveProperty('email');
        
        
    })
})