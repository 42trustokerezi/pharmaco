import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { registerUserDto } from './user.dto';
import { Request } from 'express';
import { User } from './user.entity';
import { HelperService } from '../helper/helper.service';

@Injectable()
export class UserService {
    @InjectRepository(User)
    private readonly repository: Repository<User>;
    
    @Inject(HelperService)
    private readonly helper: HelperService;


  public async registerUser(
    body: registerUserDto,
    req: Request,
  ): Promise<User> {
    const {
      username,
      email,
      firstname,
      lastname,
      password,
      created_at,
    }: registerUserDto = body;
    let user: User = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new User();

    user.username = username;
    user.email = email;
    user.firstname = firstname;
    user.lastname = lastname;
    user.password = this.helper.encodePassword(password);
    user.created_at = new Date();

    return;
  }
}
