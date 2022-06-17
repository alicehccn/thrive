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

interface PaginationQueryInterface {
  offset: number;
  limit: number;
}

@Controller("notes")
export class NotesController {
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryInterface): string {
    const { offset, limit } = paginationQuery;
    return `This action returns ${limit} notes starting from No.${offset}`;
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
