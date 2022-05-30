import { PartialType } from "@nestjs/mapped-types";
import { Session } from "../entities";
export class UpdateSessionSchema extends PartialType(Session) {
  Id: string;
  Session: Session;
}
