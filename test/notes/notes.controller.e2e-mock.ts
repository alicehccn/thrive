import { CreateNotesDto, UpdateNotesDto } from "src/notes/dto";

export const createNotesDto: CreateNotesDto = {
  date: new Date().toISOString(),
  title: "",
  subtitles: "",
  body: "End to end test",
};

export const updateNotesDto = (id: string): UpdateNotesDto => {
  return {
    id,
    title: "Updated title",
    body: "End to end test",
  };
};
