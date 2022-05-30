import { Module } from '@nestjs/common';
import { SessionsService } from './services';
import { SessionsController } from './controllers';

@Module({
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}
