import { PartialType } from '@nestjs/mapped-types'
import { Session } from '../../entities'

export class UpdateRequestSchema extends PartialType(Session) {
  Id: string
  Session: Session
}
