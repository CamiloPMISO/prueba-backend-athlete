import {IsNotEmpty, IsString, IsEmail} from 'class-validator';

export class SimpleAthleteCreationDto {

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
