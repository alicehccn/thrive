import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateNotesDto } from "./create-notes.dto";

export class UpdateNotesDto extends PartialType(CreateNotesDto) {
  @IsString()
  @IsNotEmpty()
  readonly id: string;
}
