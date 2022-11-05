import { IsNotEmpty, IsString } from "class-validator";

export class DateProgramInfoDto {
    @IsString()
    @IsNotEmpty()
    readonly date: string;
}