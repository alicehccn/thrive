import { Test, TestingModule } from "@nestjs/testing";
import { Body, INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../../src/app.module";
import { createNotesDto, updateNotesDto } from "./notes.controller.e2e-mock";

let mutable = "";
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
    const res = await request(app.getHttpServer())
      .get("/notes")
      .expect(200)
      .expect(Body);

    mutable = res.body[0].id;
  });

  it("GET notes/:id", async () => {
    await request(app.getHttpServer())
      .get(`/notes/${mutable}`)
      .expect(200)
      .expect(Body);
  });

  it("POST notes/", async () => {
    const req = createNotesDto;
    await request(app.getHttpServer())
      .post("/notes")
      .send(req)
      .expect(201)
      .expect(Body);
  });

  it("PATCH notes/:id", async () => {
    const req = updateNotesDto(mutable);
    await request(app.getHttpServer())
      .patch(`/notes/${mutable}`)
      .send(req)
      .expect(200)
      .expect(Body);
  });

  it("DELETE notes/:id", async () => {
    await request(app.getHttpServer())
      .delete(`/notes/${mutable}`)
      .expect(200)
      .expect(Body);
  });
});
