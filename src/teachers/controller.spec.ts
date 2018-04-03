import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

beforeAll(async () => {
  await setupDb()
})

describe('UserController', () => {
  test('/users', async () => {
    await request(await app.callback())
    .get('/users')
    .set('Accept', 'application/json')
    .set('x-user-roles', 'teacher')
    .expect(200)
  })
})
