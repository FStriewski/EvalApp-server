// src/pages/controller.spec.ts
import 'jest'
import * as request from 'supertest'
import  app  from '../app'
import setupDb from '../db'


beforeAll(async () => {
    await setupDb()
})

describe('StudentController', () => {

    test(' GET /student', async () => {
        await request(await app.callback())
            .get('/student')
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('GET /student/1', async () => {
        const parameter = 1;
        const response = await request(await app.callback())
            .get('/student/' + parameter)
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('POST /student', async () => {

        const target = {
            name: "Tim Smart",
            link: "https://www.apfeltalk.de/magazin/wp-content/uploads/2017/09/Tim-Cook_1000x571-700x400.jpg",
        }

        const response = await request(await app.callback())
            .post('/student')
            .send(target)
            .expect(200)
    })

})