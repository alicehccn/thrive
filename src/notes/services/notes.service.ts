import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Notes } from "../entities";

@Injectable()
export class NotesService {
  private notes: Notes[] = [
    {
      id: "123",
      date: new Date(),
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

  create(createNotesDto: Notes): string {
    this.notes.push(createNotesDto);
    return createNotesDto.id;
  }

  update(id: string, updateNotesDto: Notes): void {
    const existingNotes = this.findOne(id);
    if (existingNotes) {
      // update notes
      console.log("updated:", updateNotesDto);
    }
  }

  delete(id: string): void {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }
}
