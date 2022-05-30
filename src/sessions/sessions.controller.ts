import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SessionsService } from "./sessions.service";
import { CreateSessionSchema } from "./schemas/create-session.schema";
import { UpdateSessionSchema } from "./schemas/update-session.schema";

@Controller("sessions")
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}


  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sessionsService.findOne(id);
  }

  @Get("")
  findByProvider() {
    return this.sessionsService.findAll();
  }

  @Post()
  create(@Body() createSessionSchema: CreateSessionSchema) {
    return this.sessionsService.create(createSessionSchema);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSessionSchema: UpdateSessionSchema) {
    return this.sessionsService.update(updateSessionSchema);
  }

  @Delete(":id")
  cancel(@Param("id") id: string) {
    return this.sessionsService.cancel(id);
  }
}
