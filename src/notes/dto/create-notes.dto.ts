import { IsString, IsNotEmpty } from "class-validator";

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
}
