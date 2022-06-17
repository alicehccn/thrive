import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

@Controller("notes")
export class NotesController {
  @Get()
  findAll(): string {
    return "This action returns all notes";
  }

  @Get(":id")
  findOne(@Param("id") id: string): string {
    return `This action returns note-${id}`;
  }

  @Post()
  create(@Body() body: unknown): unknown {
    return body;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() body: unknown): string {
    console.log(body);
    return `This action updates note-${id}`;
  }

  @Delete(":id")
  delete(@Param("id") id: string): string {
    return `This action deletes note-${id}`;
  }
}
