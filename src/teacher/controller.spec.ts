import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

beforeAll(async () => {
  await setupDb()
})

// describe('UserController', () => {
//   test('/users', async () => {
//     await request(await app.callback())
//     .get('/teacher')
//     .set('Accept', 'application/json')
//     .expect(200)
//   })
// })
