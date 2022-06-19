import { Test, TestingModule } from "@nestjs/testing";
import { Body, INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../../src/app.module";
import { notesMock } from "./notes.controller.e2e-mock";

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
      .get("/notes/123")
      .expect(200)
      .expect(Body);
  });

  it("POST notes/", async () => {
    const req = notesMock;
    await request(app.getHttpServer())
      .post("/notes")
      .send(req)
      .expect(201)
      .expect(Body);
  });

  it("PATCH notes/:id", async () => {
    const req = notesMock;
    req.id = "123";
    await request(app.getHttpServer())
      .patch("/notes/123")
      .send(req)
      .expect(200)
      .expect(Body);
  });

  it("DELETE notes/:id", async () => {
    await request(app.getHttpServer())
      .delete("/notes/123")
      .expect(200)
      .expect(Body);
  });
});
