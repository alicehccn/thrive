import { Session } from 'src/sessions/entities'
import { CreateRequestSchema } from 'src/sessions/schemas'
import { uuid } from 'uuidv4'

export const sessionMock = (): Session => {
  return {
    id: uuid(),
    time: new Date(),
    patient: uuid(),
    provider: uuid(),
    channel: 'zoom-url.com',
  }
}

export const sessionCreator = (): CreateRequestSchema => {
  const session = sessionMock()
  console.log(session.id)
  return {
    session,
    id: session.id,
  }
}
