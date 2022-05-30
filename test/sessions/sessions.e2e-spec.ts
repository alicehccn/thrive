import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { SessionsModule } from '../../src/sessions'
import { uuid } from 'uuidv4'
import { sessionCreator } from './sessions.e2e-mock'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SessionsModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/:id (GET)', () => {
    const id = uuid()
    return request(app.getHttpServer())
      .get(`/sessions/${id}`)
      .expect(200)
      .expect('This action returns session ' + id)
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/sessions')
      .expect(200)
      .expect('This action returns all sessions')
  })

  it('/ (POST)', () => {
    const sessionMock = sessionCreator()
    return request(app.getHttpServer())
      .post('/sessions/:id')
      .send(sessionMock)
      .expect(201)
      .expect('This action adds a new session ' + sessionMock.id)
  })
})
