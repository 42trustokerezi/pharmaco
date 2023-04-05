import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HelperService } from '../helper/helper.service';
import { HelperModule } from '../helper/helper.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({
   imports: [
    HelperModule,
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
