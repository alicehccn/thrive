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
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + "/**/*.entity.ts", __dirname + "/**/*.entity.js"],
      migrationsRun: false,
      logging: true,
      migrationsTableName: "migration",
      migrations: [
        __dirname + "/migration/**/*.ts",
        __dirname + "/migration/**/*.js",
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
