import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotesController } from "./controllers";
import { Notes } from "./entities";
import { NotesService } from "./services";

@Module({
  imports: [
    // TypeOrmModule.forFeature(Notes),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
