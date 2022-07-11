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
      host: "ec2-54-218-16-148.us-west-2.compute.amazonaws.com",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true,
      entities: [__dirname + "/**/*.entity.ts", __dirname + "/**/*.entity.js"],
      logging: true,
      migrationsRun: true,
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
