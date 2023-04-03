import { IsUUID, IsEmail, IsString } from 'class-validator'

export class registerUserDto {
    @IsUUID()
    public readonly id: string;

    @IsString()
    public readonly username: string;

    @IsString()
    public readonly firstname: string;

    @IsString()
    public readonly lastname: string;

    @IsEmail()
    public readonly email: string;


}