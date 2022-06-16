import { Controller, Get, Param } from "@nestjs/common";

@Controller("notes")
export class NotesController {
  @Get()
  findAll(): string {
    return "This action returns all notes";
  }

  @Get(":id")
  findOne(@Param("id") id: string): string {
    return `This action returns #${id} notes`;
  }
}
