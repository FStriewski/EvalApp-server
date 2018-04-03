import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

beforeAll(async () => {
  await setupDb()
})

// Requires a teacher in the db

describe('TeacherController', () => {

  test('POST /teachers', async () => {

    const target = {
      email: "tim@teacher.tt",
      password: "12345678"
    }

    const response = await request(await app.callback())
      .post('/teachers')
      .set('Accept', 'application/json')
      .send(target)
      .expect(200)
  })

})