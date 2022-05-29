import { Injectable } from "@nestjs/common";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";

@Injectable()
export class SessionsService {

  findOne(id: string) {
    return `This action returns session ${id}`;
  }

  findAll() {
    return `This action returns all sessions`;
  }

  create(createSessionDto: CreateSessionDto) {
    return "This action adds a new session";
  }

  update(id: string, updateSessionDto: UpdateSessionDto) {
    return `This action updates session ${id}`;
  }
  
  cancel(id: string) {
    return `This action removes session ${id}`;
  }
}
