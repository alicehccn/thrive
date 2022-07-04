import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotesController } from "./controllers";
import { Author, Note } from "./entities";
import { NotesService } from "./services";

@Module({
  imports: [TypeOrmModule.forFeature([Note, Event, Author])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
