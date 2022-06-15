import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SessionsService } from "../services";
import { CreateRequestSchema } from "../schemas";
import { UpdateRequestSchema } from "../schemas";

/*
 * For the purpose of acceptance test, response typing is not enforced atm
 */
@Controller("sessions")
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sessionsService.findOne(id);
  }

  @Get("")
  findAll() {
    return this.sessionsService.findAll();
  }

  @Post(":id")
  create(@Body() createRequestSchema: CreateRequestSchema) {
    return this.sessionsService.create(createRequestSchema);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateRequestSchema: UpdateRequestSchema
  ) {
    return this.sessionsService.update(updateRequestSchema);
  }

  @Delete(":id")
  cancel(@Param("id") id: string) {
    return this.sessionsService.cancel(id);
  }
}
