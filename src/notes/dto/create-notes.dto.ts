import { IsString, IsNotEmpty, IsUUID } from "class-validator";
import { Author } from "../entities";

export class CreateNotesDto {
  @IsString()
  @IsNotEmpty()
  readonly date: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly subtitles: string;

  @IsString()
  @IsNotEmpty()
  readonly body: string;

  @IsString()
  readonly author: Author;
}
