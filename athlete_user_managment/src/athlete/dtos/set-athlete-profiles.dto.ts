import { IsOptional, IsString } from "class-validator";

export class SetAthleteProfilesDto {
    
    @IsString()
    @IsOptional()
    readonly sportProfile: string;

    @IsString()
    @IsOptional()
    readonly demographicProfile: string;

    @IsString()
    @IsOptional()
    readonly foodProfile: string;
}