// src/pages/controller.spec.ts
import 'jest'
import * as request from 'supertest'
import  app  from '../app'
import setupDb from '../db'


beforeAll(async () => {
    await setupDb()
})

describe('EventController', () => {

    test(' GET /evaluation', async () => {
        await request(await app.callback())
            .get('/evaluation')
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('GET /evaluation/1', async () => {
        const parameter = 1;
        const response = await request(await app.callback())
            .get('/evaluation/' + parameter)
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('POST /evaluation', async () => {

        const target = {
            grade: "green",
            remark: "wat a bright student, should be a teacher",
            date: Date.now,
        }

        const response = await request(await app.callback())
            .post('/evaluation')
            .set('Accept', 'application/json')
            .send(target)
            .expect(200)
    })

})