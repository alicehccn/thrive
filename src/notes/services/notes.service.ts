import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto";
import { DataSource, Repository } from "typeorm";

import { CreateNotesDto, UpdateNotesDto } from "../dto";
import { Note } from "../entities";
import { Event } from "../../events/entities/event.entity";

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
    private readonly dataSource: DataSource
  ) {}

  async findAll(paginationQuery: PaginationQueryDto): Promise<Note[]> {
    const { offset, limit } = paginationQuery;
    return await this.notesRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string): Promise<Note> {
    const note = await this.notesRepository.findOne({
      where: { id: id },
      relations: { author: true},
    });
    if (!note) {
      throw new HttpException(`Note-${id} not found`, HttpStatus.NOT_FOUND);
    }
    return note;
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
      throw new HttpException(`Note-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: string): Promise<void> {
    const existingNotes = this.findOne(id);
    if (existingNotes) {
      await this.notesRepository.delete(id);
    } else {
      throw new HttpException(`Note-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  async recommendNote(note: Note): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      note.recommendations++;

      const recommendEvent = new Event();
      recommendEvent.name = "recommend_note";
      recommendEvent.type = "note";
      recommendEvent.payload = { noteId: note.id };

      await queryRunner.manager.save(note);
      await queryRunner.manager.save(recommendEvent);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
