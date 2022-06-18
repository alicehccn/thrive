import { Test, TestingModule } from "@nestjs/testing";
import { NotesService } from "../services";
import { NotesController } from "./notes.controller";

describe("NotesController", () => {
  let controller: NotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    controller = module.get<NotesController>(NotesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
