// src/pages/controller.spec.ts
import 'jest'
import * as request from 'supertest'
import  app  from '../app'
import setupDb from '../db'


beforeAll(async () => {
    await setupDb()
})

describe('BatchController', () => {

    test(' GET /batch', async () => {
        await request(await app.callback())
            .get('/batch')
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('GET /batch/1', async () => {
        const parameter = 1;
        const response = await request(await app.callback())
            .get('/batch/' + parameter)
            .set('Accept', 'application/json')
            .expect(200)
    })

    test('POST /batch', async () => {

        const target = {
            number: 1,
            startdate: '2017-03-01',
            enddate: '2017-06-01'
        }

        const response = await request(await app.callback())
            .post('/batch')
            .send(target)
            .expect(200)
    })

})