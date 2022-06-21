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
import { CreateNotesDto, UpdateNotesDto } from "../dto";
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
  async findAll(
    @Query() paginationQuery: PaginationQueryInterface
  ): Promise<Notes[]> {
    return this.notesService.findAll(paginationQuery);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Notes> {
    return this.notesService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateNotesDto): Promise<string> {
    return this.notesService.create(body);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() body: UpdateNotesDto
  ): Promise<void> {
    return this.notesService.update(id, body);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<void> {
    return this.notesService.delete(id);
  }
}
