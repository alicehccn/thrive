import { PartialType } from "@nestjs/mapped-types";
import { Session } from "../../entities";

export class UpdateRequestSchema extends PartialType(Session) {
  id: string;
  session: Session;
}
