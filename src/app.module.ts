import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";
import { TypeOrmModule } from "@nestjs/typeorm";
console.log(__dirname);

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
      synchronize: false,
      entities: [__dirname + "/**/*.entity.ts", __dirname + "/**/*.entity.js"],
      logging: true,
      // Enable the next too lines to run migrations
      migrationsRun: false,
      dropSchema: false,
      migrations: [
        __dirname + "/migrations/**/*.ts",
        __dirname + "/migrations/**/*.js",
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
