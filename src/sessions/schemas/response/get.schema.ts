import { Session } from 'src/sessions/entities';
import { PartialType } from '@nestjs/mapped-types';

export class GetResponseSchema extends PartialType(Session) {
  sessions: Session[];
}
