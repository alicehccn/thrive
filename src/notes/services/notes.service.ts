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
    const { raw: res } = await this.notesRepository.insert(createNotesDto);
    return res[0];
  }

  async update(id: string, updateNotesDto: UpdateNotesDto): Promise<void> {
    const existingNotes = await this.notesRepository.findOne({
      where: { id: id },
    });
    if (existingNotes) {
      await this.notesRepository.update(id, updateNotesDto);
    } else {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: string): Promise<void> {
    const existingNotes = await this.notesRepository.findOne({
      where: { id: id },
    });
    if (existingNotes) {
      await this.notesRepository.delete(id);
    } else {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }
}
