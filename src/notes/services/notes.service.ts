import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { v4 } from "uuid";
import { CreateNotesDto } from "../dto/create-notes.dto";
import { UpdateNotesDto } from "../dto/update-notes.dto";
import { Notes } from "../entities";

@Injectable()
export class NotesService {
  private notes: Notes[] = [
    {
      id: "123",
      date: new Date().toISOString(),
      title: "Day 0",
      subtitles: "",
      body: "Let's get started.",
    },
  ];

  findAll(): Notes[] {
    return this.notes;
  }

  findOne(id: string): Notes {
    const notes = this.notes.filter((note) => note.id === id)[0];
    if (!notes) {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
    return notes;
  }

  create(createNotesDto: CreateNotesDto): string {
    const newNotes = {
      id: v4(),
      ...createNotesDto,
    };
    this.notes.push(newNotes);
    return newNotes.id;
  }

  update(id: string, updateNotesDto: UpdateNotesDto): void {
    const existingNotes = this.findOne(id);
    if (existingNotes) {
      // update notes
      console.log("updated:", `notes-${updateNotesDto.id}`);
    } else {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  delete(id: string): void {
    const existingNotes = this.findOne(id);
    if (existingNotes) {
      // delete notes
      console.log("deleted:", `notes-${id}`);
    } else {
      throw new HttpException(`Notes-${id} not found`, HttpStatus.NOT_FOUND);
    }
  }
}
