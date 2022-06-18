import { Module } from "@nestjs/common";
import { NotesController } from "./controllers";
import { NotesService } from "./services";

@Module({
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
