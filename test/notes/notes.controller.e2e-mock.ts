import { v4 } from "uuid";
import { Notes } from "src/notes/entities";

export const notesMock: Notes = {
  id: v4(),
  date: new Date(),
  title: "",
  subtitles: "",
  body: "End to end test",
};
