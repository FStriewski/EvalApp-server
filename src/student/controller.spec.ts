// src/pages/controller.spec.ts
import 'jest'
import * as request from 'supertest'
import  app  from '../app'
import setupDb from '../db'


beforeAll(async () => {
    await setupDb()
})

describe('StudentController', () => {

    test(' GET /students', async () => {
        await request(await app.callback())
            .get('/students')
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('GET /students/1', async () => {
        const parameter = 1;
        const response = await request(await app.callback())
            .get('/students/' + parameter)
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('POST /students', async () => {

        const target = {
            name: "Tim Smart",
            link: "https://www.apfeltalk.de/magazin/wp-content/uploads/2017/09/Tim-Cook_1000x571-700x400.jpg",
        }

        const response = await request(await app.callback())
            .post('/batch/1/students')
            .send(target)
            .expect(200)
    })

})