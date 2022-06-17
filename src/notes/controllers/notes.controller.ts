import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { Notes } from "../entities";
import { NotesService } from "../services";

interface PaginationQueryInterface {
  offset: number;
  limit: number;
}

@Controller("notes")
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryInterface): Notes[] {
    const { offset, limit } = paginationQuery;
    console.log(offset, limit);
    return this.notesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Notes {
    return this.notesService.findOne(id);
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
