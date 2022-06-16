import { Module } from '@nestjs/common'
import { SessionsService } from './services'
import { SessionsController } from './controllers'
import { MikroOrmModule } from '@mikro-orm/nestjs'

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'thrive',
      type: 'postgresql',
    }),
  ],
  controllers: [SessionsController],
  providers: [SessionsService],
})
export class SessionsModule {}
