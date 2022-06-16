import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('notes')
export class NotesController {
  @Get()
  findAll() {
    return 'This action returns all notes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} notes`;
  }
}
