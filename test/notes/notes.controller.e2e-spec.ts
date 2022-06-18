import { Test, TestingModule } from "@nestjs/testing";
import { Body, INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../../src/app.module";
import { uuid } from "uuidv4";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("GET notes", async () => {
    await request(app.getHttpServer()).get("/notes").expect(200).expect(Body);
  });

  it("GET notes/:id", async () => {
    await request(app.getHttpServer())
      .get(`/notes/${uuid()}`)
      .expect(200)
      .expect(Body);
  });
});
