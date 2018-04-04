import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

beforeAll(async () => {
    await setupDb()
})

// This test keeps failing although it works fine with httpie
describe('LogInController', () => {

    test('POST /login', async () => {

        const target = {
            email: "tim@teacher.tt",
            password: "12345678"
        }

        const response = await request(await app.callback())
            .post('/login')
            .set('Accept', 'application/json')
            .send(target)
            .expect(200)
    })

})