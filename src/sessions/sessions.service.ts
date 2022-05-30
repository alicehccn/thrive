import { Injectable } from "@nestjs/common";
import { CreateSessionSchema } from "./schemas/create-session.schema";
import { UpdateSessionSchema } from "./schemas/update-session.schema";

@Injectable()
export class SessionsService {

  findOne(id: string) {
    return `This action returns session ${id}`;
  }

  findAll() {
    return `This action returns all sessions`;
  }

  create(createSessionRequest: CreateSessionSchema) {
    return "This action adds a new session";
  }

  update(updateSessionRequest: UpdateSessionSchema) {
    return `This action updates session ${updateSessionRequest.Id}`;
  }
  
  cancel(id: string) {
    return `This action removes session ${id}`;
  }
}
