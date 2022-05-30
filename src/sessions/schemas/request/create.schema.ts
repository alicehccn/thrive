import { Session } from '../../entities'
import { PartialType } from '@nestjs/mapped-types'
export class CreateRequestSchema extends PartialType(Session) {
  Id: string
  Session: Session
}
