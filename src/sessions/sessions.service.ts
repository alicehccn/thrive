import { Injectable } from '@nestjs/common'
import { CreateRequestSchema } from './schemas'
import { UpdateRequestSchema } from './schemas'

@Injectable()
export class SessionsService {
  findOne(id: string) {
    return 'This action returns session ' + id
  }

  findAll() {
    return 'This action returns all sessions'
  }

  create(createSessionRequest: CreateRequestSchema) {
    return 'This action adds a new session ' + createSessionRequest.id
  }

  update(updateSessionRequest: UpdateRequestSchema) {
    console.log(updateSessionRequest)
    return 'This action updates session'
  }

  cancel(id: string) {
    return 'This action removes session' + id
  }
}
