import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserController } from './user/user.controller';
import { UsersModule } from './modules/users/users.module';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
