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
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";

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
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionsService.update(id, updateSessionDto);
  }

  @Delete(":id")
  cancel(@Param("id") id: string) {
    return this.sessionsService.cancel(id);
  }
}
