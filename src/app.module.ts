import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    NotesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'alicehuang',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true, // disable in prod
      entities: [__dirname + "/**/*.entity.ts", __dirname + "/**/*.entity.js"],
      migrationsRun: true,
      logging: true,
      migrationsTableName: "migrations",
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