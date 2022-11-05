import { IsNotEmpty, IsString } from "class-validator";

export class SetTimeDto {
    @IsString()
    @IsNotEmpty()
    readonly time: string;
}