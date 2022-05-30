import { Session } from "../entities";
import { PartialType } from "@nestjs/mapped-types";
export class CreateSessionSchema extends PartialType(Session) {
  Id: string;
  Session: Session;
}
