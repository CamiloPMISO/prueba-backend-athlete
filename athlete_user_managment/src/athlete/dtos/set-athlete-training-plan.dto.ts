import { IsNotEmpty, IsString } from "class-validator";

export class SetAthleteTrainingPlanDto {
    
    @IsString()
    @IsNotEmpty()
    readonly id: string;

}