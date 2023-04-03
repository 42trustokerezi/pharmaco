import { IsUUID, IsEmail, IsString, IsStrongPassword, IsDate } from 'class-validator'

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

    @IsStrongPassword()
    public readonly password: string;

    @IsDate()
    public readonly created_at: Date;
}

export class updatePasswordDto {
    @IsStrongPassword()
    public readonly password: string;

    @IsDate()
    public readonly updated_at: Date;
}