import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from "../user/user.entity";

@Injectable()
export class HelperService {


    /** validate user's password */
    public isPasswordValid(password: string, userPassword: string): boolean {
        return bcrypt.compare(password, userPassword);
    }

    /** encode user's password */
    public encodePassword(password: string): string {
        const salt: string = bcrypt.genSaltSync(10);

        return bcrypt.hashSync(password, salt);
    }
}