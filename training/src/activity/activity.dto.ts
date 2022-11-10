import {IsEnum, IsNotEmpty, IsObject, IsString} from 'class-validator';
import { PlaceDto } from 'src/place/place.dto';
import { ActivityType } from './activity.entity';

export class ActivityDto {

    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsEnum(ActivityType)
    type: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  
    @IsString()
    @IsNotEmpty()
    image: string;
  
    @IsString()
    @IsNotEmpty()
    duration: number;
  
    @IsString()
    @IsNotEmpty()
    start_at: string;
  
    @IsString()
    @IsNotEmpty()
    sport: string;
  
    @IsObject()
    place: PlaceDto;
}