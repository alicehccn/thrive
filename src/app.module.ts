import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.POSTGRES_PORT || 5432,
      username: process.env.DB_USERNAME || 'admin',
      password: process.env.DB_PASSWORD || 'pass123',
      database: process.env.POSTGRES_DB || 'thrive',
      autoLoadEntities: true,
      synchronize: true, // disable in prod
      entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
      migrationsRun: false,
      logging: true,
      migrationsTableName: "migration",
      migrations: [__dirname + '/migration/**/*.ts', __dirname + '/migration/**/*.js'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
