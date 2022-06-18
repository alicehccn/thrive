import { Test, TestingModule } from "@nestjs/testing";
import { NotesController } from "../controllers";
import { NotesService } from "../services";

describe("NotesService", () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
