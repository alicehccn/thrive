import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateNotesDto, UpdateNotesDto } from "../dto";
import { Notes } from "../entities";

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private readonly notesRepository: Repository<Notes>
  ) {}

  async findAll(): Promise<Notes[]> {
    return await this.notesRepository.find();
  }

  async findOne(id: string): Promise<Notes> {
    const notes = await this.notesRepository.findOne({ where: { id: id } });
    if (!notes) {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
    return notes;
  }

  async create(createNotesDto: CreateNotesDto): Promise<string> {
    const notes = this.notesRepository.create(createNotesDto);
    const res = await this.notesRepository.save(notes);
    return res.id;
  }

  async update(id: string, updateNotesDto: UpdateNotesDto): Promise<void> {
    const existingNotes = this.findOne(id);
    if (existingNotes) {
      const notes = await this.notesRepository.preload({
        ...updateNotesDto,
      });
      await this.notesRepository.save(notes);
    } else {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: string): Promise<void> {
    const existingNotes = this.findOne(id);
    if (existingNotes) {
      await this.notesRepository.delete(id);
    } else {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }
}
