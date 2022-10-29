import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { Gender, IDType, NutritionType } from '../athlete.entity';

export class CompleteAthleteDataDto {

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsInt()
  readonly age: number;

  @IsEnum(IDType)
  readonly idType: IDType;

  @IsString()
  @IsNotEmpty()
  readonly idNumber: string;

  @IsEnum(Gender)
  readonly gender: Gender;

  @IsNumber()
  @Min(20)
  readonly weight: number;

  @IsNumber()
  @Min(20)
  readonly height: number;

  @IsString()
  @IsNotEmpty()
  readonly cityOfBirth: string;

  @IsString()
  @IsNotEmpty()
  readonly cityOfResidence: string;

  @IsArray()
  readonly sports: string[];

  @IsEnum(NutritionType)
  readonly nutritionType: NutritionType;
}
